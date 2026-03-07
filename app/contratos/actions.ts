"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getContracts() {
    return await prisma.contract.findMany({
        orderBy: { createdAt: "desc" },
    });
}

export async function addContract(formData: FormData) {
    const clientName = formData.get("clientName") as string;
    const document = formData.get("document") as string;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const startDateStr = formData.get("startDate") as string;
    const endDateStr = formData.get("endDate") as string;
    const status = formData.get("status") as string;

    const startDate = new Date(startDateStr + "T12:00:00Z");
    const endDate = endDateStr ? new Date(endDateStr + "T12:00:00Z") : null;

    await prisma.contract.create({
        data: {
            clientName,
            document,
            title,
            content,
            status,
            startDate,
            endDate,
        },
    });

    revalidatePath("/contratos");
}

export async function deleteContract(id: string) {
    await prisma.contract.delete({ where: { id } });
    revalidatePath("/contratos");
}
