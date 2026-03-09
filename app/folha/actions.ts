"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

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

    const employee = await prisma.employee.findUnique({ where: { id: employeeId } });
    if (!employee) throw new Error("Employee not found");

    const baseSalary = employee.baseSalary;
    let salaryProportional = 0;
    let transportTotal = 0;
    let totalBonuses = bonuses;

    const dailyRate = baseSalary / totalDays;
    const absenceDeduction = absences * dailyRate;
    let transportDeduction = 0;

    if (employee.type === "PJ" || employee.type === "VOLUNTARIO") {
        salaryProportional = baseSalary - absenceDeduction;

        if (employee.transportDaily && workingDays > 0) {
            transportTotal = workingDays * employee.transportDaily;
            if (absencesVT > 0) {
                transportDeduction = absencesVT * employee.transportDaily;
                transportTotal = transportTotal - transportDeduction;
            }
        }
        if (employee.gasAssistance) {
            totalBonuses += employee.gasAssistance;
        }
    } else if (employee.type === "CLT") {
        salaryProportional = baseSalary - absenceDeduction;
    }

    const netTotal = salaryProportional + transportTotal + totalBonuses - otherDeductions;

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
