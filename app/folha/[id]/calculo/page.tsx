import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calculator, FileText, CheckCircle } from "lucide-react";

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
    const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    const isCLT = employee.type === "CLT";

    // Setup months
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Informações do Colaborador (1/3) */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-[24px] shadow-premium border border-wine-100/50">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-wine-100 p-3 rounded-full text-wine-700">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-wine-950">Dados do Colaborador</h2>
                                <p className="text-xs text-wine-600">Informações base para o cálculo</p>
                            </div>
                        </div>

                        <div className="divide-y divide-wine-50">
                            <div className="flex justify-between py-3">
                                <span className="text-wine-600 font-medium text-sm">Nome</span>
                                <span className="text-wine-950 font-bold">{employee.name}</span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="text-wine-600 font-medium text-sm">Cargo</span>
                                <span className="text-wine-950 font-bold">{employee.role}</span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="text-wine-600 font-medium text-sm">Tipo de Contrato</span>
                                <span className="text-wine-950 font-bold">{employee.type}</span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="text-wine-600 font-medium text-sm">Salário Base</span>
                                <span className="text-wine-950 font-bold">{currency.format(payroll.baseSalary)}</span>
                            </div>
                            {employee.isAulista && (
                                <div className="flex justify-between py-3">
                                    <span className="text-wine-600 font-medium text-sm">Valor Hora-Aula</span>
                                    <span className="text-wine-950 font-bold">{currency.format(employee.hourlyRate || 0)}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    
                    {/* Status Box */}
                    <div className={`p-6 rounded-[24px] shadow-premium border flex items-center justify-between
                        ${payroll.status === "PAID" 
                            ? "bg-emerald-50 border-emerald-200" 
                            : "bg-amber-50 border-amber-200"}`}
                    >
                        <div>
                            <h3 className={`text-sm font-bold uppercase tracking-widest mb-1
                                ${payroll.status === "PAID" ? "text-emerald-700" : "text-amber-700"}`}>
                                Status do Pagamento
                            </h3>
                            <p className="text-2xl font-black font-display tracking-tight text-wine-950">
                                {currency.format(payroll.netTotal)}
                            </p>
                        </div>
                        {payroll.status === "PAID" ? (
                            <CheckCircle className="w-10 h-10 text-emerald-500" />
                        ) : (
                            <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                                Pendente
                            </div>
                        )}
                    </div>
                </div>

                {/* Memória de Cálculo (2/3) */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-[24px] shadow-premium border border-wine-100/50">
                        <h2 className="text-xl font-bold text-wine-950 mb-6 border-b border-wine-100 pb-4">
                            Detalhamento do Cálculo
                        </h2>

                        {/* Proventos (+) */}
                        <div className="mb-8">
                            <h3 className="text-emerald-700 font-bold uppercase tracking-widest text-xs flex items-center gap-2 mb-4">
                                <span className="bg-emerald-100 text-emerald-700 w-5 h-5 flex items-center justify-center rounded-sm">+</span>
                                Proventos (Ganhos)
                            </h3>
                            <div className="bg-emerald-50/50 rounded-xl border border-emerald-100/50 p-4 space-y-3">
                                {employee.isAulista ? (() => {
                                    const aulasBase = (payroll.hoursAulista || 0) * (employee.hourlyRate || 0);
                                    return (
                                    <>
                                        <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-emerald-50">
                                            <div>
                                                <p className="font-bold text-wine-900 text-sm">Horas Aula</p>
                                                <p className="text-xs text-wine-500">{payroll.hoursAulista || 0} horas × {currency.format(employee.hourlyRate || 0)}</p>
                                            </div>
                                            <span className="font-medium text-emerald-700">{currency.format(aulasBase)}</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-emerald-50">
                                            <div>
                                                <p className="font-bold text-wine-900 text-sm">DSR (Descanso Semanal Remunerado)</p>
                                                <p className="text-xs text-wine-500">1/6 do valor das aulas</p>
                                            </div>
                                            <span className="font-medium text-emerald-700">{currency.format(aulasBase * (1/6))}</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-emerald-50">
                                            <div>
                                                <p className="font-bold text-wine-900 text-sm">Hora Atividade</p>
                                                <p className="text-xs text-wine-500">5% do valor das aulas</p>
                                            </div>
                                            <span className="font-medium text-emerald-700">{currency.format(aulasBase * 0.05)}</span>
                                        </div>
                                    </>
                                    );
                                })() : (() => {
                                    const isTeacher = employee.role.toUpperCase().includes("PROFESSOR");
                                    const horaAtividade = isTeacher ? payroll.baseSalary * 0.05 : 0;
                                    return (
                                        <>
                                            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-emerald-50">
                                                <div>
                                                    <p className="font-bold text-wine-900 text-sm">Salário Mês</p>
                                                    <p className="text-xs text-wine-500">Salário Base</p>
                                                </div>
                                                <span className="font-medium text-emerald-700">{currency.format(payroll.baseSalary)}</span>
                                            </div>
                                            {isTeacher && (
                                                <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-emerald-50">
                                                    <div>
                                                        <p className="font-bold text-wine-900 text-sm">Hora Atividade</p>
                                                        <p className="text-xs text-wine-500">5% do salário base</p>
                                                    </div>
                                                    <span className="font-medium text-emerald-700">{currency.format(horaAtividade)}</span>
                                                </div>
                                            )}
                                        </>
                                    );
                                })()}
                                
                                {(() => {
                                    const cesta = employee.cestaBasica || 0;
                                    const actualBonuses = payroll.bonuses - cesta;
                                    return (
                                        <>
                                            {cesta > 0 && (
                                                <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-emerald-50">
                                                    <div>
                                                        <p className="font-bold text-wine-900 text-sm">Cesta Básica</p>
                                                        <p className="text-xs text-wine-500">Benefício</p>
                                                    </div>
                                                    <span className="font-medium text-emerald-700">{currency.format(cesta)}</span>
                                                </div>
                                            )}
                                            {actualBonuses > 0 && (
                                                <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-emerald-50">
                                                    <div>
                                                        <p className="font-bold text-wine-900 text-sm">Bônus / Adicionais</p>
                                                    </div>
                                                    <span className="font-medium text-emerald-700">{currency.format(actualBonuses)}</span>
                                                </div>
                                            )}
                                        </>
                                    );
                                })()}
                                {(payroll.transportTotal ?? 0) > 0 && (
                                    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-emerald-50">
                                        <div>
                                            <p className="font-bold text-wine-900 text-sm">Vale Transporte (Recebimento)</p>
                                            <p className="text-xs text-wine-500">{payroll.workingDays} dias - {payroll.absencesVT} faltas VT × {currency.format(employee.transportDaily || 0)}</p>
                                        </div>
                                        <span className="font-medium text-emerald-700">{currency.format(payroll.transportTotal || 0)}</span>
                                    </div>
                                )}
                                
                                {/* Total de Proventos Line */}
                                <div className="border-t-2 border-emerald-200/50 pt-3 mt-4 flex justify-between items-center">
                                    <span className="font-bold text-wine-950">Total de Vencimentos Acumulado</span>
                                    <span className="font-black text-emerald-700 text-lg">{currency.format(payroll.grossEarnings > 0 ? payroll.grossEarnings : (payroll.baseSalary + payroll.bonuses + (payroll.transportTotal || 0)))}</span>
                                </div>
                            </div>
                        </div>

                        {/* Descontos (-) */}
                        <div className="mb-8">
                            <h3 className="text-rose-700 font-bold uppercase tracking-widest text-xs flex items-center gap-2 mb-4">
                                <span className="bg-rose-100 text-rose-700 w-5 h-5 flex items-center justify-center rounded-sm">-</span>
                                Descontos (Retenções)
                            </h3>
                            <div className="bg-rose-50/50 rounded-xl border border-rose-100/50 p-4 space-y-3">
                                {isCLT && payroll.inssDeduction > 0 && (
                                    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-rose-50">
                                        <div>
                                            <p className="font-bold text-wine-900 text-sm">INSS</p>
                                            <p className="text-xs text-wine-500">Desconto Previdenciário</p>
                                        </div>
                                        <span className="font-medium text-rose-700">-{currency.format(payroll.inssDeduction)}</span>
                                    </div>
                                )}
                                {isCLT && payroll.irrfDeduction > 0 && (
                                    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-rose-50">
                                        <div>
                                            <p className="font-bold text-wine-900 text-sm">IRRF</p>
                                            <p className="text-xs text-wine-500">Imposto de Renda (Retido na Fonte)</p>
                                        </div>
                                        <span className="font-medium text-rose-700">-{currency.format(payroll.irrfDeduction)}</span>
                                    </div>
                                )}
                                {payroll.absenceDeduction > 0 && (
                                    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-rose-50">
                                        <div>
                                            <p className="font-bold text-wine-900 text-sm">Faltas</p>
                                            <p className="text-xs text-wine-500">{payroll.absences} dias</p>
                                        </div>
                                        <span className="font-medium text-rose-700">-{currency.format(payroll.absenceDeduction)}</span>
                                    </div>
                                )}
                                {payroll.transportDeduction > 0 && (
                                    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-rose-50">
                                        <div>
                                            <p className="font-bold text-wine-900 text-sm">Desconto VT (Faltas)</p>
                                            <p className="text-xs text-wine-500">{payroll.absencesVT} faltas VT × {currency.format(employee.transportDaily || 0)}</p>
                                        </div>
                                        <span className="font-medium text-rose-700">-{currency.format(payroll.transportDeduction)}</span>
                                    </div>
                                )}
                                {payroll.salaryAdvance > 0 && (
                                    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-rose-50">
                                        <div>
                                            <p className="font-bold text-wine-900 text-sm">Adiantamento Mensal</p>
                                        </div>
                                        <span className="font-medium text-rose-700">-{currency.format(payroll.salaryAdvance)}</span>
                                    </div>
                                )}
                                {payroll.otherDeductions > 0 && (
                                    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-rose-50">
                                        <div>
                                            <p className="font-bold text-wine-900 text-sm">Outros Descontos</p>
                                            <p className="text-xs text-wine-500">Saúde, etc.</p>
                                        </div>
                                        <span className="font-medium text-rose-700">-{currency.format(payroll.otherDeductions)}</span>
                                    </div>
                                )}

                                {/* Total de Descontos Line */}
                                <div className="border-t-2 border-rose-200/50 pt-3 mt-4 flex justify-between items-center">
                                    <span className="font-bold text-wine-950">Total de Descontos Acumulado</span>
                                    <span className="font-black text-rose-700 text-lg">
                                        -{currency.format(payroll.inssDeduction + payroll.irrfDeduction + payroll.absenceDeduction + payroll.transportDeduction + payroll.salaryAdvance + payroll.otherDeductions)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Totais Finais (=) */}
                        <div>
                            <div className="bg-wine-950 text-white rounded-[16px] p-6 shadow-premium relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-0"></div>
                                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-wine-200/80 mb-1">
                                            Valor Líquido a Receber
                                        </h3>
                                        <p className="text-4xl md:text-5xl font-black tracking-tight font-display text-white">
                                            {currency.format(payroll.netTotal)}
                                        </p>
                                    </div>
                                    
                                    {isCLT && (
                                        <div className="text-right border-t md:border-t-0 md:border-l border-white/20 pt-4 md:pt-0 md:pl-6">
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-wine-300 mb-1">
                                                Recolhimento FGTS
                                            </h4>
                                            <p className="text-xl font-bold text-wine-100">
                                                {currency.format(payroll.fgtsValue)}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

