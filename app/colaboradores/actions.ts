"use server";

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/lib/generated/client";
import { revalidatePath } from "next/cache";
import { DEFAULT_SUBJECT_OPTIONS, isClassGroupOption } from "@/lib/subjects";

type AssignmentInput = {
    subjectName?: string;
    weekday?: string | number;
    classGroup?: string;
    lessons?: number[];
    fullDay?: boolean;
    hours?: string | number;
};

function optionalString(value: FormDataEntryValue | null) {
    const text = typeof value === "string" ? value.trim() : "";
    return text ? text : null;
}

function numberFromForm(formData: FormData, key: string, fallback = 0) {
    const raw = formData.get(key);
    if (typeof raw !== "string" || raw.trim() === "") return fallback;
    const value = parseFloat(raw);
    return Number.isFinite(value) ? value : fallback;
}

function nullableNumberFromForm(formData: FormData, key: string) {
    const raw = formData.get(key);
    if (typeof raw !== "string" || raw.trim() === "") return null;
    const value = parseFloat(raw);
    return Number.isFinite(value) ? value : null;
}

function dateFromForm(formData: FormData, key: string) {
    const raw = optionalString(formData.get(key));
    if (!raw) return null;
    const date = new Date(`${raw}T12:00:00`);
    return Number.isNaN(date.getTime()) ? null : date;
}

function parseSubjects(formData: FormData) {
    return [...new Set(formData.getAll("subjects")
        .filter((value): value is string => typeof value === "string")
        .map((item) => item.trim())
        .filter(Boolean))];
}

function parseAssignments(formData: FormData): AssignmentInput[] {
    const raw = optionalString(formData.get("teachingAssignments"));
    if (!raw) return [];

    try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.filter((item) => item && typeof item === "object");
    } catch {
        return [];
    }
}

async function saveProfilePhoto(formData: FormData, existingUrl?: string | null) {
    const file = formData.get("profilePhoto");
    if (!(file instanceof File) || file.size === 0) return existingUrl || null;

    const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
    if (!allowedTypes.has(file.type)) {
        throw new Error("Formato de foto invalido. Use JPG, PNG, WEBP ou GIF.");
    }

    const extensionByType: Record<string, string> = {
        "image/jpeg": "jpg",
        "image/png": "png",
        "image/webp": "webp",
        "image/gif": "gif",
    };
    const extension = extensionByType[file.type] || "jpg";
    const uploadDir = path.join(process.cwd(), "public", "uploads", "employees");
    await mkdir(uploadDir, { recursive: true });

    const fileName = `${crypto.randomUUID()}.${extension}`;
    const bytes = Buffer.from(await file.arrayBuffer());
    await writeFile(path.join(uploadDir, fileName), bytes);

    return `/uploads/employees/${fileName}`;
}

function baseEmployeeData(formData: FormData, profilePhotoUrl: string | null) {
    return {
        name: optionalString(formData.get("name")) || "",
        cpf: optionalString(formData.get("cpf")) || "",
        type: optionalString(formData.get("type")) || "PJ",
        role: optionalString(formData.get("role")) || "",
        baseSalary: numberFromForm(formData, "baseSalary"),
        profilePhotoUrl,
        startDate: dateFromForm(formData, "startDate"),
        eatsAtSchool: formData.get("eatsAtSchool") === "on",
        transportDaily: nullableNumberFromForm(formData, "transportDaily"),
        gasAssistance: nullableNumberFromForm(formData, "gasAssistance"),
        pixKey: optionalString(formData.get("pixKey")),
        recurringDeductions: numberFromForm(formData, "recurringDeductions"),
        temporaryDeductions: numberFromForm(formData, "temporaryDeductions"),
        temporaryDeductionsDesc: optionalString(formData.get("temporaryDeductionsDesc")),
        temporaryDeductionsExpiration: optionalString(formData.get("temporaryDeductionsExpiration")),
        paymentMethod: optionalString(formData.get("paymentMethod")) || "PIX",
        bankName: optionalString(formData.get("bankName")),
        accountType: optionalString(formData.get("accountType")),
        agency: optionalString(formData.get("agency")),
        accountNumber: optionalString(formData.get("accountNumber")),
        isAulista: formData.get("isAulista") === "true",
        hourlyRate: nullableNumberFromForm(formData, "hourlyRate"),
        cestaBasica: nullableNumberFromForm(formData, "cestaBasica"),
        salaryAdvance: numberFromForm(formData, "salaryAdvance"),
    };
}

type TransactionClient = Prisma.TransactionClient;
type EmployeeActionResult = { ok: true } | { ok: false; error: string };

function isUniqueConstraintError(error: unknown, field: string) {
    if (!(error instanceof Prisma.PrismaClientKnownRequestError) || error.code !== "P2002") {
        return false;
    }

    const target = error.meta?.target;
    return Array.isArray(target) && target.includes(field);
}

function cpfInUseResult(): EmployeeActionResult {
    return {
        ok: false,
        error: "Ja existe um colaborador cadastrado com este CPF. Confira o cadastro existente antes de continuar.",
    };
}

export async function ensureDefaultSubjects() {
    await prisma.subject.createMany({
        data: DEFAULT_SUBJECT_OPTIONS.map((name) => ({ name })),
        skipDuplicates: true,
    });
}

export async function getSubjectCatalog() {
    await ensureDefaultSubjects();

    const subjects = await prisma.subject.findMany({
        include: {
            _count: {
                select: {
                    employeeSubjects: true,
                    teachingAssignments: true,
                },
            },
        },
        orderBy: { name: "asc" },
    });

    return subjects.map((subject) => ({
        id: subject.id,
        name: subject.name,
        usageCount: subject._count.employeeSubjects + subject._count.teachingAssignments,
    }));
}

export async function addSubject(formData: FormData) {
    const name = optionalString(formData.get("name"));
    if (!name) return;

    await prisma.subject.upsert({
        where: { name },
        update: {},
        create: { name },
    });

    revalidatePath("/colaboradores");
}

export async function deleteSubject(id: string) {
    const usage = await prisma.subject.findUnique({
        where: { id },
        include: {
            _count: {
                select: {
                    employeeSubjects: true,
                    teachingAssignments: true,
                },
            },
        },
    });

    if (!usage) return;
    if (usage._count.employeeSubjects > 0 || usage._count.teachingAssignments > 0) {
        throw new Error("Nao e possivel remover uma materia em uso.");
    }

    await prisma.subject.delete({ where: { id } });
    revalidatePath("/colaboradores");
}

async function ensureAndGetSubjectsMap(subjectNames: string[], assignments: AssignmentInput[]): Promise<Map<string, string>> {
    const allSubjectNames = [
        ...new Set([
            ...subjectNames,
            ...assignments.map(a => typeof a.subjectName === "string" ? a.subjectName.trim() : "").filter(Boolean)
        ])
    ];

    if (allSubjectNames.length === 0) return new Map();

    // Find existing subjects using global prisma client
    const existingSubjects = await prisma.subject.findMany({
        where: { name: { in: allSubjectNames } }
    });
    const existingNames = new Set(existingSubjects.map(s => s.name));
    const missingNames = allSubjectNames.filter(name => !existingNames.has(name));

    // Create missing subjects in one batch using global prisma client
    if (missingNames.length > 0) {
        await prisma.subject.createMany({
            data: missingNames.map(name => ({ name })),
            skipDuplicates: true
        });
    }

    // Retrieve all subject IDs now that they exist using global prisma client
    const subjects = await prisma.subject.findMany({
        where: { name: { in: allSubjectNames } }
    });
    return new Map(subjects.map(s => [s.name, s.id]));
}

async function replaceEmployeeAcademicData(
    tx: TransactionClient, 
    employeeId: string, 
    subjectNames: string[], 
    assignments: AssignmentInput[],
    subjectIdMap: Map<string, string>
) {
    await tx.employeeSubject.deleteMany({ where: { employeeId } });
    await tx.teachingAssignment.deleteMany({ where: { employeeId } });

    if (subjectIdMap.size === 0) return;

    // Build unique employeeSubject list to create in one batch
    const employeeSubjectIds = new Set<string>();
    for (const name of subjectNames) {
        const id = subjectIdMap.get(name);
        if (id) employeeSubjectIds.add(id);
    }
    for (const assignment of assignments) {
        const subjectName = typeof assignment.subjectName === "string" ? assignment.subjectName.trim() : "";
        if (subjectName) {
            const id = subjectIdMap.get(subjectName);
            if (id) employeeSubjectIds.add(id);
        }
    }

    if (employeeSubjectIds.size > 0) {
        await tx.employeeSubject.createMany({
            data: Array.from(employeeSubjectIds).map(subjectId => ({
                employeeId,
                subjectId,
            })),
            skipDuplicates: true,
        });
    }

    // Build teaching assignments array to create in one batch
    const teachingAssignmentsData = [];

    for (const assignment of assignments) {
        const subjectName = typeof assignment.subjectName === "string" ? assignment.subjectName.trim() : "";
        const weekday = Number(assignment.weekday);
        const hours = Number(assignment.hours);
        const classGroup = typeof assignment.classGroup === "string" ? assignment.classGroup.trim() : "";
        const fullDay = classGroup === "Infantil" || assignment.fullDay === true;
        const lessons = Array.isArray(assignment.lessons) ? assignment.lessons : [];

        if (!subjectName || !isClassGroupOption(classGroup) || !Number.isInteger(weekday) || weekday < 1 || weekday > 7 || !Number.isFinite(hours) || hours <= 0) {
            continue;
        }

        if (!fullDay && lessons.length === 0) {
            continue;
        }

        const subjectId = subjectIdMap.get(subjectName);
        if (!subjectId) continue;

        if (fullDay) {
            teachingAssignmentsData.push({
                employeeId,
                subjectId,
                weekday,
                startTime: "DIA_TODO",
                endTime: "DIA_TODO",
                classGroup,
                lessonStart: null,
                lessonEnd: null,
                fullDay: true,
                hours,
            });
        } else {
            // Split hours among the selected lessons
            const hoursPerLesson = Number((hours / lessons.length).toFixed(2));
            
            for (const lesson of lessons) {
                teachingAssignmentsData.push({
                    employeeId,
                    subjectId,
                    weekday,
                    startTime: `AULA_${lesson}`,
                    endTime: `AULA_${lesson}`,
                    classGroup,
                    lessonStart: lesson,
                    lessonEnd: lesson,
                    fullDay: false,
                    hours: hoursPerLesson,
                });
            }
        }
    }

    if (teachingAssignmentsData.length > 0) {
        await tx.teachingAssignment.createMany({
            data: teachingAssignmentsData,
        });
    }
}

export async function getEmployees() {
    return await prisma.employee.findMany({
        where: { active: true },
        include: {
            employeeSubjects: { include: { subject: true }, orderBy: { subject: { name: "asc" } } },
            teachingAssignments: { include: { subject: true }, orderBy: [{ weekday: "asc" }, { startTime: "asc" }] },
            salaryAdjustments: { orderBy: { effectiveDate: "asc" } },
        },
        orderBy: { name: "asc" },
    });
}

export async function addEmployee(formData: FormData): Promise<EmployeeActionResult> {
    const subjectNames = parseSubjects(formData);
    const assignments = parseAssignments(formData);
    const cpf = optionalString(formData.get("cpf")) || "";

    const existingEmployee = await prisma.employee.findUnique({ where: { cpf } });
    if (existingEmployee) {
        return cpfInUseResult();
    }

    const profilePhotoUrl = await saveProfilePhoto(formData);

    const subjectIdMap = await ensureAndGetSubjectsMap(subjectNames, assignments);

    try {
        await prisma.$transaction(async (tx) => {
            const employee = await tx.employee.create({
                data: baseEmployeeData(formData, profilePhotoUrl),
            });

            await replaceEmployeeAcademicData(tx, employee.id, subjectNames, assignments, subjectIdMap);
        }, { maxWait: 20000, timeout: 30000 });
    } catch (error) {
        if (isUniqueConstraintError(error, "cpf")) {
            return cpfInUseResult();
        }
        throw error;
    }

    revalidatePath("/colaboradores");
    revalidatePath("/folha");
    return { ok: true };
}

export async function updateEmployee(formData: FormData): Promise<EmployeeActionResult> {
    const id = formData.get("id") as string;
    const current = await prisma.employee.findUnique({ where: { id } });
    if (!current) return { ok: false, error: "Colaborador nao encontrado." };

    const subjectNames = parseSubjects(formData);
    const assignments = parseAssignments(formData);
    const isReajuste = formData.get("isReajuste") === "true";
    const cpf = optionalString(formData.get("cpf")) || "";

    const existingEmployee = await prisma.employee.findUnique({ where: { cpf } });
    if (existingEmployee && existingEmployee.id !== id) {
        return cpfInUseResult();
    }

    const profilePhotoUrl = await saveProfilePhoto(formData, current.profilePhotoUrl);
    const data = baseEmployeeData(formData, profilePhotoUrl);
    const subjectIdMap = await ensureAndGetSubjectsMap(subjectNames, assignments);

    try {
        await prisma.$transaction(async (tx) => {
            await tx.employee.update({
                where: { id },
                data,
            });

            const initialPayValue = nullableNumberFromForm(formData, "initialPayValue");
            const firstAdjustment = await tx.salaryAdjustment.findFirst({
                where: { employeeId: id },
                orderBy: { effectiveDate: "asc" },
            });

            if (firstAdjustment && initialPayValue !== null && firstAdjustment.previousSalary !== initialPayValue) {
                await tx.salaryAdjustment.update({
                    where: { id: firstAdjustment.id },
                    data: {
                        previousSalary: initialPayValue,
                        adjustmentValue: Number((firstAdjustment.newSalary - initialPayValue).toFixed(2)),
                    },
                });
            }

            const previousPayValue = data.isAulista ? current.hourlyRate || 0 : current.baseSalary;
            const newPayValue = data.isAulista ? data.hourlyRate || 0 : data.baseSalary;

            if (isReajuste && previousPayValue !== newPayValue) {
                await tx.salaryAdjustment.create({
                    data: {
                        employeeId: id,
                        effectiveDate: dateFromForm(formData, "salaryAdjustmentDate") || new Date(),
                        previousSalary: previousPayValue,
                        newSalary: newPayValue,
                        adjustmentValue: Number((newPayValue - previousPayValue).toFixed(2)),
                        notes: optionalString(formData.get("salaryAdjustmentNotes")),
                    },
                });
            }

            await replaceEmployeeAcademicData(tx, id, subjectNames, assignments, subjectIdMap);
        }, { maxWait: 20000, timeout: 30000 });
    } catch (error) {
        if (isUniqueConstraintError(error, "cpf")) {
            return cpfInUseResult();
        }
        throw error;
    }

    revalidatePath("/colaboradores");
    revalidatePath("/folha");
    return { ok: true };
}

export async function deleteEmployee(id: string) {
    await prisma.employee.update({
        where: { id },
        data: { active: false },
    });
    revalidatePath("/colaboradores");
    revalidatePath("/folha");
}
