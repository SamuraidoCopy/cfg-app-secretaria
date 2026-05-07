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

        const [payrolls, rescisoes] = await Promise.all([
            prisma.payroll.findMany({
                where: { month, year },
                include: {
                    employee: {
                        select: { id: true, name: true, role: true, cpf: true, baseSalary: true }
                    }
                },
                orderBy: { employee: { name: 'asc' } }
            }),
            prisma.rescisao.findMany({
                where: { month, year },
                include: {
                    employee: {
                        select: { id: true, name: true, role: true, cpf: true, baseSalary: true }
                    }
                }
            })
        ]);

        // Mapear rescisões para o formato do relatório
        const mappedRescisoes = rescisoes.map(r => ({
            id: r.id,
            month: r.month,
            year: r.year,
            baseSalary: r.employee.baseSalary,
            workingDays: null,
            transportTotal: 0,
            absences: 0,
            absenceDeduction: 0,
            transportDeduction: 0,
            otherDeductions: r.inss + r.inss13 + (r.irrf || 0),
            bonuses: r.totalBruto - r.employee.baseSalary, // Diferença como bônus para fechar o bruto
            netTotal: r.totalLiquido,
            status: r.status,
            employee: r.employee,
            isRescisao: true
        }));

        const allPayments = [...payrolls, ...mappedRescisoes].sort((a: any, b: any) => 
            a.employee.name.localeCompare(b.employee.name)
        );

        // Calcular totais
        const totals = allPayments.reduce(
            (acc: { totalNet: number, totalBase: number, count: number }, curr: any) => {
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
                include: {
                    employee: {
                        select: { id: true, name: true, role: true, cpf: true, baseSalary: true }
                    }
                },
                orderBy: [{ year: 'desc' }, { month: 'desc' }],
                take: 24
            }),
            prisma.rescisao.findMany({
                where: { employeeId },
                include: {
                    employee: {
                        select: { id: true, name: true, role: true, cpf: true, baseSalary: true }
                    }
                }
            })
        ]);

        const mappedRescisoes = rescisoes.map(r => ({
            id: r.id,
            month: r.month,
            year: r.year,
            baseSalary: r.employee.baseSalary,
            workingDays: null,
            transportTotal: 0,
            absences: 0,
            absenceDeduction: 0,
            transportDeduction: 0,
            otherDeductions: r.inss + r.inss13 + (r.irrf || 0),
            bonuses: r.totalBruto - r.employee.baseSalary,
            netTotal: r.totalLiquido,
            status: r.status,
            employee: r.employee,
            isRescisao: true
        }));

        const allPayments = [...payrolls, ...mappedRescisoes].sort((a: any, b: any) => {
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
