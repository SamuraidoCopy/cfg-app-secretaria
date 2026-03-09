"use client";

import { useState, use } from "react";
import GeneratePayrollModal from "./GeneratePayrollModal";
import EditPayrollModal from "./EditPayrollModal";
import MonthPicker from "../components/MonthPicker";
import { markAsPaid, deletePayroll } from "./actions";
import { DollarSign, CheckCircle, FileText, Trash2, Printer } from "lucide-react";
import Link from "next/link";
import PixButton from "./PixButton";
import PixModal from "./PixModal";

export default function FolhaView({
    searchParams,
    initialData,
    employees,
    currentMonth,
    currentYear
}: {
    searchParams: any;
    initialData: any[];
    employees: any[];
    currentMonth: number;
    currentYear: number;
}) {
    const [selectedPix, setSelectedPix] = useState<{ key: string, amount: number, payrollId: string } | null>(null);

    const payrolls = initialData;

    return (
        <div className="w-full h-full pb-10">
            <header className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-wine-950">Folha de Pagamento</h1>
                    <p className="text-wine-800/70 mt-1">Gerencie os holerites e recibos do mês selecionado</p>
                </div>
                <div className="flex flex-wrap gap-3 items-center w-full md:w-auto">
                    <MonthPicker currentMonth={currentMonth} currentYear={currentYear} />
                    <GeneratePayrollModal employees={employees} currentMonth={currentMonth} currentYear={currentYear} />
                </div>
            </header>

            {/* KPI da folha atual */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-wine-950 to-wine-900 text-white p-6 flex flex-col md:col-span-2 rounded-[24px] shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-wine-800/50 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-0 group-hover:bg-white/10 transition-colors duration-500"></div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-wine-200/80 z-10 mb-2">Total Líquido da Folha</h3>
                    <span className="text-4xl md:text-5xl font-black tracking-tight font-display z-10 break-words line-clamp-1">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                            payrolls.reduce((sum: number, p: any) => sum + p.netTotal, 0)
                        )}
                    </span>
                </div>
                <div className="bg-white p-6 flex flex-col justify-center rounded-[24px] shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-wine-100/50">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-wine-500 mb-2">Processados</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-wine-950 tracking-tight font-display">
                            {payrolls.length}
                        </span>
                        <span className="text-lg text-wine-400 font-medium">/ {employees.length}</span>
                    </div>
                </div>
                <div className="bg-white p-6 flex flex-col justify-center rounded-[24px] shadow-[0_8px_30px_rgb(225,29,72,0.08)] hover:shadow-[0_8px_30px_rgb(225,29,72,0.16)] transition-all duration-300 border border-rose-100/50">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-2">Faltas & Descontos</h3>
                    <span className="text-3xl font-bold text-rose-600 tracking-tight font-display">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                            payrolls.reduce((sum: number, p: any) => sum + p.absenceDeduction + (p.transportDeduction || 0) + p.otherDeductions, 0)
                        )}
                    </span>
                </div>
            </div>

            <div className="bg-white rounded-[24px] shadow-premium border border-wine-100/50 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-wine-50/50 border-b border-wine-100/50 text-wine-900 text-xs uppercase tracking-wider">
                                <th className="px-6 py-4 font-semibold">Nome & Cargo</th>
                                <th className="px-6 py-4 font-semibold hidden sm:table-cell">CPF</th>
                                <th className="px-6 py-4 font-semibold">Tipo</th>
                                <th className="px-6 py-4 font-semibold text-right">Faltas & Desc.</th>
                                <th className="px-6 py-4 font-semibold text-right">Benefícios (+)</th>
                                <th className="px-6 py-4 font-semibold text-right">Líquido</th>
                                <th className="px-6 py-4 font-semibold text-center">PIX</th>
                                <th className="px-6 py-4 font-semibold text-center">Status</th>
                                <th className="px-6 py-4 font-semibold text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-wine-100">
                            {payrolls.length === 0 ? (
                                <tr>
                                    <td colSpan={9} className="px-6 py-16 text-center text-wine-500">
                                        <DollarSign className="w-12 h-12 mx-auto text-wine-200 mb-4" />
                                        <p className="font-semibold text-lg text-wine-900">Nenhum cálculo processado neste mês.</p>
                                        <p className="text-sm mt-1 text-wine-600">Use o botão "Lançar Folha" acima para começar.</p>
                                    </td>
                                </tr>
                            ) : (
                                payrolls.map((p: any) => (
                                    <tr key={p.id} className="hover:bg-wine-50/80 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-wine-950">{p.employee.name}</div>
                                            <div className="text-xs text-wine-700 font-medium">{p.employee.role}</div>
                                        </td>
                                        <td className="px-6 py-4 hidden sm:table-cell text-wine-900 font-mono text-sm">{p.employee.cpf}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] uppercase tracking-widest font-bold ${p.employee.type === "PJ" ? "bg-amber-100/50 text-amber-800" : "bg-blue-100/50 text-blue-800"
                                                }`}>
                                                {p.employee.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-rose-600 font-medium text-sm text-right">
                                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(p.absenceDeduction + (p.transportDeduction || 0) + p.otherDeductions)}
                                        </td>
                                        <td className="px-6 py-4 text-emerald-600 font-medium text-sm text-right">
                                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((p.transportTotal || 0) + p.bonuses)}
                                        </td>
                                        <td className="px-6 py-4 text-wine-950 font-bold text-lg text-right font-display tracking-tight">
                                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(p.netTotal)}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <PixButton
                                                pixKey={p.employee.pixKey || ''}
                                                onOpen={() => setSelectedPix({ key: p.employee.pixKey, amount: p.netTotal, payrollId: p.id })}
                                            />
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {p.status === "PAID" ? (
                                                <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest">
                                                    <CheckCircle className="w-3 h-3" /> PAGO
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-100 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest">
                                                    PENDENTE
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-center gap-2">
                                                <Link href={`/folha/${p.id}/recibo`} target="_blank" className="p-2 text-wine-700 hover:bg-wine-100 rounded-lg transition-colors" title="Gerar PDF">
                                                    <Printer className="w-4 h-4" />
                                                </Link>
                                                {p.status !== "PAID" && (
                                                    <EditPayrollModal payroll={p} />
                                                )}
                                                {p.status !== "PAID" && (
                                                    <form action={markAsPaid.bind(null, p.id)} className="inline-block">
                                                        <button type="submit" className="p-2 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors" title="Marcar como Pago">
                                                            <CheckCircle className="w-4 h-4" />
                                                        </button>
                                                    </form>
                                                )}
                                                <form action={deletePayroll.bind(null, p.id)} className="inline-block">
                                                    <button type="submit" className="p-2 text-wine-400 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-colors" title="Remover">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedPix && (
                <PixModal
                    isOpen={!!selectedPix}
                    onClose={() => setSelectedPix(null)}
                    pixKey={selectedPix.key}
                    amount={selectedPix.amount}
                    onConfirmPayment={async () => {
                        await markAsPaid(selectedPix.payrollId);
                        setSelectedPix(null);
                    }}
                />
            )}
        </div>
    );
}
