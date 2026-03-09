"use client";

import { useState, useEffect } from "react";
import { Plus, X, Calculator } from "lucide-react";
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

function getWeekdaysBetween(startDate: string, endDate: string) {
    if (!startDate || !endDate) return 0;

    const [sYear, sMonth, sDay] = startDate.split('-').map(Number);
    const [eYear, eMonth, eDay] = endDate.split('-').map(Number);

    // Use 12:00 to avoid timezone offset shifts around midnight
    const start = new Date(sYear, sMonth - 1, sDay, 12, 0, 0);
    const end = new Date(eYear, eMonth - 1, eDay, 12, 0, 0);

    if (start > end) return 0;

    let weekdays = 0;
    let current = new Date(start);
    while (current <= end) {
        const dayOfWeek = current.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            weekdays++;
        }
        current.setDate(current.getDate() + 1);
    }
    return weekdays;
}

export default function GeneratePayrollModal({
    employees,
    currentMonth,
    currentYear,
}: {
    employees: Employee[];
    currentMonth: number;
    currentYear: number;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<Employee | null>(null);

    // Default dates: 8th of current month to 7th of next month
    const defaultStart = `${currentYear}-${String(currentMonth).padStart(2, '0')}-08`;
    const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
    const nextYear = currentMonth === 12 ? currentYear + 1 : currentYear;
    const defaultEnd = `${nextYear}-${String(nextMonth).padStart(2, '0')}-07`;

    const isTempDeductionActive = (emp: Employee | null) => {
        if (!emp || !emp.temporaryDeductions) return false;
        if (!emp.temporaryDeductionsExpiration) return true; // Sem expiração, sempre ativo
        const currentPeriod = `${currentYear}-${String(currentMonth).padStart(2, '0')}`;
        return currentPeriod <= emp.temporaryDeductionsExpiration;
    };

    const [startDate, setStartDate] = useState(defaultStart);
    const [endDate, setEndDate] = useState(defaultEnd);
    const [workingDays, setWorkingDays] = useState(getWeekdaysBetween(defaultStart, defaultEnd));

    // Update workingDays whenever startDate or endDate changes
    useEffect(() => {
        setWorkingDays(getWeekdaysBetween(startDate, endDate));
    }, [startDate, endDate]);

    async function handleSubmit(formData: FormData) {
        await generatePayrollForEmployee(formData);
        setIsOpen(false);
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 bg-gradient-to-b from-wine-800 to-wine-900 text-white px-5 py-2.5 rounded-xl font-bold shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
                <Calculator className="w-5 h-5" />
                Lançar Folha
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-wine-950/40 backdrop-blur-md z-[999] flex items-center justify-center p-4 animate-in fade-in duration-300">
                    <div className="bg-[#FCFBFA] rounded-[24px] shadow-premium-hover w-full max-w-lg max-h-[95vh] flex flex-col overflow-hidden border border-wine-100/50 animate-in zoom-in-95 duration-300">
                        <div className="bg-gradient-to-r from-wine-950 to-wine-900 text-white px-6 py-4 flex items-center justify-between border-b border-wine-800/50 shrink-0">
                            <h2 className="text-sm font-bold tracking-widest uppercase text-wine-100">Cálculo de Folha</h2>
                            <button type="button" onClick={() => setIsOpen(false)} className="text-wine-300 hover:text-white transition-colors p-1 hover:bg-wine-800/50 rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form action={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
                            <input type="hidden" name="month" value={currentMonth} />
                            <input type="hidden" name="year" value={currentYear} />

                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Colaborador</label>
                                    <select
                                        name="employeeId" required
                                        className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500"
                                        onChange={(e) => {
                                            const emp = employees.find(x => x.id === e.target.value);
                                            setSelectedUser(emp || null);
                                        }}
                                    >
                                        <option value="">Selecione...</option>
                                        {employees.map(emp => (
                                            <option key={emp.id} value={emp.id}>{emp.name} ({emp.type})</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Período Inicial</label>
                                    <input
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500"
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Período Final</label>
                                    <input
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500"
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Total de Dias do Mês</label>
                                    <input name="totalDays" type="number" defaultValue="30" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                    <span className="text-[10px] text-wine-700">Usado para cálculo do dia</span>
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Dias Úteis</label>
                                    <input
                                        required
                                        name="workingDays"
                                        type="number"
                                        value={workingDays}
                                        onChange={(e) => setWorkingDays(Number(e.target.value))}
                                        className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500/50 shadow-sm"
                                    />
                                    <span className="text-[10px] text-wine-700">Calculado para o período selecionado</span>
                                </div>

                                <div className="col-span-2 mt-2 pt-2 border-t border-wine-200">
                                    <h3 className="font-semibold text-wine-900 text-sm mb-3">Ajustes da Folha ({currentMonth}/{currentYear})</h3>
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Faltas no Mês Base</label>
                                    <input name="absences" type="number" defaultValue="0" min="0" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-wine-500/50 text-rose-600 font-bold bg-rose-50/50 shadow-sm" />
                                    <span className="text-[10px] text-wine-700">Desconta do Salário</span>
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Faltas no Período VT</label>
                                    <input name="absencesVT" type="number" defaultValue="0" min="0" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-wine-500/50 text-amber-600 font-bold bg-amber-50/50 shadow-sm" />
                                    <span className="text-[10px] text-wine-700">Desconta do VT Pago</span>
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Outros Descontos (R$)</label>
                                    <input name="otherDeductions" type="number" step="0.01" defaultValue={(selectedUser?.recurringDeductions || 0) + (isTempDeductionActive(selectedUser) ? (selectedUser?.temporaryDeductions || 0) : 0)} key={`deduction-${selectedUser?.id || 'none'}`} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-wine-500/50 text-rose-600 font-bold bg-rose-50/50 shadow-sm" />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Bônus / Acréscimos (R$)</label>
                                    <input name="bonuses" type="number" step="0.01" defaultValue="0" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-wine-500/50 text-emerald-600 font-bold bg-emerald-50/50 shadow-sm" />
                                </div>
                            </div>

                            {selectedUser && (
                                <div className="bg-gradient-to-r from-wine-50/80 to-transparent p-4 rounded-xl mt-4 border border-wine-100/50 shadow-sm">
                                    <p className="text-xs text-wine-800 leading-relaxed">
                                        <strong className="text-wine-950 font-bold">Salário Base:</strong> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(selectedUser.baseSalary)}<br />
                                        {selectedUser.type === "PJ" && (
                                            <>
                                                <strong className="text-wine-950 font-bold">VT Diário:</strong> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(selectedUser.transportDaily || 0)}<br />
                                                <strong className="text-wine-950 font-bold">Ajuda Gasolina (Fixo):</strong> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(selectedUser.gasAssistance || 0)}<br />
                                            </>
                                        )}
                                        {selectedUser.recurringDeductions > 0 && (
                                            <><strong className="text-wine-950 font-bold">Desc. Fixo Padrão:</strong> <span className="text-rose-600">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(selectedUser.recurringDeductions)}</span><br /></>
                                        )}
                                        {selectedUser.temporaryDeductions > 0 && (
                                            <>
                                                <strong className="text-wine-950 font-bold">Desc. Temp Padrão:</strong>{' '}
                                                <span className={isTempDeductionActive(selectedUser) ? "text-orange-600" : "text-gray-400 line-through"}>
                                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(selectedUser.temporaryDeductions)} {selectedUser.temporaryDeductionsDesc ? `(${selectedUser.temporaryDeductionsDesc})` : ''}
                                                </span>
                                                {!isTempDeductionActive(selectedUser) && <span className="text-gray-500 text-[10px] ml-1 font-bold uppercase">(Expirado - não somado)</span>}
                                                <br />
                                            </>
                                        )}
                                    </p>
                                </div>
                            )}

                            <div className="flex justify-end gap-3 pt-6 border-t border-wine-100/50 mt-6">
                                <button type="button" onClick={() => setIsOpen(false)} className="px-5 py-2.5 text-wine-800 font-bold text-xs uppercase tracking-wider hover:bg-wine-50 rounded-xl transition-colors">
                                    Cancelar
                                </button>
                                <button type="submit" className="px-5 py-2.5 bg-gradient-to-b from-wine-800 to-wine-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2">
                                    Salvar Holerite
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
