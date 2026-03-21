"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { calculateProgressiveINSS, inssTable2026, calculateIRRF, calculateFGTS, calculateTeacherComponents } from "@/lib/payroll-calc";

export async function getPayrolls(month: number, year: number) {
    return await prisma.payroll.findMany({
        where: { month, year },
        include: { employee: true },
        orderBy: { employee: { name: "asc" } },
    });
}

export async function generatePayrollForEmployee(formData: FormData) {
    const employeeId = formData.get("employeeId") as string;
    const month = parseInt(formData.get("month") as string);
    const year = parseInt(formData.get("year") as string);

    const workingDays = formData.get("workingDays") ? parseInt(formData.get("workingDays") as string) : 0;
    const totalDays = formData.get("totalDays") ? parseInt(formData.get("totalDays") as string) : 30; // Padrão 30 para cálculo base
    const absences = formData.get("absences") ? parseInt(formData.get("absences") as string) : 0;
    const absencesVT = formData.get("absencesVT") ? parseInt(formData.get("absencesVT") as string) : 0;
    const otherDeductions = formData.get("otherDeductions") ? parseFloat(formData.get("otherDeductions") as string) : 0;
    const bonuses = formData.get("bonuses") ? parseFloat(formData.get("bonuses") as string) : 0;
    const hoursAulista = formData.get("hoursAulista") ? parseFloat(formData.get("hoursAulista") as string) : 0;

    const employee = await prisma.employee.findUnique({ where: { id: employeeId } });
    if (!employee) throw new Error("Employee not found");

    const baseSalary = employee.baseSalary;
    let salaryProportional = 0;
    let transportTotal = 0;
    let totalBonuses = bonuses + (employee.cestaBasica || 0);

    // Buscar adiantamento pago para este mês (se não enviado manualmente)
    let salaryAdvance = formData.get("salaryAdvance") ? parseFloat(formData.get("salaryAdvance") as string) : -1;
    
    if (salaryAdvance === -1) {
        const paidAdvance = await prisma.payrollAdvance.findFirst({
            where: {
                employeeId,
                month,
                year,
                status: "PAID"
            }
        });
        salaryAdvance = paidAdvance?.amount || 0;
    }

    const dailyRate = Number((baseSalary / totalDays).toFixed(4)); // More precision here for intermediate
    const absenceDeduction = Number((absences * dailyRate).toFixed(2));
    let transportDeduction = 0;

    // Calcular VT de forma unificada para todos os tipos
    if (employee.transportDaily && workingDays > 0) {
        transportTotal = Number((workingDays * employee.transportDaily).toFixed(2));
        if (absencesVT > 0) {
            transportDeduction = Number((absencesVT * employee.transportDaily).toFixed(2));
            transportTotal = Number((transportTotal - transportDeduction).toFixed(2));
        }
    }

    if (employee.type === "PJ" || employee.type === "VOLUNTARIO") {
        salaryProportional = baseSalary - absenceDeduction;

        if (employee.gasAssistance) {
            totalBonuses += employee.gasAssistance;
        }
    } else if (employee.type === "CLT") {
        if (employee.isAulista) {
            const aulasBase = hoursAulista * (employee.hourlyRate || 0);
            const teacherData = calculateTeacherComponents(aulasBase);
            
            const grossEarnings = teacherData.baseInss; // Aulas + DSR + Hora Ativ
            const inssDeduction = calculateProgressiveINSS(grossEarnings, inssTable2026);
            const irrfDeduction = calculateIRRF(grossEarnings - inssDeduction);
            const fgtsValue = calculateFGTS(grossEarnings);
            
            salaryProportional = grossEarnings - inssDeduction - irrfDeduction;
            
            // For Aulistas, we reuse some fields to store specific CLT values
            await prisma.payroll.upsert({
                where: { employeeId_month_year: { employeeId, month, year } },
                update: {
                    baseSalary: employee.baseSalary, // Salário base original do cadastro
                    workingDays,
                    transportTotal,
                    grossEarnings,
                    inssDeduction,
                    irrfDeduction,
                    fgtsValue,
                    otherDeductions,
                    absences,
                    absenceDeduction,
                    absencesVT,
                    transportDeduction,
                    salaryAdvance,
                    hoursAulista,
                    netTotal: Number((salaryProportional + transportTotal + totalBonuses - otherDeductions - absenceDeduction - salaryAdvance).toFixed(2)),
                },
                create: {
                    employeeId, month, year,
                    baseSalary: employee.baseSalary,
                    workingDays,
                    transportTotal,
                    grossEarnings,
                    inssDeduction,
                    irrfDeduction,
                    fgtsValue,
                    otherDeductions,
                    absences,
                    absenceDeduction,
                    absencesVT,
                    transportDeduction,
                    bonuses: totalBonuses,
                    salaryAdvance,
                    hoursAulista,
                    netTotal: salaryProportional + transportTotal + totalBonuses - otherDeductions - absenceDeduction - salaryAdvance,
                }
            });
            revalidatePath("/folha");
            return;
        } else {
            // Mensalista CLT
            const isTeacher = employee.role.toUpperCase().includes("PROFESSOR");
            const horaAtividade = isTeacher ? Number((baseSalary * 0.05).toFixed(2)) : 0;

            const grossEarnings = baseSalary - absenceDeduction + horaAtividade;
            const inssDeduction = calculateProgressiveINSS(grossEarnings, inssTable2026);
            const irrfDeduction = calculateIRRF(grossEarnings - inssDeduction);
            const fgtsValue = calculateFGTS(grossEarnings);
            
            salaryProportional = grossEarnings - inssDeduction - irrfDeduction;
            
            await prisma.payroll.upsert({
                where: { employeeId_month_year: { employeeId, month, year } },
                update: {
                    baseSalary,
                    workingDays,
                    transportTotal,
                    grossEarnings,
                    inssDeduction,
                    irrfDeduction,
                    fgtsValue,
                    absences,
                    absenceDeduction,
                    absencesVT,
                    transportDeduction,
                    otherDeductions,
                    bonuses: totalBonuses,
                    salaryAdvance,
                    netTotal: Number((salaryProportional + transportTotal + totalBonuses - otherDeductions - salaryAdvance).toFixed(2)),
                },
                create: {
                    employeeId, month, year,
                    baseSalary,
                    workingDays,
                    transportTotal,
                    grossEarnings,
                    inssDeduction,
                    irrfDeduction,
                    fgtsValue,
                    absences,
                    absenceDeduction,
                    absencesVT,
                    transportDeduction,
                    otherDeductions,
                    bonuses: totalBonuses,
                    salaryAdvance,
                    netTotal: Number((salaryProportional + transportTotal + totalBonuses - otherDeductions - salaryAdvance).toFixed(2)),
                }
            });
            revalidatePath("/folha");
            return;
        }
    }

    const netTotal = Number((salaryProportional + transportTotal + totalBonuses - otherDeductions - salaryAdvance).toFixed(2));

    await prisma.payroll.upsert({
        where: {
            employeeId_month_year: {
                employeeId, month, year
            }
        },
        update: {
            baseSalary,
            workingDays,
            transportTotal,
            absences,
            absenceDeduction,
            absencesVT,
            transportDeduction,
            otherDeductions,
            bonuses: totalBonuses,
            salaryAdvance,
            netTotal,
        },
        create: {
            employeeId,
            month,
            year,
            baseSalary,
            workingDays,
            transportTotal,
            absences,
            absenceDeduction,
            absencesVT,
            transportDeduction,
            otherDeductions,
            bonuses: totalBonuses,
            salaryAdvance,
            netTotal,
        }
    });

    revalidatePath("/folha");
}

export async function deletePayroll(id: string) {
    await prisma.payroll.delete({ where: { id } });
    revalidatePath("/folha");
}

export async function markAsPaid(id: string) {
    await prisma.payroll.update({ where: { id }, data: { status: "PAID" } });
    revalidatePath("/folha");
}
