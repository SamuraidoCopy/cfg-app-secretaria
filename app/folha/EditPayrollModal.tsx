"use client";

import { useState, useEffect } from "react";
import { X, Pencil } from "lucide-react";
import { generatePayrollForEmployee } from "./actions";

type Employee = {
    id: string;
    name: string;
    type: string;
    baseSalary: number;
    transportDaily: number | null;
    gasAssistance: number | null;
    recurringDeductions: number;
    temporaryDeductions: number;
    temporaryDeductionsDesc: string | null;
    temporaryDeductionsExpiration: string | null;
};

type Payroll = {
    id: string;
    employeeId: string;
    month: number;
    year: number;
    workingDays: number;
    absences: number;
    absencesVT: number;
    otherDeductions: number;
    bonuses: number;
    employee: Employee;
};

export default function EditPayrollModal({ payroll }: { payroll: Payroll }) {
    const [isOpen, setIsOpen] = useState(false);

    const [workingDays, setWorkingDays] = useState(payroll.workingDays);
    const [absences, setAbsences] = useState(payroll.absences);
    const [absencesVT, setAbsencesVT] = useState(payroll.absencesVT);
    const [otherDeductions, setOtherDeductions] = useState(payroll.otherDeductions);
    const [bonuses, setBonuses] = useState(payroll.bonuses);

    // Reset state when opening modal
    useEffect(() => {
        if (isOpen) {
            setWorkingDays(payroll.workingDays);
            setAbsences(payroll.absences);
            setAbsencesVT(payroll.absencesVT);
            setOtherDeductions(payroll.otherDeductions);
            setBonuses(payroll.bonuses);
        }
    }, [isOpen, payroll]);

    async function handleSubmit(formData: FormData) {
        await generatePayrollForEmployee(formData);
        setIsOpen(false);
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-wine-600 hover:bg-wine-100 rounded-lg transition-colors"
                title="Editar Folha"
            >
                <Pencil className="w-4 h-4" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-wine-950/40 backdrop-blur-md z-[999] flex items-center justify-center p-4 animate-in fade-in duration-300">
                    <div className="bg-[#FCFBFA] rounded-[24px] shadow-premium-hover w-full max-w-lg max-h-[95vh] flex flex-col overflow-hidden border border-wine-100/50 animate-in zoom-in-95 duration-300 text-left">
                        <div className="bg-gradient-to-r from-wine-950 to-wine-900 text-white px-6 py-4 flex items-center justify-between border-b border-wine-800/50 shrink-0">
                            <h2 className="text-sm font-bold tracking-widest uppercase text-wine-100">Editar Holerite</h2>
                            <button type="button" onClick={() => setIsOpen(false)} className="text-wine-300 hover:text-white transition-colors p-1 hover:bg-wine-800/50 rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form action={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
                            <input type="hidden" name="month" value={payroll.month} />
                            <input type="hidden" name="year" value={payroll.year} />
                            <input type="hidden" name="employeeId" value={payroll.employeeId} />
                            <input type="hidden" name="totalDays" value={30} />

                            <div className="bg-wine-50 p-4 rounded-xl border border-wine-100/50 mb-4">
                                <p className="text-sm text-wine-900">
                                    <span className="font-bold">Colaborador:</span> {payroll.employee.name}
                                </p>
                                <p className="text-xs text-wine-700">
                                    <span className="font-semibold">Período:</span> {payroll.month}/{payroll.year}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-1 border-b border-wine-100 pb-4">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Dias Úteis Mês</label>
                                    <input
                                        required
                                        name="workingDays"
                                        type="number"
                                        value={workingDays}
                                        onChange={(e) => setWorkingDays(Number(e.target.value))}
                                        className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500/50 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-1 border-b border-wine-100 pb-4 flex items-end">
                                    <span className="text-xs text-wine-600 mb-2 font-medium bg-wine-50 p-2 rounded-lg leading-tight w-full opacity-80">Edite os dias úteis dependendo de qual dia cai no mês para o cálculo correto de VT e alimentação.</span>
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Faltas no Mês Base</label>
                                    <input
                                        name="absences"
                                        type="number"
                                        value={absences}
                                        onChange={(e) => setAbsences(Number(e.target.value))}
                                        min="0"
                                        className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-wine-500/50 text-rose-600 font-bold bg-rose-50/50 shadow-sm"
                                    />
                                    <span className="text-[10px] text-wine-700">Desconta do Salário</span>
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Faltas no Período VT</label>
                                    <input
                                        name="absencesVT"
                                        type="number"
                                        value={absencesVT}
                                        onChange={(e) => setAbsencesVT(Number(e.target.value))}
                                        min="0"
                                        className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-wine-500/50 text-amber-600 font-bold bg-amber-50/50 shadow-sm"
                                    />
                                    <span className="text-[10px] text-wine-700">Desconta do VT Pago</span>
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Outros Descontos (R$)</label>
                                    <input
                                        name="otherDeductions"
                                        type="number"
                                        step="0.01"
                                        value={otherDeductions}
                                        onChange={(e) => setOtherDeductions(Number(e.target.value))}
                                        className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-wine-500/50 text-rose-600 font-bold bg-rose-50/50 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Bônus / Acréscimos (R$)</label>
                                    <input
                                        name="bonuses"
                                        type="number"
                                        step="0.01"
                                        value={bonuses}
                                        onChange={(e) => setBonuses(Number(e.target.value))}
                                        className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-wine-500/50 text-emerald-600 font-bold bg-emerald-50/50 shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-6 border-t border-wine-100/50 mt-6">
                                <button type="button" onClick={() => setIsOpen(false)} className="px-5 py-2.5 text-wine-800 font-bold text-xs uppercase tracking-wider hover:bg-wine-50 rounded-xl transition-colors">
                                    Cancelar
                                </button>
                                <button type="submit" className="px-5 py-2.5 bg-gradient-to-b from-wine-800 to-wine-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2">
                                    Salvar Alterações
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
