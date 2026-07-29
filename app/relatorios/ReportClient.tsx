"use client";

import { useEffect, useState } from "react";
import PayrollCalculationDetails from "@/app/components/PayrollCalculationDetails";
import { buildPayrollBreakdown, type PayrollBreakdownInput } from "@/lib/payroll-breakdown";
import { getEmployeesList, getMonthlyReport, getCollaboratorReport, getEmployeeRegistrationReport } from "./actions";

// Define some typings based on our Prisma schema output
type EmployeeInfo = {
    id: string;
    name: string;
    role: string;
    type: string;
    baseSalary: number;
    hourlyRate: number | null;
    cestaBasica: number | null;
    isAulista: boolean;
    transportDaily: number | null;
};

type PayrollInfo = PayrollBreakdownInput["payroll"] & {
    employee: EmployeeInfo;
    isRescisao?: boolean;
};

type CollaboratorInfo = {
    name: string;
    role: string;
    cpf: string;
} | null;

type TeachingAssignmentInfo = {
    id: string;
    weekday: number;
    weekdayLabel: string;
    subjectName: string;
    classGroup: string | null;
    lessonStart: number | null;
    lessonEnd: number | null;
    fullDay: boolean;
    hours: number;
};

type SalaryAdjustmentInfo = {
    id: string;
    effectiveDate: string;
    previousSalary: number;
    newSalary: number;
    adjustmentValue: number;
    notes: string | null;
};

type RegistrationEmployeeInfo = {
    id: string;
    name: string;
    cpf: string;
    type: string;
    role: string;
    baseSalary: number;
    profilePhotoUrl: string | null;
    startDate: string | null;
    eatsAtSchool: boolean;
    transportDaily: number | null;
    gasAssistance: number | null;
    pixKey: string | null;
    paymentMethod: string;
    bankName: string | null;
    accountType: string | null;
    agency: string | null;
    accountNumber: string | null;
    recurringDeductions: number;
    temporaryDeductions: number;
    temporaryDeductionsDesc: string | null;
    temporaryDeductionsExpiration: string | null;
    hourlyRate: number | null;
    cestaBasica: number | null;
    isAulista: boolean;
    salaryAdvance: number;
    active: boolean;
    subjects: string[];
    teachingAssignments: TeachingAssignmentInfo[];
    salaryAdjustments: SalaryAdjustmentInfo[];
};

export default function ReportClient() {
    const [activeTab, setActiveTab] = useState<"MONTHLY" | "COLLABORATOR" | "REGISTRATION">("MONTHLY");

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
        employee: CollaboratorInfo,
        totals: { totalReceived: number }
    } | null>(null);

    const [registrationData, setRegistrationData] = useState<RegistrationEmployeeInfo[]>([]);

    const [isLoading, setIsLoading] = useState(false);
    const [selectedPayrollDetails, setSelectedPayrollDetails] = useState<ReturnType<typeof buildPayrollBreakdown> | null>(null);

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

    useEffect(() => {
        async function loadRegistration() {
            setIsLoading(true);
            const res = await getEmployeeRegistrationReport();
            setRegistrationData(res);
            setIsLoading(false);
        }
        if (activeTab === "REGISTRATION") {
            loadRegistration();
        }
    }, [activeTab]);


    const handlePrint = () => {
        window.print();
    };

    const getMonthName = (m: number) => {
        return new Date(2000, m - 1, 1).toLocaleString('pt-BR', { month: 'long' });
    };

    const formatCurrency = (val: number) => {
        return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const formatDate = (value: string | null) => {
        if (!value) return "Não informado";
        return new Date(value).toLocaleDateString("pt-BR", { timeZone: "UTC" });
    };

    const formatValue = (value: string | number | null | undefined) => {
        if (value === null || value === undefined || value === "") return "Não informado";
        return String(value);
    };

    const formatBool = (value: boolean) => value ? "Sim" : "Não";

    const formatLessonRange = (assignment: TeachingAssignmentInfo) => {
        if (assignment.fullDay) return "Dia todo";
        if (assignment.lessonStart && assignment.lessonEnd && assignment.lessonStart !== assignment.lessonEnd) {
            return `Aulas ${assignment.lessonStart}-${assignment.lessonEnd}`;
        }
        if (assignment.lessonStart) return `Aula ${assignment.lessonStart}`;
        return "Não informado";
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
                    <button
                        className={`py-2.5 px-6 rounded-xl transition-all duration-300 font-semibold text-sm ${activeTab === "REGISTRATION" ? "bg-white text-wine-800 shadow-premium" : "text-wine-400 hover:text-wine-600"}`}
                        onClick={() => setActiveTab("REGISTRATION")}
                    >
                        Cadastro de Funcionários
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
                    <div className="bg-white shadow-premium rounded-[32px] overflow-hidden border border-wine-100/50 p-8 md:p-12 print:shadow-none print:border-none print:p-0 print:overflow-visible">
                        {/* Print Header */}
                        <div className="hidden print:flex justify-between items-center mb-10 border-b-2 border-wine-900 pb-8 w-full">
                            <div className="flex items-center gap-4">
                                <img src="/logo.jpg" alt="Logo Colégio Frei Galvão" className="h-16 w-auto object-contain" />
                                <div className="text-left">
                                    <h2 className="text-2xl font-display font-black text-wine-900 uppercase tracking-tight leading-none">
                                        Colégio Frei Galvão
                                    </h2>
                                    <p className="text-wine-600 font-medium text-[10px] uppercase tracking-widest mt-1">Gestão de Folha de Pagamento</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <h3 className="text-sm font-black uppercase tracking-widest text-wine-900">Relatório Mensal</h3>
                                <p className="text-wine-600 font-medium text-xs mt-1">{getMonthName(selectedMonth)} / {selectedYear}</p>
                            </div>
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
                            <div className="overflow-x-auto print:overflow-visible scrollbar-hide">
                                <table className="min-w-full text-sm print:table-fixed">
                                    <thead>
                                        <tr className="border-b-2 border-wine-900/10 print:border-black">
                                            <th className="px-4 py-4 text-left font-black uppercase tracking-widest text-wine-400 text-[10px] print:text-black print:text-[8pt] print:w-[28%]">Colaborador</th>
                                            <th className="px-4 py-4 text-left font-black uppercase tracking-widest text-wine-400 text-[10px] hidden sm:table-cell print:table-cell print:text-black print:text-[8pt] print:w-[18%]">Cargo</th>
                                            <th className="px-4 py-4 text-right font-black uppercase tracking-widest text-wine-400 text-[10px] print:text-black print:text-[8pt] print:w-[14%]">Salário</th>
                                            <th className="px-4 py-4 text-right font-black uppercase tracking-widest text-wine-400 text-[10px] print:text-black print:text-[8pt] print:w-[10%]">Extra</th>
                                            <th className="px-4 py-4 text-right font-black uppercase tracking-widest text-wine-400 text-[10px] print:text-black print:text-[8pt] print:w-[10%]">Desc</th>
                                            <th className="px-4 py-4 text-right font-black uppercase tracking-widest text-wine-900 text-[10px] print:text-black print:text-[8pt] print:w-[20%]">Líquido</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-wine-50 print:divide-gray-200">
                                        {monthlyData?.payrolls.map(p => {
                                            const adds = (p.transportTotal || 0) + p.bonuses;
                                            const deducs = p.absenceDeduction + p.transportDeduction + p.otherDeductions;
                                            const breakdownInput: PayrollBreakdownInput | null = p.isRescisao
                                                ? null
                                                : { employee: p.employee, payroll: p };
                                            return (
                                                <tr key={p.id} className="hover:bg-wine-50/50 transition-colors group print:break-inside-avoid">
                                                    <td className="px-4 py-5 whitespace-nowrap print:whitespace-normal font-bold text-wine-900 group-hover:text-wine-700 print:text-black print:text-[9pt]">
                                                        <div className="flex items-center gap-2">
                                                            {p.employee?.name}
                                                            {p.isRescisao && (
                                                                <span className="bg-amber-100 text-amber-800 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter print:border print:border-amber-200">Rescisão</span>
                                                            )}
                                                        </div>
                                                        {breakdownInput && (
                                                            <button
                                                                type="button"
                                                                onClick={() => setSelectedPayrollDetails(buildPayrollBreakdown(breakdownInput))}
                                                                aria-haspopup="dialog"
                                                                className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-wine-700 hover:text-wine-900 print:hidden"
                                                            >
                                                                Ver detalhes
                                                            </button>
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-5 whitespace-nowrap print:whitespace-normal text-wine-400 hidden sm:table-cell print:table-cell print:text-black print:text-[9pt]">{p.employee?.role}</td>
                                                    <td className="px-4 py-5 whitespace-nowrap text-right text-wine-400 font-medium print:text-black print:text-[9pt]">{formatCurrency(p.baseSalary)}</td>
                                                    <td className="px-4 py-5 whitespace-nowrap text-right text-emerald-600 font-bold print:text-[9pt]">+{formatCurrency(adds)}</td>
                                                    <td className="px-4 py-5 whitespace-nowrap text-right text-red-500 font-bold print:text-[9pt]">-{formatCurrency(deducs)}</td>
                                                    <td className="px-4 py-5 whitespace-nowrap text-right font-black text-wine-900 text-lg print:text-black print:text-[11pt]">{formatCurrency(p.netTotal)}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                    <tfoot className="border-t-4 border-wine-900/5 print:border-black">
                                        <tr className="bg-wine-50/30 print:bg-transparent">
                                            <td colSpan={2} className="px-6 py-8 text-right font-black uppercase tracking-widest text-wine-400 text-xs sm:table-cell hidden print:table-cell print:text-black">Total Líquido (Qtd: {monthlyData?.totals.count})</td>
                                            <td colSpan={1} className="px-6 py-8 text-right font-black uppercase tracking-widest text-wine-400 text-xs sm:hidden print:hidden">Total</td>
                                            <td className="px-4 py-8 text-right text-wine-300 font-bold hidden sm:table-cell print:table-cell print:text-black print:text-[10pt]">{formatCurrency(monthlyData?.totals.totalBase || 0)}</td>
                                            <td colSpan={2} className="hidden sm:table-cell print:table-cell"></td>
                                            <td className="px-4 py-8 text-right text-3xl font-display font-black text-wine-800 print:text-black print:text-[14pt] whitespace-nowrap">{formatCurrency(monthlyData?.totals.totalNet || 0)}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        )}

                        <div className="print-payroll-calculations hidden print:block">
                            {monthlyData?.payrolls.filter((p) => !p.isRescisao).map((p) => (
                                <section key={`print-monthly-${p.id}`} className="hidden print:block print:break-before-page">
                                    <div className="mb-6 border-b-2 border-black pb-3">
                                        <p className="text-xs font-bold uppercase tracking-widest">Memória de cálculo</p>
                                        <h4 className="text-xl font-black">{p.employee.name} · {getMonthName(p.month)} / {p.year}</h4>
                                    </div>
                                    <PayrollCalculationDetails
                                        breakdown={buildPayrollBreakdown({ employee: p.employee, payroll: p })}
                                        variant="dialog"
                                        panelId={`print-monthly-payroll-${p.id}`}
                                    />
                                </section>
                            ))}
                        </div>

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
                    <div className="bg-white shadow-premium rounded-[32px] overflow-hidden border border-wine-100/50 p-8 md:p-12 print:shadow-none print:border-none print:p-0 print:overflow-visible">
                        {/* Print Header */}
                        <div className="hidden print:flex justify-between items-center mb-10 border-b-2 border-wine-900 pb-8 w-full">
                            <div className="flex items-center gap-4">
                                <img src="/logo.jpg" alt="Logo Colégio Frei Galvão" className="h-16 w-auto object-contain" />
                                <div className="text-left">
                                    <h2 className="text-2xl font-display font-black text-wine-900 uppercase tracking-tight leading-none">
                                        Colégio Frei Galvão
                                    </h2>
                                    <p className="text-wine-600 font-medium text-[10px] uppercase tracking-widest mt-1">Gestão de Folha de Pagamento</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <h3 className="text-sm font-black uppercase tracking-widest text-wine-900">Extrato Individual</h3>
                                <p className="text-wine-600 font-medium text-xs mt-1">Histórico Completo</p>
                            </div>
                        </div>

                        {collaboratorData?.employee && (
                            <div className="mb-10 p-6 rounded-2xl bg-wine-50/50 border border-wine-100 flex flex-col md:flex-row md:justify-between md:items-center print:bg-transparent print:border-none print:p-0 print:border-b-2 print:border-black print:rounded-none print:pb-6">
                                <div>
                                    <h3 className="text-3xl font-display font-black text-wine-900 print:text-black print:text-[18pt]">{collaboratorData.employee.name}</h3>
                                    <div className="flex items-center gap-6 mt-2">
                                        <span className="px-3 py-1 bg-wine-100 text-wine-700 text-[10px] font-black uppercase tracking-widest rounded-full print:bg-transparent print:border print:border-black print:text-black print:text-[8pt]">
                                            {collaboratorData.employee.role}
                                        </span>
                                        <span className="text-wine-400 text-sm print:text-black print:text-[10pt]"><strong>CPF:</strong> {collaboratorData.employee.cpf}</span>
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
                            <div className="overflow-x-auto print:overflow-visible scrollbar-hide">
                                <table className="min-w-full text-sm mt-4 print:table-fixed">
                                    <thead>
                                        <tr className="border-b-2 border-wine-900/10 print:border-black">
                                            <th className="px-4 py-4 text-left font-black uppercase tracking-widest text-wine-400 text-[10px] print:text-black print:text-[8pt] print:w-[25%]">Competência</th>
                                            <th className="px-4 py-4 text-right font-black uppercase tracking-widest text-wine-400 text-[10px] print:text-black print:text-[8pt] print:w-[20%]">Salário Base</th>
                                            <th className="px-4 py-4 text-right font-black uppercase tracking-widest text-wine-400 text-[10px] hidden sm:table-cell print:table-cell print:text-black print:text-[8pt] print:w-[15%]">Acréscimos</th>
                                            <th className="px-4 py-4 text-right font-black uppercase tracking-widest text-wine-400 text-[10px] hidden sm:table-cell print:table-cell print:text-black print:text-[8pt] print:w-[15%]">Descontos</th>
                                            <th className="px-4 py-4 text-right font-black uppercase tracking-widest text-wine-900 text-[10px] print:text-black print:text-[8pt] print:w-[25%]">Líquido Recebido</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-wine-50 print:divide-gray-200">
                                        {collaboratorData?.payrolls.map(p => {
                                            const adds = (p.transportTotal || 0) + p.bonuses;
                                            const deducs = p.absenceDeduction + p.transportDeduction + p.otherDeductions;
                                            const breakdownInput: PayrollBreakdownInput | null = p.isRescisao
                                                ? null
                                                : { employee: p.employee, payroll: p };
                                            return (
                                                <tr key={p.id} className="hover:bg-wine-50/50 transition-colors group print:break-inside-avoid">
                                                    <td className="px-4 py-5 whitespace-nowrap print:whitespace-normal font-bold text-wine-900 capitalize print:text-black print:text-[9pt]">
                                                        <div className="flex items-center gap-2">
                                                            {getMonthName(p.month).substring(0, 3)} / {p.year}
                                                            {p.isRescisao && (
                                                                <span className="bg-amber-100 text-amber-800 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter print:border print:border-amber-200">Rescisão</span>
                                                            )}
                                                        </div>
                                                        {breakdownInput && (
                                                            <button
                                                                type="button"
                                                                onClick={() => setSelectedPayrollDetails(buildPayrollBreakdown(breakdownInput))}
                                                                aria-haspopup="dialog"
                                                                className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-wine-700 hover:text-wine-900 print:hidden"
                                                            >
                                                                Ver detalhes
                                                            </button>
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-5 whitespace-nowrap text-right text-wine-400 font-medium print:text-black print:text-[9pt]">{formatCurrency(p.baseSalary)}</td>
                                                    <td className="px-4 py-5 whitespace-nowrap text-right text-emerald-600 font-bold hidden sm:table-cell print:table-cell print:text-[9pt]">+{formatCurrency(adds)}</td>
                                                    <td className="px-4 py-5 whitespace-nowrap text-right text-red-500 font-bold hidden sm:table-cell print:table-cell print:text-[9pt]">-{formatCurrency(deducs)}</td>
                                                    <td className="px-4 py-5 whitespace-nowrap text-right font-black text-wine-900 text-lg print:text-black print:text-[11pt]">{formatCurrency(p.netTotal)}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                    <tfoot className="border-t-4 border-wine-900/5 print:border-black">
                                        <tr className="bg-wine-50/30 print:bg-transparent">
                                            <td colSpan={4} className="px-6 py-10 text-right font-black uppercase tracking-widest text-wine-400 text-xs hidden sm:table-cell print:table-cell print:text-black print:text-[10pt]">Total Acumulado (Período)</td>
                                            <td colSpan={1} className="px-6 py-10 text-right font-black uppercase tracking-widest text-wine-400 text-xs sm:hidden print:hidden">Total Acumulado</td>
                                            <td className="px-4 py-10 text-right text-4xl font-display font-black text-wine-800 print:text-black print:text-[14pt] whitespace-nowrap">{formatCurrency(collaboratorData?.totals.totalReceived || 0)}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        )}

                        <div className="print-payroll-calculations hidden print:block">
                            {collaboratorData?.payrolls.filter((p) => !p.isRescisao).map((p) => (
                                <section key={`print-collaborator-${p.id}`} className="hidden print:block print:break-before-page">
                                    <div className="mb-6 border-b-2 border-black pb-3">
                                        <p className="text-xs font-bold uppercase tracking-widest">Memória de cálculo</p>
                                        <h4 className="text-xl font-black">{p.employee.name} · {getMonthName(p.month)} / {p.year}</h4>
                                    </div>
                                    <PayrollCalculationDetails
                                        breakdown={buildPayrollBreakdown({ employee: p.employee, payroll: p })}
                                        variant="dialog"
                                        panelId={`print-collaborator-payroll-${p.id}`}
                                    />
                                </section>
                            ))}
                        </div>

                        <div className="mt-16 text-center text-[10px] font-black uppercase tracking-widest text-wine-300 print:hidden italic">
                            Este documento é um extrato informativo extraído do sistema de gestão escolar.
                        </div>
                    </div>
                </div>
            )}

            {activeTab === "REGISTRATION" && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 print:hidden glass-card p-6 md:p-8">
                        <div>
                            <h2 className="text-2xl font-display font-black text-wine-900 tracking-tight">Relatório Cadastral</h2>
                            <p className="text-wine-400 font-medium mt-1">
                                {registrationData.length} funcionário{registrationData.length === 1 ? "" : "s"} ativo{registrationData.length === 1 ? "" : "s"} no cadastro atual.
                            </p>
                        </div>
                        <button
                            onClick={handlePrint}
                            disabled={registrationData.length === 0}
                            className="w-full md:w-auto mt-6 md:mt-0 bg-wine-800 text-cream-50 px-8 py-4 rounded-xl shadow-premium hover:shadow-premium-hover hover:bg-wine-900 hover:-translate-y-0.5 transition-all duration-300 font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:translate-y-0"
                        >
                            Imprimir Relatório
                        </button>
                    </div>

                    <div className="bg-white shadow-premium rounded-[32px] overflow-hidden border border-wine-100/50 p-8 md:p-12 print:shadow-none print:border-none print:p-0 print:overflow-visible">
                        <div className="hidden print:flex justify-between items-center mb-10 border-b-2 border-wine-900 pb-8 w-full">
                            <div className="flex items-center gap-4">
                                <img src="/logo.jpg" alt="Logo Colégio Frei Galvão" className="h-16 w-auto object-contain" />
                                <div className="text-left">
                                    <h2 className="text-2xl font-display font-black text-wine-900 uppercase tracking-tight leading-none">
                                        Colégio Frei Galvão
                                    </h2>
                                    <p className="text-wine-600 font-medium text-[10px] uppercase tracking-widest mt-1">Gestão de Folha de Pagamento</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <h3 className="text-sm font-black uppercase tracking-widest text-wine-900">Relatório Cadastral</h3>
                                <p className="text-wine-600 font-medium text-xs mt-1">Funcionários ativos</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-baseline mb-8 border-b border-wine-100 pb-4 print:border-wine-900">
                            <h3 className="text-2xl font-display font-bold text-wine-800 print:text-black">
                                Cadastro de Funcionários
                            </h3>
                            <div className="text-right print:hidden">
                                <span className="text-xs font-black uppercase tracking-widest text-wine-400 mb-1 block">Data da Emissão</span>
                                <span className="text-wine-800 font-medium">{new Date().toLocaleDateString('pt-BR')}</span>
                            </div>
                        </div>

                        {isLoading ? (
                            <div className="py-20 flex justify-center flex-col items-center gap-4">
                                <div className="w-10 h-10 border-4 border-wine-100 border-t-wine-600 rounded-full animate-spin"></div>
                                <p className="text-wine-400 font-medium italic">Organizando cadastro...</p>
                            </div>
                        ) : registrationData.length === 0 ? (
                            <div className="py-20 text-center glass-card">
                                <p className="text-wine-300 italic text-lg">Nenhum funcionário ativo encontrado.</p>
                            </div>
                        ) : (
                            <div className="space-y-8 print:space-y-6">
                                {registrationData.map((employee) => (
                                    <section key={employee.id} className="border border-wine-100 rounded-2xl p-6 print:border-black print:rounded-none print:p-0 print:pb-6 print:break-inside-avoid">
                                        <div className="flex flex-col md:flex-row md:items-start gap-5 pb-5 border-b border-wine-100 print:border-black">
                                            {employee.profilePhotoUrl ? (
                                                <img
                                                    src={employee.profilePhotoUrl}
                                                    alt={`Foto de ${employee.name}`}
                                                    className="w-20 h-20 rounded-xl object-cover border border-wine-100 print:w-16 print:h-16 print:rounded-none print:border-black"
                                                />
                                            ) : (
                                                <div className="w-20 h-20 rounded-xl bg-wine-50 border border-wine-100 flex items-center justify-center text-wine-300 font-black text-xl print:hidden">
                                                    {employee.name.slice(0, 1).toUpperCase()}
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                                    <div>
                                                        <h4 className="text-2xl font-display font-black text-wine-900 print:text-black print:text-[16pt]">{employee.name}</h4>
                                                        <div className="flex flex-wrap gap-2 mt-2">
                                                            <span className="px-3 py-1 bg-wine-100 text-wine-700 text-[10px] font-black uppercase tracking-widest rounded-full print:bg-transparent print:border print:border-black print:text-black">
                                                                {employee.type}
                                                            </span>
                                                            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-full print:bg-transparent print:border print:border-black print:text-black">
                                                                {employee.active ? "Ativo" : "Inativo"}
                                                            </span>
                                                            {employee.isAulista && (
                                                                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-black uppercase tracking-widest rounded-full print:bg-transparent print:border print:border-black print:text-black">
                                                                    Aulista
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="text-sm text-wine-500 md:text-right print:text-black">
                                                        <p><strong>CPF:</strong> {employee.cpf}</p>
                                                        <p><strong>Cargo:</strong> {employee.role}</p>
                                                        <p><strong>Início:</strong> {formatDate(employee.startDate)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-5 print:grid-cols-2 print:gap-3">
                                            <div className="rounded-xl bg-wine-50/60 p-4 print:bg-transparent print:border print:border-gray-300 print:rounded-none">
                                                <h5 className="text-[10px] font-black uppercase tracking-widest text-wine-400 mb-3 print:text-black">Remuneração</h5>
                                                <dl className="space-y-2 text-sm">
                                                    <div className="flex justify-between gap-3"><dt className="text-wine-400">Salário base</dt><dd className="font-bold text-wine-900 text-right">{formatCurrency(employee.baseSalary)}</dd></div>
                                                    <div className="flex justify-between gap-3"><dt className="text-wine-400">Valor hora</dt><dd className="font-bold text-wine-900 text-right">{employee.hourlyRate === null ? "Não informado" : formatCurrency(employee.hourlyRate)}</dd></div>
                                                    <div className="flex justify-between gap-3"><dt className="text-wine-400">Cesta básica</dt><dd className="font-bold text-wine-900 text-right">{employee.cestaBasica === null ? "Não informado" : formatCurrency(employee.cestaBasica)}</dd></div>
                                                    <div className="flex justify-between gap-3"><dt className="text-wine-400">Adiantamento</dt><dd className="font-bold text-wine-900 text-right">{formatCurrency(employee.salaryAdvance)}</dd></div>
                                                </dl>
                                            </div>

                                            <div className="rounded-xl bg-wine-50/60 p-4 print:bg-transparent print:border print:border-gray-300 print:rounded-none">
                                                <h5 className="text-[10px] font-black uppercase tracking-widest text-wine-400 mb-3 print:text-black">Descontos</h5>
                                                <dl className="space-y-2 text-sm">
                                                    <div className="flex justify-between gap-3"><dt className="text-wine-400">Recorrentes</dt><dd className="font-bold text-wine-900 text-right">{formatCurrency(employee.recurringDeductions)}</dd></div>
                                                    <div className="flex justify-between gap-3"><dt className="text-wine-400">Temporários</dt><dd className="font-bold text-wine-900 text-right">{formatCurrency(employee.temporaryDeductions)}</dd></div>
                                                    <div><dt className="text-wine-400">Descrição</dt><dd className="font-bold text-wine-900">{formatValue(employee.temporaryDeductionsDesc)}</dd></div>
                                                    <div><dt className="text-wine-400">Validade</dt><dd className="font-bold text-wine-900">{formatValue(employee.temporaryDeductionsExpiration)}</dd></div>
                                                </dl>
                                            </div>

                                            <div className="rounded-xl bg-wine-50/60 p-4 print:bg-transparent print:border print:border-gray-300 print:rounded-none">
                                                <h5 className="text-[10px] font-black uppercase tracking-widest text-wine-400 mb-3 print:text-black">Benefícios</h5>
                                                <dl className="space-y-2 text-sm">
                                                    <div className="flex justify-between gap-3"><dt className="text-wine-400">VT diário</dt><dd className="font-bold text-wine-900 text-right">{employee.transportDaily === null ? "Não informado" : formatCurrency(employee.transportDaily)}</dd></div>
                                                    <div className="flex justify-between gap-3"><dt className="text-wine-400">Auxílio gasolina</dt><dd className="font-bold text-wine-900 text-right">{employee.gasAssistance === null ? "Não informado" : formatCurrency(employee.gasAssistance)}</dd></div>
                                                    <div className="flex justify-between gap-3"><dt className="text-wine-400">Almoça no colégio</dt><dd className="font-bold text-wine-900 text-right">{formatBool(employee.eatsAtSchool)}</dd></div>
                                                </dl>
                                            </div>

                                            <div className="rounded-xl bg-wine-50/60 p-4 print:bg-transparent print:border print:border-gray-300 print:rounded-none">
                                                <h5 className="text-[10px] font-black uppercase tracking-widest text-wine-400 mb-3 print:text-black">Pagamento</h5>
                                                <dl className="space-y-2 text-sm">
                                                    <div className="flex justify-between gap-3"><dt className="text-wine-400">Método</dt><dd className="font-bold text-wine-900 text-right">{employee.paymentMethod}</dd></div>
                                                    <div><dt className="text-wine-400">Pix</dt><dd className="font-bold text-wine-900 break-all">{formatValue(employee.pixKey)}</dd></div>
                                                    <div><dt className="text-wine-400">Banco</dt><dd className="font-bold text-wine-900">{formatValue(employee.bankName)}</dd></div>
                                                    <div><dt className="text-wine-400">Conta</dt><dd className="font-bold text-wine-900">{[employee.accountType, employee.agency, employee.accountNumber].filter(Boolean).join(" / ") || "Não informado"}</dd></div>
                                                </dl>
                                            </div>
                                        </div>

                                        <div className="grid lg:grid-cols-3 gap-5 mt-5 print:grid-cols-1">
                                            <div className="lg:col-span-1">
                                                <h5 className="text-[10px] font-black uppercase tracking-widest text-wine-400 mb-3 print:text-black">Matérias Possíveis</h5>
                                                <p className="text-sm font-bold text-wine-900 print:text-black">
                                                    {employee.subjects.length ? employee.subjects.join(", ") : "Não informado"}
                                                </p>
                                            </div>

                                            <div className="lg:col-span-2">
                                                <h5 className="text-[10px] font-black uppercase tracking-widest text-wine-400 mb-3 print:text-black">Grade Atual</h5>
                                                {employee.teachingAssignments.length ? (
                                                    <div className="overflow-x-auto print:overflow-visible">
                                                        <table className="min-w-full text-xs print:table-auto">
                                                            <thead>
                                                                <tr className="border-b border-wine-100 print:border-black">
                                                                    <th className="py-2 pr-3 text-left font-black uppercase text-wine-400 print:text-black">Dia</th>
                                                                    <th className="py-2 pr-3 text-left font-black uppercase text-wine-400 print:text-black">Turma</th>
                                                                    <th className="py-2 pr-3 text-left font-black uppercase text-wine-400 print:text-black">Matéria</th>
                                                                    <th className="py-2 pr-3 text-left font-black uppercase text-wine-400 print:text-black">Aulas</th>
                                                                    <th className="py-2 text-right font-black uppercase text-wine-400 print:text-black">Horas</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {employee.teachingAssignments.map((assignment) => (
                                                                    <tr key={assignment.id} className="border-b border-wine-50 print:border-gray-200">
                                                                        <td className="py-2 pr-3 font-bold text-wine-900">{assignment.weekdayLabel}</td>
                                                                        <td className="py-2 pr-3 text-wine-600">{formatValue(assignment.classGroup)}</td>
                                                                        <td className="py-2 pr-3 text-wine-600">{assignment.subjectName}</td>
                                                                        <td className="py-2 pr-3 text-wine-600">{formatLessonRange(assignment)}</td>
                                                                        <td className="py-2 text-right font-bold text-wine-900">{assignment.hours.toLocaleString("pt-BR")}h</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                ) : (
                                                    <p className="text-sm font-bold text-wine-900 print:text-black">Não informado</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-5">
                                            <h5 className="text-[10px] font-black uppercase tracking-widest text-wine-400 mb-3 print:text-black">Histórico de Reajustes</h5>
                                            {employee.salaryAdjustments.length ? (
                                                <div className="overflow-x-auto print:overflow-visible">
                                                    <table className="min-w-full text-xs print:table-auto">
                                                        <thead>
                                                            <tr className="border-b border-wine-100 print:border-black">
                                                                <th className="py-2 pr-3 text-left font-black uppercase text-wine-400 print:text-black">Data</th>
                                                                <th className="py-2 pr-3 text-right font-black uppercase text-wine-400 print:text-black">Anterior</th>
                                                                <th className="py-2 pr-3 text-right font-black uppercase text-wine-400 print:text-black">Novo</th>
                                                                <th className="py-2 pr-3 text-right font-black uppercase text-wine-400 print:text-black">Diferença</th>
                                                                <th className="py-2 text-left font-black uppercase text-wine-400 print:text-black">Observação</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {employee.salaryAdjustments.map((adjustment) => (
                                                                <tr key={adjustment.id} className="border-b border-wine-50 print:border-gray-200">
                                                                    <td className="py-2 pr-3 font-bold text-wine-900">{formatDate(adjustment.effectiveDate)}</td>
                                                                    <td className="py-2 pr-3 text-right text-wine-600">{formatCurrency(adjustment.previousSalary)}</td>
                                                                    <td className="py-2 pr-3 text-right text-wine-600">{formatCurrency(adjustment.newSalary)}</td>
                                                                    <td className="py-2 pr-3 text-right font-bold text-wine-900">{formatCurrency(adjustment.adjustmentValue)}</td>
                                                                    <td className="py-2 text-wine-600">{formatValue(adjustment.notes)}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            ) : (
                                                <p className="text-sm font-bold text-wine-900 print:text-black">Não informado</p>
                                            )}
                                        </div>
                                    </section>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {selectedPayrollDetails ? (
                <div
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-wine-950/45 p-2 backdrop-blur-sm print:hidden sm:p-3"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="payroll-details-dialog-title"
                >
                    <div className="flex max-h-[calc(100dvh-1rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] bg-cream-50 shadow-2xl">
                        <div className="flex shrink-0 items-center justify-between border-b border-wine-100 bg-white px-5 py-3 sm:px-7">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-wine-500">Memória de cálculo</p>
                                <h2 id="payroll-details-dialog-title" className="text-lg font-black text-wine-950 sm:text-xl">{selectedPayrollDetails.employee.name}</h2>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSelectedPayrollDetails(null)}
                                className="rounded-xl border border-wine-200 bg-white px-4 py-2 text-sm font-bold text-wine-800 transition-colors hover:bg-wine-50"
                            >
                                Fechar detalhes
                            </button>
                        </div>
                        <div className="min-h-0 overflow-hidden p-3 sm:p-4">
                            <PayrollCalculationDetails
                                breakdown={selectedPayrollDetails}
                                variant="dialog"
                                panelId={`payroll-details-dialog-${selectedPayrollDetails.payrollId}`}
                            />
                        </div>
                    </div>
                </div>
            ) : null}

            {/* Global Print Styles specific to Report */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @media print {
          @page { margin: 1.5cm; size: A4 portrait; }
          aside, nav, .print\\:hidden { display: none !important; }
          
          /* Scorched Earth Reset: Universal Visibility */
          *, *::before, *::after {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            animation: none !important;
            transition: none !important;
          }

          html, body, #__next, [data-nextjs-scroll-focus-boundary], main, #root, .flex-1, .bg-white, div, section, article { 
            height: auto !important; 
            min-height: 0 !important;
            max-height: none !important;
            overflow: visible !important; 
            display: block !important;
            position: static !important;
            float: none !important;
          }

          body { background-color: white !important; font-family: sans-serif; color: black !important; }
          .bg-white { background-color: white !important; }
          
          /* Colors for Print */
          .text-wine-900 { color: #612232 !important; }
          .text-wine-800 { color: #722636 !important; }
          .text-wine-600 { color: #a2384f !important; }
          .text-wine-400 { color: #cf7c8c !important; }
          
          /* Table Stability */
          table { width: 100% !important; border-collapse: collapse !important; table-layout: fixed !important; page-break-inside: auto !important; display: table !important; }
          thead { display: table-header-group !important; }
          tfoot { display: table-footer-group !important; }
          tr { page-break-inside: avoid !important; page-break-after: auto !important; display: table-row !important; }
          th, td { border-bottom: 1px solid #eee !important; overflow: visible !important; display: table-cell !important; }

          button[aria-controls*="payroll-details"] { display: none !important; }
          .print-payroll-calculations > section {
            break-before: page !important;
            page-break-before: always !important;
          }
          .print-payroll-calculations .payroll-calculation-details,
          .print-payroll-calculations .payroll-calculation-details section,
          .print-payroll-calculations .payroll-calculation-details aside {
            break-inside: auto !important;
            page-break-inside: auto !important;
          }
          .print-payroll-calculations .payroll-calculation-details > div {
            display: grid !important;
            grid-template-columns: 30% minmax(0, 1fr) !important;
            gap: 7mm !important;
          }
          .print-payroll-calculations .payroll-breakdown-sections {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 4mm !important;
          }
          .print-payroll-calculations .payroll-calculation-details aside { display: block !important; }
          .print-payroll-calculations .payroll-calculation-details section { margin: 0 !important; }
          .print-payroll-calculations .payroll-calculation-details p,
          .print-payroll-calculations .payroll-calculation-details dt,
          .print-payroll-calculations .payroll-calculation-details dd,
          .print-payroll-calculations .payroll-calculation-details span { font-size: 8pt !important; }
          
          /* Remove UI Noise */
          .shadow-premium, .glass-card, [class*="shadow-"], [class*="backdrop-blur"] { 
            box-shadow: none !important; 
            border: none !important; 
            background: transparent !important; 
            backdrop-filter: none !important;
          }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
        </div>
    );
}
