import "dotenv/config";
import { prisma } from "./lib/prisma";

async function main() {
    console.log("Iniciando o seed de folha de pagamento...");
    const employees = await prisma.employee.findMany();

    if (employees.length === 0) {
        console.log("Nenhum funcionário encontrado. Cadastre um funcionário primeiro.");
        return;
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    let createdCount = 0;

    for (const employee of employees) {
        console.log(`Gerando dados para ${employee.name}...`);
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
                const baseSalary = employee.baseSalary || 1500;
                const workingDays = 22;
                const absences = Math.random() > 0.8 ? Math.floor(Math.random() * 3) + 1 : 0;
                const absenceDeduction = (baseSalary / 30) * absences;

                const transportDaily = employee.transportDaily || 0;
                const transportTotal = (workingDays - absences) * transportDaily;

                const maxNetTotal = baseSalary - absenceDeduction + transportTotal;
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
                        status: Math.random() > 0.1 ? "PAID" : "PENDING",
                    },
                });
                createdCount++;
            }
        }
    }

    console.log(`Sucesso. Foram criados ${createdCount} registros de folha retroativos para teste.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
