"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getTransactions(month: number, year: number) {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0, 23, 59, 59);

    return await prisma.financialTransaction.findMany({
        where: {
            date: {
                gte: startDate,
                lte: endDate,
            }
        },
        orderBy: { date: "desc" },
    });
}

export async function addTransaction(formData: FormData) {
    const title = formData.get("title") as string;
    const type = formData.get("type") as string;
    const amount = parseFloat(formData.get("amount") as string);
    const category = formData.get("category") as string;
    const dateStr = formData.get("date") as string;
    const description = formData.get("description") as string | null;

    // Usa o fuso horário utc ao inves de local pra nao mudar dia dependendo do horario
    const date = new Date(dateStr + "T12:00:00Z");

    await prisma.financialTransaction.create({
        data: {
            title,
            type,
            amount,
            category,
            date,
            description,
        },
    });

    revalidatePath("/financeiro");
}

export async function deleteTransaction(id: string) {
    await prisma.financialTransaction.delete({ where: { id } });
    revalidatePath("/financeiro");
}
