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
    isAulista: boolean;
    hourlyRate: number | null;
    cestaBasica: number | null;
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
    salaryAdvance: number;
    hoursAulista: number | null;
    employee: Employee;
};

export default function EditPayrollModal({ payroll }: { payroll: Payroll }) {
    const [isOpen, setIsOpen] = useState(false);

    const [workingDays, setWorkingDays] = useState(payroll.workingDays);
    const [absences, setAbsences] = useState(payroll.absences);
    const [absencesVT, setAbsencesVT] = useState(payroll.absencesVT);
    const [otherDeductions, setOtherDeductions] = useState(payroll.otherDeductions || 0);
    const [bonuses, setBonuses] = useState(Math.max(0, (payroll.bonuses || 0) - (payroll.employee.cestaBasica || 0)));
    const [salaryAdvance, setSalaryAdvance] = useState(payroll.salaryAdvance || 0);
    const [hoursAulista, setHoursAulista] = useState(payroll.hoursAulista || 0);

    // Reset state when opening modal
    useEffect(() => {
        if (isOpen) {
            setWorkingDays(payroll.workingDays);
            setAbsences(payroll.absences);
            setAbsencesVT(payroll.absencesVT);
            setOtherDeductions(payroll.otherDeductions);
            setBonuses(payroll.bonuses);
            setSalaryAdvance(payroll.salaryAdvance || 0);
            setHoursAulista(payroll.hoursAulista || 0);
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
                                        defaultValue={workingDays}
                                        className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500/50 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-1 border-b border-wine-100 pb-4 flex items-end">
                                    <span className="text-xs text-wine-600 mb-2 font-medium bg-wine-50 p-2 rounded-lg leading-tight w-full opacity-80">Edite os dias úteis dependendo de qual dia cai no mês para o cálculo correto de VT e alimentação.</span>
                                </div>

                                {payroll.employee.isAulista && (
                                    <div className="col-span-2 bg-amber-50/50 p-4 rounded-xl border border-amber-100 mb-2">
                                        <label className="block text-sm font-bold text-amber-900 mb-1 uppercase tracking-tight">Horas Aula no Período</label>
                                        <input 
                                            required 
                                            name="hoursAulista" 
                                            type="number" 
                                            step="0.01" 
                                            defaultValue={hoursAulista}
                                            className="w-full border border-amber-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-amber-500 font-bold text-lg" 
                                        />
                                        <p className="text-[10px] text-amber-700 mt-1">Valor/Hora: R$ {payroll.employee.hourlyRate?.toFixed(2) || "0.00"}</p>
                                    </div>
                                )}

                                {!payroll.employee.isAulista && (
                                    <div className="col-span-1">
                                        <label className="block text-sm font-medium text-wine-900 mb-1">Faltas no Mês Base</label>
                                        <input
                                            name="absences"
                                            type="number"
                                            defaultValue={absences}
                                            min="0"
                                            className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-wine-500/50 text-rose-600 font-bold bg-rose-50/50 shadow-sm"
                                        />
                                        <span className="text-[10px] text-wine-700">Desconta do Salário</span>
                                    </div>
                                )}

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Faltas no Período VT</label>
                                    <input
                                        name="absencesVT"
                                        type="number"
                                        defaultValue={absencesVT}
                                        min="0"
                                        className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-wine-500/50 text-amber-600 font-bold bg-amber-50/50 shadow-sm"
                                    />
                                    <span className="text-[10px] text-wine-700">Desconta do VT Pago</span>
                                </div>

                                <div className="col-span-2 mt-4 pt-4 border-t border-wine-100/50">
                                    <h4 className="text-[10px] font-bold text-wine-400 uppercase tracking-widest mb-4">Ajustes de Descontos</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-1">
                                            <label className="block text-[10px] font-bold text-wine-900 mb-1.5 uppercase tracking-wider">Outros Descontos</label>
                                            <div className="relative group">
                                                <input
                                                    name="otherDeductions"
                                                    type="number"
                                                    step="0.01"
                                                    defaultValue={otherDeductions}
                                                    className="w-full border border-wine-200 rounded-xl px-4 py-2.5 bg-rose-50/30 text-rose-700 font-bold focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all shadow-inner-soft text-sm"
                                                />
                                                <span className="absolute right-3 top-2.5 text-rose-300 text-[10px] font-bold">R$</span>
                                            </div>
                                        </div>

                                        <div className="col-span-1">
                                            <label className="block text-[10px] font-bold text-wine-900 mb-1.5 uppercase tracking-wider">Adiantamento (Dia 20)</label>
                                            <div className="relative group">
                                                <input
                                                    name="salaryAdvance"
                                                    type="number"
                                                    step="0.01"
                                                    defaultValue={salaryAdvance}
                                                    className="w-full border border-amber-200 rounded-xl px-4 py-2.5 bg-amber-50/30 text-amber-700 font-bold focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all shadow-inner-soft text-sm"
                                                />
                                                <span className="absolute right-3 top-2.5 text-amber-300 text-[10px] font-bold">R$</span>
                                            </div>
                                            <p className="text-[9px] text-amber-600/70 mt-1 font-medium italic">Deduzido automaticamente se já pago</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Bônus / Acréscimos (R$)</label>
                                    <input
                                        name="bonuses"
                                        type="number"
                                        step="0.01"
                                        defaultValue={bonuses}
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
