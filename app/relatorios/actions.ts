"use server";

import { prisma } from "@/lib/prisma";
import { WEEKDAY_LABELS, type Weekday } from "@/lib/work-schedule";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

type PayrollReportEmployee = {
    id: string;
    name: string;
    role: string;
    type: string;
    baseSalary: number;
    hourlyRate: number | null;
    cestaBasica: number | null;
    isAulista: boolean;
    transportDaily: number | null;
};

type PaymentReportItem = {
    id: string;
    employeeId: string;
    month: number;
    year: number;
    baseSalary: number;
    workingDays: number | null;
    transportTotal: number | null;
    absences: number;
    absencesVT: number;
    absenceDeduction: number;
    transportDeduction: number;
    otherDeductions: number;
    bonuses: number;
    grossEarnings: number;
    inssDeduction: number;
    irrfDeduction: number;
    fgtsValue: number;
    salaryAdvance: number;
    hoursAulista: number | null;
    netTotal: number;
    status: string;
    employee: PayrollReportEmployee;
    isRescisao?: boolean;
};

const payrollEmployeeSelect = {
    id: true,
    name: true,
    role: true,
    type: true,
    baseSalary: true,
    hourlyRate: true,
    cestaBasica: true,
    isAulista: true,
    transportDaily: true,
} as const;

const payrollReportSelect = {
    id: true,
    employeeId: true,
    month: true,
    year: true,
    baseSalary: true,
    workingDays: true,
    transportTotal: true,
    absences: true,
    absencesVT: true,
    absenceDeduction: true,
    transportDeduction: true,
    otherDeductions: true,
    bonuses: true,
    grossEarnings: true,
    inssDeduction: true,
    irrfDeduction: true,
    fgtsValue: true,
    salaryAdvance: true,
    hoursAulista: true,
    netTotal: true,
    status: true,
    employee: { select: payrollEmployeeSelect },
} as const;

export async function getEmployeesList() {
    const session = await getServerSession(authOptions);
    if (!session) throw new Error("Não autorizado");

    try {

        const employees = await prisma.employee.findMany({
            select: {
                id: true,
                name: true,
            },
            orderBy: {
                name: "asc",
            },
            where: {
                active: true, // Only active employees might make sense, or maybe all depending on historical
            }
        });
        return employees;
    } catch (error) {
        console.error("Erro ao buscar lista de colaboradores:", error);
        return [];
    }
}

export async function getEmployeeRegistrationReport() {
    const session = await getServerSession(authOptions);
    if (!session) throw new Error("Não autorizado");

    try {
        const employees = await prisma.employee.findMany({
            where: { active: true },
            include: {
                employeeSubjects: {
                    include: { subject: true },
                    orderBy: { subject: { name: "asc" } },
                },
                teachingAssignments: {
                    include: { subject: true },
                    orderBy: [{ weekday: "asc" }, { startTime: "asc" }],
                },
                salaryAdjustments: {
                    orderBy: { effectiveDate: "desc" },
                },
            },
            orderBy: { name: "asc" },
        });

        return employees.map((employee) => ({
            id: employee.id,
            name: employee.name,
            cpf: employee.cpf,
            type: employee.type,
            role: employee.role,
            baseSalary: employee.baseSalary,
            profilePhotoUrl: employee.profilePhotoUrl,
            startDate: employee.startDate?.toISOString() || null,
            eatsAtSchool: employee.eatsAtSchool,
            transportDaily: employee.transportDaily,
            gasAssistance: employee.gasAssistance,
            pixKey: employee.pixKey,
            paymentMethod: employee.paymentMethod,
            bankName: employee.bankName,
            accountType: employee.accountType,
            agency: employee.agency,
            accountNumber: employee.accountNumber,
            recurringDeductions: employee.recurringDeductions,
            temporaryDeductions: employee.temporaryDeductions,
            temporaryDeductionsDesc: employee.temporaryDeductionsDesc,
            temporaryDeductionsExpiration: employee.temporaryDeductionsExpiration,
            hourlyRate: employee.hourlyRate,
            cestaBasica: employee.cestaBasica,
            isAulista: employee.isAulista,
            salaryAdvance: employee.salaryAdvance,
            active: employee.active,
            subjects: employee.employeeSubjects.map(({ subject }) => subject.name),
            teachingAssignments: employee.teachingAssignments.map((assignment) => ({
                id: assignment.id,
                weekday: assignment.weekday,
                weekdayLabel: WEEKDAY_LABELS[assignment.weekday as Weekday] || `Dia ${assignment.weekday}`,
                subjectName: assignment.subject.name,
                classGroup: assignment.classGroup,
                lessonStart: assignment.lessonStart,
                lessonEnd: assignment.lessonEnd,
                fullDay: assignment.fullDay,
                hours: assignment.hours,
            })),
            salaryAdjustments: employee.salaryAdjustments.map((adjustment) => ({
                id: adjustment.id,
                effectiveDate: adjustment.effectiveDate.toISOString(),
                previousSalary: adjustment.previousSalary,
                newSalary: adjustment.newSalary,
                adjustmentValue: adjustment.adjustmentValue,
                notes: adjustment.notes,
            })),
        }));
    } catch (error) {
        console.error("Erro ao gerar relatório cadastral de funcionários:", error);
        return [];
    }
}

export async function getMonthlyReport(month: number, year: number) {
    const session = await getServerSession(authOptions);
    if (!session) throw new Error("Não autorizado");

    try {

        const [payrolls, rescisoes] = await Promise.all([
            prisma.payroll.findMany({
                where: { month, year },
                select: payrollReportSelect,
                orderBy: { employee: { name: 'asc' } }
            }),
            prisma.rescisao.findMany({
                where: { month, year },
                include: {
                    employee: {
                        select: payrollEmployeeSelect
                    }
                }
            })
        ]);

        // Mapear rescisões para o formato do relatório
        const mappedRescisoes = rescisoes.map(r => ({
            id: r.id,
            employeeId: r.employeeId,
            month: r.month,
            year: r.year,
            baseSalary: r.employee.baseSalary,
            workingDays: null,
            transportTotal: 0,
            absences: 0,
            absencesVT: 0,
            absenceDeduction: 0,
            transportDeduction: 0,
            otherDeductions: r.inss + r.inss13 + (r.irrf || 0),
            bonuses: r.totalBruto - r.employee.baseSalary, // Diferença como bônus para fechar o bruto
            grossEarnings: r.totalBruto,
            inssDeduction: r.inss + r.inss13,
            irrfDeduction: r.irrf,
            fgtsValue: 0,
            salaryAdvance: 0,
            hoursAulista: null,
            netTotal: r.totalLiquido,
            status: r.status,
            employee: r.employee,
            isRescisao: true
        }));

        const allPayments: PaymentReportItem[] = [...payrolls, ...mappedRescisoes].sort((a, b) =>
            a.employee.name.localeCompare(b.employee.name)
        );

        // Calcular totais
        const totals = allPayments.reduce(
            (acc: { totalNet: number, totalBase: number, count: number }, curr) => {
                acc.totalNet += curr.netTotal;
                acc.totalBase += curr.baseSalary;
                acc.count += 1;
                return acc;
            },
            { totalNet: 0, totalBase: 0, count: 0 }
        );

        return { payrolls: allPayments, totals };
    } catch (error) {
        console.error("Erro ao gerar relatório mensal:", error);
        return { payrolls: [], totals: { totalNet: 0, totalBase: 0, count: 0 } };
    }
}

export async function getCollaboratorReport(employeeId: string) {
    const session = await getServerSession(authOptions);
    if (!session) throw new Error("Não autorizado");

    try {

        const [payrolls, rescisoes] = await Promise.all([
            prisma.payroll.findMany({
                where: { employeeId },
                select: payrollReportSelect,
                orderBy: [{ year: 'desc' }, { month: 'desc' }],
                take: 24
            }),
            prisma.rescisao.findMany({
                where: { employeeId },
                include: {
                    employee: {
                        select: payrollEmployeeSelect
                    }
                }
            })
        ]);

        const mappedRescisoes = rescisoes.map(r => ({
            id: r.id,
            employeeId: r.employeeId,
            month: r.month,
            year: r.year,
            baseSalary: r.employee.baseSalary,
            workingDays: null,
            transportTotal: 0,
            absences: 0,
            absencesVT: 0,
            absenceDeduction: 0,
            transportDeduction: 0,
            otherDeductions: r.inss + r.inss13 + (r.irrf || 0),
            bonuses: r.totalBruto - r.employee.baseSalary,
            grossEarnings: r.totalBruto,
            inssDeduction: r.inss + r.inss13,
            irrfDeduction: r.irrf,
            fgtsValue: 0,
            salaryAdvance: 0,
            hoursAulista: null,
            netTotal: r.totalLiquido,
            status: r.status,
            employee: r.employee,
            isRescisao: true
        }));

        const allPayments: PaymentReportItem[] = [...payrolls, ...mappedRescisoes].sort((a, b) => {
            if (a.year !== b.year) return b.year - a.year;
            return b.month - a.month;
        }).slice(0, 24);

        const employee = await prisma.employee.findUnique({
            where: { id: employeeId },
            select: { name: true, role: true, cpf: true }
        });

        // Totals para o colaborador nesses meses
        const totals = allPayments.reduce(
            (acc: { totalReceived: number }, curr) => {
                acc.totalReceived += curr.netTotal;
                return acc;
            },
            { totalReceived: 0 }
        );

        return { payrolls: allPayments, employee, totals };
    } catch (error) {
        console.error("Erro ao gerar histórico do colaborador:", error);
        return { payrolls: [], employee: null, totals: { totalReceived: 0 } };
    }
}
