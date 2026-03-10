"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


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

export async function getMonthlyReport(month: number, year: number) {
    const session = await getServerSession(authOptions);
    if (!session) throw new Error("Não autorizado");

    try {

        const payrolls = await prisma.payroll.findMany({
            where: {
                month,
                year,
            },
            include: {
                employee: {
                    select: {
                        id: true,
                        name: true,
                        role: true,
                        cpf: true,
                        baseSalary: true,
                    }
                }
            },
            orderBy: {
                employee: {
                    name: 'asc'
                }
            }
        });

        // Calcular totais
        const totals = payrolls.reduce(
            (acc: { totalNet: number, totalBase: number, count: number }, curr) => {
                acc.totalNet += curr.netTotal;
                acc.totalBase += curr.baseSalary;
                acc.count += 1;
                return acc;
            },
            { totalNet: 0, totalBase: 0, count: 0 }
        );

        return { payrolls, totals };
    } catch (error) {
        console.error("Erro ao gerar relatório mensal:", error);
        return { payrolls: [], totals: { totalNet: 0, totalBase: 0, count: 0 } };
    }
}

export async function getCollaboratorReport(employeeId: string) {
    const session = await getServerSession(authOptions);
    if (!session) throw new Error("Não autorizado");

    try {

        const payrolls = await prisma.payroll.findMany({
            where: {
                employeeId,
            },
            include: {
                employee: {
                    select: {
                        id: true,
                        name: true,
                        role: true,
                        cpf: true,
                        baseSalary: true,
                    }
                }
            },
            orderBy: [
                { year: 'desc' },
                { month: 'desc' },
            ],
            take: 24, // Limitar a 24 meses
        });

        const employee = await prisma.employee.findUnique({
            where: { id: employeeId },
            select: { name: true, role: true, cpf: true }
        });

        // Totals para o colaborador nesses meses
        const totals = payrolls.reduce(
            (acc: { totalReceived: number }, curr) => {
                acc.totalReceived += curr.netTotal;
                return acc;
            },
            { totalReceived: 0 }
        );

        return { payrolls, employee, totals };
    } catch (error) {
        console.error("Erro ao gerar histórico do colaborador:", error);
        return { payrolls: [], employee: null, totals: { totalReceived: 0 } };
    }
}
