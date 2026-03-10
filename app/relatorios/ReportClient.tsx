"use client";

import { useState, useEffect } from "react";
import { getEmployeesList, getMonthlyReport, getCollaboratorReport } from "./actions";

// Define some typings based on our Prisma schema output
type EmployeeInfo = {
    id: string;
    name: string;
    role: string;
    cpf: string;
    baseSalary: number;
};

type PayrollInfo = {
    id: string;
    month: number;
    year: number;
    baseSalary: number;
    workingDays: number | null;
    transportTotal: number | null;
    absences: number;
    absenceDeduction: number;
    transportDeduction: number;
    otherDeductions: number;
    bonuses: number;
    netTotal: number;
    status: string;
    employeeId?: string;
    employee?: EmployeeInfo;
};

export default function ReportClient() {
    const [activeTab, setActiveTab] = useState<"MONTHLY" | "COLLABORATOR">("MONTHLY");

    // Filter states for MONTHLY
    const currentDate = new Date();
    const [selectedMonth, setSelectedMonth] = useState<number>(currentDate.getMonth() + 1);
    const [selectedYear, setSelectedYear] = useState<number>(currentDate.getFullYear());

    // Filter states for COLLABORATOR
    const [employees, setEmployees] = useState<{ id: string, name: string }[]>([]);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState<string>("");

    // Data states
    const [monthlyData, setMonthlyData] = useState<{
        payrolls: PayrollInfo[],
        totals: { totalNet: number, totalBase: number, count: number }
    } | null>(null);

    const [collaboratorData, setCollaboratorData] = useState<{
        payrolls: PayrollInfo[],
        employee: any,
        totals: { totalReceived: number }
    } | null>(null);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Initial fetch for employees list
        getEmployeesList().then(list => {
            setEmployees(list);
            if (list.length > 0) {
                setSelectedEmployeeId(list[0].id);
            }
        });
    }, []);

    useEffect(() => {
        async function loadMonthly() {
            setIsLoading(true);
            const res = await getMonthlyReport(selectedMonth, selectedYear);
            setMonthlyData(res);
            setIsLoading(false);
        }
        if (activeTab === "MONTHLY") {
            loadMonthly();
        }
    }, [activeTab, selectedMonth, selectedYear]);

    useEffect(() => {
        async function loadCollaborator() {
            if (!selectedEmployeeId) return;
            setIsLoading(true);
            const res = await getCollaboratorReport(selectedEmployeeId);
            setCollaboratorData(res);
            setIsLoading(false);
        }
        if (activeTab === "COLLABORATOR" && selectedEmployeeId) {
            loadCollaborator();
        }
    }, [activeTab, selectedEmployeeId]);


    const handlePrint = () => {
        window.print();
    };

    const getMonthName = (m: number) => {
        return new Date(2000, m - 1, 1).toLocaleString('pt-BR', { month: 'long' });
    };

    const formatCurrency = (val: number) => {
        return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    return (
        <div className="p-6 md:p-12 min-h-screen font-sans bg-cream-100 text-wine-950 print:p-0 print:bg-white print:text-black">

            {/* Header that hides on print */}
            <div className="mb-10 print:hidden animate-in fade-in slide-in-from-top-4 duration-700">
                <h1 className="text-4xl font-display font-black text-wine-900 mb-2 tracking-tight">
                    Relatórios de Pagamento
                </h1>
                <p className="text-wine-400 font-medium mb-8">Consulte e emita extratos mensais e individuais.</p>

                <div className="flex space-x-1 p-1 bg-wine-100/50 rounded-2xl w-fit backdrop-blur-sm border border-wine-200">
                    <button
                        className={`py-2.5 px-6 rounded-xl transition-all duration-300 font-semibold text-sm ${activeTab === "MONTHLY" ? "bg-white text-wine-800 shadow-premium" : "text-wine-400 hover:text-wine-600"}`}
                        onClick={() => setActiveTab("MONTHLY")}
                    >
                        Relatório Mensal
                    </button>
                    <button
                        className={`py-2.5 px-6 rounded-xl transition-all duration-300 font-semibold text-sm ${activeTab === "COLLABORATOR" ? "bg-white text-wine-800 shadow-premium" : "text-wine-400 hover:text-wine-600"}`}
                        onClick={() => setActiveTab("COLLABORATOR")}
                    >
                        Por Colaborador
                    </button>
                </div>
            </div>

            {activeTab === "MONTHLY" && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 print:hidden glass-card p-6 md:p-8">
                        <div className="flex space-x-6 items-center w-full md:w-auto mb-6 md:mb-0">
                            <div className="flex-1 md:flex-none">
                                <label className="block text-xs font-black uppercase tracking-widest text-wine-400 mb-2">Competência (Mês)</label>
                                <select
                                    className="w-full md:w-48 rounded-xl border-wine-200 shadow-sm p-3 bg-cream-50 text-wine-900 font-medium focus:ring-2 focus:ring-wine-500/20 focus:border-wine-500 transition-all outline-none"
                                    value={selectedMonth}
                                    onChange={e => setSelectedMonth(Number(e.target.value))}
                                >
                                    {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                                        <option key={m} value={m} className="bg-white text-wine-900">{getMonthName(m)}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex-1 md:flex-none">
                                <label className="block text-xs font-black uppercase tracking-widest text-wine-400 mb-2">Ano</label>
                                <select
                                    className="w-full md:w-32 rounded-xl border-wine-200 shadow-sm p-3 bg-cream-50 text-wine-900 font-medium focus:ring-2 focus:ring-wine-500/20 focus:border-wine-500 transition-all outline-none"
                                    value={selectedYear}
                                    onChange={e => setSelectedYear(Number(e.target.value))}
                                >
                                    {Array.from({ length: 5 }, (_, i) => currentDate.getFullYear() - i).map(y => (
                                        <option key={y} value={y} className="bg-white text-wine-900">{y}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <button
                            onClick={handlePrint}
                            className="w-full md:w-auto bg-wine-800 text-cream-50 px-8 py-3.5 rounded-xl shadow-premium hover:shadow-premium-hover hover:bg-wine-900 hover:-translate-y-0.5 transition-all duration-300 font-bold flex items-center justify-center gap-2"
                        >
                            Imprimir Relatório
                        </button>
                    </div>

                    {/* Printable Area - Mensal */}
                    <div className="bg-white shadow-premium rounded-[32px] overflow-hidden border border-wine-100/50 p-8 md:p-12 print:shadow-none print:border-none print:p-0">
                        <div className="hidden print:flex flex-col items-center mb-10 border-b-2 border-wine-900 pb-8 w-full">
                            <h2 className="text-3xl font-display font-black text-wine-900 uppercase tracking-tighter">
                                Relatório de Folha de Pagamento
                            </h2>
                            <p className="text-wine-600 font-medium uppercase tracking-[0.3em] text-xs mt-2">Colégio Frei Galvão</p>
                        </div>

                        <div className="flex justify-between items-baseline mb-8 border-b border-wine-100 pb-4 print:border-wine-900">
                            <h3 className="text-2xl font-display font-bold capitalize text-wine-800 print:text-black">
                                {getMonthName(selectedMonth)} <span className="text-wine-300 font-light print:text-gray-400">/ {selectedYear}</span>
                            </h3>
                            <div className="text-right print:hidden">
                                <span className="text-xs font-black uppercase tracking-widest text-wine-400 mb-1 block">Data da Emissão</span>
                                <span className="text-wine-800 font-medium">{new Date().toLocaleDateString('pt-BR')}</span>
                            </div>
                        </div>

                        {isLoading ? (
                            <div className="py-20 flex justify-center flex-col items-center gap-4">
                                <div className="w-10 h-10 border-4 border-wine-100 border-t-wine-600 rounded-full animate-spin"></div>
                                <p className="text-wine-400 font-medium italic">Compilando dados...</p>
                            </div>
                        ) : monthlyData?.payrolls.length === 0 ? (
                            <div className="py-20 text-center glass-card">
                                <p className="text-wine-300 italic text-lg">Nenhum pagamento encontrado para este período.</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm">
                                    <thead>
                                        <tr className="border-b-2 border-wine-900/10 print:border-black">
                                            <th className="px-4 py-4 text-left font-black uppercase tracking-widest text-wine-400 text-[10px] print:text-black">Colaborador</th>
                                            <th className="px-4 py-4 text-left font-black uppercase tracking-widest text-wine-400 text-[10px] hidden sm:table-cell print:text-black">Cargo</th>
                                            <th className="px-4 py-4 text-right font-black uppercase tracking-widest text-wine-400 text-[10px] print:text-black">Salário Base</th>
                                            <th className="px-4 py-4 text-right font-black uppercase tracking-widest text-wine-400 text-[10px] print:text-black">Adicionais</th>
                                            <th className="px-4 py-4 text-right font-black uppercase tracking-widest text-wine-400 text-[10px] print:text-black">Descontos</th>
                                            <th className="px-4 py-4 text-right font-black uppercase tracking-widest text-wine-900 text-[10px] print:text-black">Líquido</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-wine-50 print:divide-gray-200">
                                        {monthlyData?.payrolls.map(p => {
                                            const adds = (p.transportTotal || 0) + p.bonuses;
                                            const deducs = p.absenceDeduction + p.transportDeduction + p.otherDeductions;
                                            return (
                                                <tr key={p.id} className="hover:bg-wine-50/50 transition-colors group">
                                                    <td className="px-4 py-5 whitespace-nowrap font-bold text-wine-900 group-hover:text-wine-700 print:text-black">{p.employee?.name}</td>
                                                    <td className="px-4 py-5 whitespace-nowrap text-wine-400 hidden sm:table-cell print:text-black">{p.employee?.role}</td>
                                                    <td className="px-4 py-5 whitespace-nowrap text-right text-wine-400 font-medium print:text-black">{formatCurrency(p.baseSalary)}</td>
                                                    <td className="px-4 py-5 whitespace-nowrap text-right text-emerald-600 font-bold">+{formatCurrency(adds)}</td>
                                                    <td className="px-4 py-5 whitespace-nowrap text-right text-red-500 font-bold">-{formatCurrency(deducs)}</td>
                                                    <td className="px-4 py-5 whitespace-nowrap text-right font-black text-wine-900 text-lg print:text-black">{formatCurrency(p.netTotal)}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                    <tfoot className="border-t-4 border-wine-900/5 print:border-black">
                                        <tr className="bg-wine-50/30 print:bg-transparent">
                                            <td colSpan={2} className="px-6 py-8 text-right font-black uppercase tracking-widest text-wine-400 text-xs sm:table-cell hidden">Total Líquido (Qtd: {monthlyData?.totals.count})</td>
                                            <td colSpan={1} className="px-6 py-8 text-right font-black uppercase tracking-widest text-wine-400 text-xs sm:hidden">Total</td>
                                            <td className="px-4 py-8 text-right text-wine-300 font-bold hidden sm:table-cell print:hidden">{formatCurrency(monthlyData?.totals.totalBase || 0)}</td>
                                            <td colSpan={2} className="hidden sm:table-cell"></td>
                                            <td className="px-4 py-8 text-right text-3xl font-display font-black text-wine-800 print:text-black">{formatCurrency(monthlyData?.totals.totalNet || 0)}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        )}

                        <div className="mt-12 pt-8 border-t border-wine-100 hidden print:block text-center">
                            <div className="w-64 border-t-2 border-black mx-auto mb-2"></div>
                            <p className="text-xs font-bold uppercase tracking-widest">Assinatura Responsável Financeiro</p>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === "COLLABORATOR" && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 print:hidden glass-card p-6 md:p-8">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <label className="block text-xs font-black uppercase tracking-widest text-wine-400 mb-2">Selecionar Colaborador</label>
                            <select
                                className="w-full rounded-xl border-wine-200 shadow-sm p-4 bg-cream-50 text-wine-900 font-bold text-lg focus:ring-2 focus:ring-wine-500/20 focus:border-wine-500 transition-all outline-none"
                                value={selectedEmployeeId}
                                onChange={e => setSelectedEmployeeId(e.target.value)}
                            >
                                {!employees.length && <option>Carregando...</option>}
                                {employees.map(e => (
                                    <option key={e.id} value={e.id} className="bg-white text-wine-900">{e.name}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={handlePrint}
                            disabled={!collaboratorData || collaboratorData.payrolls.length === 0}
                            className="w-full md:w-auto bg-wine-800 text-cream-50 px-8 py-4 rounded-xl shadow-premium hover:shadow-premium-hover hover:bg-wine-900 hover:-translate-y-0.5 transition-all duration-300 font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:translate-y-0"
                        >
                            Imprimir Extrato
                        </button>
                    </div>

                    {/* Printable Area - Colaborador */}
                    <div className="bg-white shadow-premium rounded-[32px] overflow-hidden border border-wine-100/50 p-8 md:p-12 print:shadow-none print:border-none print:p-0">
                        <div className="hidden print:flex flex-col items-center mb-10 border-b-2 border-wine-900 pb-8 w-full uppercase">
                            <h2 className="text-3xl font-display font-black text-wine-900">
                                Extrato Individual de Pagamentos
                            </h2>
                            <p className="text-wine-600 font-medium tracking-[0.3em] text-xs mt-2">Colégio Frei Galvão</p>
                        </div>

                        {collaboratorData?.employee && (
                            <div className="mb-10 p-6 rounded-2xl bg-wine-50/50 border border-wine-100 flex flex-col md:flex-row md:justify-between md:items-center print:bg-transparent print:border-none print:p-0 print:border-b print:rounded-none">
                                <div>
                                    <h3 className="text-3xl font-display font-black text-wine-900 print:text-black">{collaboratorData.employee.name}</h3>
                                    <div className="flex items-center gap-6 mt-2">
                                        <span className="px-3 py-1 bg-wine-100 text-wine-700 text-[10px] font-black uppercase tracking-widest rounded-full print:bg-transparent print:border print:text-black">
                                            {collaboratorData.employee.role}
                                        </span>
                                        <span className="text-wine-400 text-sm print:text-black"><strong>CPF:</strong> {collaboratorData.employee.cpf}</span>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 text-right print:hidden">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-wine-400 block mb-1">Status Base</span>
                                    <span className="text-emerald-600 font-bold">Ativo na Folha</span>
                                </div>
                            </div>
                        )}

                        {isLoading ? (
                            <div className="py-20 flex justify-center flex-col items-center gap-4">
                                <div className="w-10 h-10 border-4 border-wine-100 border-t-wine-600 rounded-full animate-spin"></div>
                                <p className="text-wine-400 font-medium italic">Buscando histórico...</p>
                            </div>
                        ) : collaboratorData?.payrolls.length === 0 ? (
                            <div className="py-20 text-center glass-card">
                                <p className="text-wine-300 italic text-lg">Nenhum histórico de pagamentos para este colaborador.</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm mt-4">
                                    <thead>
                                        <tr className="border-b-2 border-wine-900/10 print:border-black">
                                            <th className="px-4 py-4 text-left font-black uppercase tracking-widest text-wine-400 text-[10px] print:text-black">Competência</th>
                                            <th className="px-4 py-4 text-right font-black uppercase tracking-widest text-wine-400 text-[10px] print:text-black">Salário Base</th>
                                            <th className="px-4 py-4 text-right font-black uppercase tracking-widest text-wine-400 text-[10px] hidden sm:table-cell print:text-black">Acréscimos</th>
                                            <th className="px-4 py-4 text-right font-black uppercase tracking-widest text-wine-400 text-[10px] hidden sm:table-cell print:text-black">Descontos</th>
                                            <th className="px-4 py-4 text-right font-black uppercase tracking-widest text-wine-900 text-[10px] print:text-black">Líquido Recebido</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-wine-50 print:divide-gray-200">
                                        {collaboratorData?.payrolls.map(p => {
                                            const adds = (p.transportTotal || 0) + p.bonuses;
                                            const deducs = p.absenceDeduction + p.transportDeduction + p.otherDeductions;
                                            return (
                                                <tr key={p.id} className="hover:bg-wine-50/50 transition-colors group">
                                                    <td className="px-4 py-5 whitespace-nowrap font-bold text-wine-900 capitalize print:text-black">
                                                        {getMonthName(p.month).substring(0, 3)} / {p.year}
                                                    </td>
                                                    <td className="px-4 py-5 whitespace-nowrap text-right text-wine-400 font-medium print:text-black">{formatCurrency(p.baseSalary)}</td>
                                                    <td className="px-4 py-5 whitespace-nowrap text-right text-emerald-600 font-bold hidden sm:table-cell">+{formatCurrency(adds)}</td>
                                                    <td className="px-4 py-5 whitespace-nowrap text-right text-red-500 font-bold hidden sm:table-cell">-{formatCurrency(deducs)}</td>
                                                    <td className="px-4 py-5 whitespace-nowrap text-right font-black text-wine-900 text-lg print:text-black">{formatCurrency(p.netTotal)}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                    <tfoot className="border-t-4 border-wine-900/5 print:border-black">
                                        <tr className="bg-wine-50/30 print:bg-transparent">
                                            <td colSpan={4} className="px-6 py-10 text-right font-black uppercase tracking-widest text-wine-400 text-xs hidden sm:table-cell">Total Acumulado (Período)</td>
                                            <td colSpan={1} className="px-6 py-10 text-right font-black uppercase tracking-widest text-wine-400 text-xs sm:hidden">Total Acumulado</td>
                                            <td className="px-4 py-10 text-right text-4xl font-display font-black text-wine-800 print:text-black">{formatCurrency(collaboratorData?.totals.totalReceived || 0)}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        )}

                        <div className="mt-16 text-center text-[10px] font-black uppercase tracking-widest text-wine-300 print:hidden italic">
                            Este documento é um extrato informativo extraído do sistema de gestão escolar.
                        </div>
                    </div>
                </div>
            )}

            {/* Global Print Styles specific to Report */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @media print {
          @page { margin: 1cm; size: A4 portrait; }
          aside, nav, .print\\:hidden { display: none !important; }
          body { background-color: white !important; font-family: sans-serif; }
          * { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
          .glass-card { border: none !important; background: transparent !important; box-shadow: none !important; }
        }
      `}} />
        </div>
    );
}
