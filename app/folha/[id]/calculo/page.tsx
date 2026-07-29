import PayrollCalculationDetails from "@/app/components/PayrollCalculationDetails";
import { buildPayrollBreakdown } from "@/lib/payroll-breakdown";
import { prisma } from "@/lib/prisma";
import { ArrowLeft, Calculator } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CalculoFolhaPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const payroll = await prisma.payroll.findUnique({
        where: { id },
        include: { employee: true },
    });

    if (!payroll) {
        notFound();
    }

    const { employee } = payroll;
    const breakdown = buildPayrollBreakdown({ employee, payroll });
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const mesReferencia = meses[payroll.month - 1];

    return (
        <div className="w-full h-full pb-10">
            <header className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                    <Link
                        href="/folha"
                        className="p-2 bg-white rounded-full text-wine-600 hover:bg-wine-100 transition-colors shadow-sm"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-wine-950 flex items-center gap-3">
                            <Calculator className="w-8 h-8 text-wine-600" />
                            Relatório de Cálculo de Salário
                        </h1>
                        <p className="text-wine-800/70 mt-1">
                            Memória de cálculo detalhada para {employee.name} referente a {mesReferencia} de {payroll.year}
                        </p>
                    </div>
                </div>
            </header>

            <PayrollCalculationDetails
                breakdown={breakdown}
                variant="standalone"
                panelId={`payroll-calculation-${payroll.id}`}
            />
        </div>
    );
}
