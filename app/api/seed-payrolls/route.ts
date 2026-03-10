import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const employees = await prisma.employee.findMany();

        if (employees.length === 0) {
            return NextResponse.json({ message: "Nenhum funcionário encontrado. Cadastre um funcionário primeiro." }, { status: 400 });
        }

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;

        let createdCount = 0;

        for (const employee of employees) {
            for (let i = 0; i < 24; i++) {
                let year = currentYear;
                let month = currentMonth - i;

                while (month <= 0) {
                    month += 12;
                    year -= 1;
                }

                // Verifica se já existe folha para este mês/ano
                const existing = await prisma.payroll.findUnique({
                    where: {
                        employeeId_month_year: {
                            employeeId: employee.id,
                            month,
                            year,
                        },
                    },
                });

                if (!existing) {
                    // Gerar dados aleatórios baseados no salário atual para simular histórico
                    // Alguns meses podem ter faltas ou variações
                    const baseSalary = employee.baseSalary || 1500;
                    const workingDays = 22;
                    const absences = Math.random() > 0.8 ? Math.floor(Math.random() * 3) + 1 : 0; // 20% de chance de ter 1-3 faltas
                    const absenceDeduction = (baseSalary / 30) * absences;

                    const transportDaily = employee.transportDaily || 0;
                    const transportTotal = (workingDays - absences) * transportDaily;

                    const maxNetTotal = baseSalary - absenceDeduction + transportTotal;
                    // Vamos adicionar um bonus aleatorio pequeno para variar os valores
                    const bonuses = Math.random() > 0.7 ? Math.floor(Math.random() * 100) + 50 : 0;

                    const netTotal = maxNetTotal + bonuses;

                    await prisma.payroll.create({
                        data: {
                            employeeId: employee.id,
                            month,
                            year,
                            baseSalary,
                            workingDays,
                            transportTotal,
                            absences,
                            absenceDeduction,
                            absencesVT: absences,
                            transportDeduction: absences * transportDaily,
                            otherDeductions: 0,
                            bonuses,
                            netTotal: parseFloat(netTotal.toFixed(2)),
                            status: Math.random() > 0.1 ? "PAID" : "PENDING", // Maioria paga, algumas pendentes
                        },
                    });
                    createdCount++;
                }
            }
        }

        return NextResponse.json({ message: `Sucesso. Foram criados ${createdCount} registros de folha retroativos para teste.` });
    } catch (error: any) {
        console.error("Erro ao gerar dummy data:", error.message);
        return NextResponse.json({ error: "Erro interno no servidor ao rodar o seed." }, { status: 500 });
    }
}
