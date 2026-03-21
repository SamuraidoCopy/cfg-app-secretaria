"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getEmployees() {
    return await prisma.employee.findMany({
        orderBy: { name: "asc" },
    });
}

export async function addEmployee(formData: FormData) {
    const name = formData.get("name") as string;
    const cpf = formData.get("cpf") as string;
    const type = formData.get("type") as string;
    const role = formData.get("role") as string;
    const baseSalary = parseFloat(formData.get("baseSalary") as string);
    const transportDailyRaw = formData.get("transportDaily") as string;
    const transportDaily = transportDailyRaw ? parseFloat(transportDailyRaw) : null;
    const gasAssistanceRaw = formData.get("gasAssistance") as string;
    const gasAssistance = gasAssistanceRaw ? parseFloat(gasAssistanceRaw) : null;
    const pixKey = (formData.get("pixKey") as string) || null;
    const recurringDeductionsRaw = formData.get("recurringDeductions") as string;
    const recurringDeductions = recurringDeductionsRaw ? parseFloat(recurringDeductionsRaw) : 0;
    const temporaryDeductionsRaw = formData.get("temporaryDeductions") as string;
    const temporaryDeductions = temporaryDeductionsRaw ? parseFloat(temporaryDeductionsRaw) : 0;
    const temporaryDeductionsDesc = (formData.get("temporaryDeductionsDesc") as string) || null;
    const temporaryDeductionsExpiration = (formData.get("temporaryDeductionsExpiration") as string) || null;

    const paymentMethod = (formData.get("paymentMethod") as string) || "PIX";
    const bankName = (formData.get("bankName") as string) || null;
    const accountType = (formData.get("accountType") as string) || null;
    const agency = (formData.get("agency") as string) || null;
    const accountNumber = (formData.get("accountNumber") as string) || null;

    // CLT specific fields
    const isAulista = formData.get("isAulista") === "true";
    const hourlyRateRaw = formData.get("hourlyRate") as string;
    const hourlyRate = hourlyRateRaw ? parseFloat(hourlyRateRaw) : null;
    const cestaBasicaRaw = formData.get("cestaBasica") as string;
    const cestaBasica = cestaBasicaRaw ? parseFloat(cestaBasicaRaw) : null;
    const salaryAdvanceRaw = formData.get("salaryAdvance") as string;
    const salaryAdvance = salaryAdvanceRaw ? parseFloat(salaryAdvanceRaw) : 0;

    await prisma.employee.create({
        data: {
            name,
            cpf,
            type,
            role,
            baseSalary,
            transportDaily,
            gasAssistance,
            pixKey,
            recurringDeductions,
            temporaryDeductions,
            temporaryDeductionsDesc,
            temporaryDeductionsExpiration,
            paymentMethod,
            bankName,
            accountType,
            agency,
            accountNumber,
            isAulista,
            hourlyRate,
            cestaBasica,
            salaryAdvance,
        },
    });

    revalidatePath("/colaboradores");
}

export async function updateEmployee(formData: FormData) {
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const cpf = formData.get("cpf") as string;
    const type = formData.get("type") as string;
    const role = formData.get("role") as string;
    const baseSalary = parseFloat(formData.get("baseSalary") as string);
    const transportDailyRaw = formData.get("transportDaily") as string;
    const transportDaily = transportDailyRaw ? parseFloat(transportDailyRaw) : null;
    const gasAssistanceRaw = formData.get("gasAssistance") as string;
    const gasAssistance = gasAssistanceRaw ? parseFloat(gasAssistanceRaw) : null;
    const pixKey = (formData.get("pixKey") as string) || null;
    const recurringDeductionsRaw = formData.get("recurringDeductions") as string;
    const recurringDeductions = recurringDeductionsRaw ? parseFloat(recurringDeductionsRaw) : 0;
    const temporaryDeductionsRaw = formData.get("temporaryDeductions") as string;
    const temporaryDeductions = temporaryDeductionsRaw ? parseFloat(temporaryDeductionsRaw) : 0;
    const temporaryDeductionsDesc = (formData.get("temporaryDeductionsDesc") as string) || null;
    const temporaryDeductionsExpiration = (formData.get("temporaryDeductionsExpiration") as string) || null;

    const paymentMethod = (formData.get("paymentMethod") as string) || "PIX";
    const bankName = (formData.get("bankName") as string) || null;
    const accountType = (formData.get("accountType") as string) || null;
    const agency = (formData.get("agency") as string) || null;
    const accountNumber = (formData.get("accountNumber") as string) || null;

    // CLT specific fields
    const isAulista = formData.get("isAulista") === "true";
    const hourlyRateRaw = formData.get("hourlyRate") as string;
    const hourlyRate = hourlyRateRaw ? parseFloat(hourlyRateRaw) : null;
    const cestaBasicaRaw = formData.get("cestaBasica") as string;
    const cestaBasica = cestaBasicaRaw ? parseFloat(cestaBasicaRaw) : null;
    const salaryAdvanceRaw = formData.get("salaryAdvance") as string;
    const salaryAdvance = salaryAdvanceRaw ? parseFloat(salaryAdvanceRaw) : 0;

    await prisma.employee.update({
        where: { id },
        data: {
            name,
            cpf,
            type,
            role,
            baseSalary,
            transportDaily,
            gasAssistance,
            pixKey,
            recurringDeductions,
            temporaryDeductions,
            temporaryDeductionsDesc,
            temporaryDeductionsExpiration,
            paymentMethod,
            bankName,
            accountType,
            agency,
            accountNumber,
            isAulista,
            hourlyRate,
            cestaBasica,
            salaryAdvance,
        },
    });

    revalidatePath("/colaboradores");
}

export async function deleteEmployee(id: string) {
    await prisma.employee.delete({
        where: { id },
    });
    revalidatePath("/colaboradores");
}
