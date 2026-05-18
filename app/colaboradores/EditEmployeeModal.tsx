"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Pen, Plus, Trash2, X } from "lucide-react";
import { updateEmployee } from "./actions";
import { CLASS_GROUP_OPTIONS, type SubjectOption } from "@/lib/subjects";

const WEEKDAYS = [
    { value: 1, label: "Segunda" },
    { value: 2, label: "Terca" },
    { value: 3, label: "Quarta" },
    { value: 4, label: "Quinta" },
    { value: 5, label: "Sexta" },
    { value: 6, label: "Sabado" },
    { value: 7, label: "Domingo" },
];

/** Fundamental 1º–5º: 6 aulas/dia. Demais: 7 aulas/dia. */
function getMaxLessons(classGroup: string): number {
    const fund5 = ["1 ano Fundamental", "2 ano Fundamental", "3 ano Fundamental", "4 ano Fundamental", "5 ano Fundamental"];
    return fund5.includes(classGroup) ? 6 : 7;
}

function lessonsSummary(lessons: number[], classGroup: string): string | null {
    if (!lessons || lessons.length === 0 || !classGroup || classGroup === "Infantil") return null;
    const max = getMaxLessons(classGroup);
    const sorted = [...lessons].sort((a, b) => a - b);
    return `Aulas ${sorted.join(", ")} | de ${max}`;
}

type AssignmentDraft = {
    subjectName: string;
    weekday: number;
    classGroup: string;
    lessons: number[];
    hours: string;
    fullDay?: boolean;
};

type SalaryAdjustment = {
    id: string;
    effectiveDate: string | Date;
    previousSalary: number;
    newSalary: number;
    adjustmentValue: number;
    notes: string | null;
};

type EmployeeSubjectView = {
    subject?: { name?: string | null } | null;
};

type TeachingAssignmentView = {
    subject?: { name?: string | null } | null;
    weekday?: number | null;
    classGroup?: string | null;
    lessonStart?: number | null;
    lessonEnd?: number | null;
    fullDay?: boolean | null;
    hours?: number | null;
};

type EmployeeView = {
    id: string;
    name: string;
    cpf: string;
    type: string;
    role: string;
    baseSalary: number;
    profilePhotoUrl?: string | null;
    startDate?: string | Date | null;
    eatsAtSchool?: boolean;
    transportDaily?: number | null;
    gasAssistance?: number | null;
    pixKey?: string | null;
    paymentMethod?: string | null;
    bankName?: string | null;
    accountType?: string | null;
    agency?: string | null;
    accountNumber?: string | null;
    recurringDeductions?: number | null;
    temporaryDeductions?: number | null;
    temporaryDeductionsDesc?: string | null;
    temporaryDeductionsExpiration?: string | null;
    hourlyRate?: number | null;
    cestaBasica?: number | null;
    isAulista?: boolean;
    salaryAdvance?: number | null;
    employeeSubjects?: EmployeeSubjectView[];
    teachingAssignments?: TeachingAssignmentView[];
    salaryAdjustments?: SalaryAdjustment[];
};

const emptyAssignment = (): AssignmentDraft => ({
    subjectName: "",
    weekday: 1,
    classGroup: "",
    lessons: [],
    hours: "",
    fullDay: false,
});

const todayInput = () => new Date().toISOString().slice(0, 10);

function toDateInput(date?: string | Date | null) {
    if (!date) return "";
    return new Date(date).toISOString().slice(0, 10);
}

function formatBRL(value: number) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function SalaryHistoryChart({ adjustments, currentSalary, valueLabel = "Salario" }: { adjustments: SalaryAdjustment[]; currentSalary: number; valueLabel?: string }) {
    const points = useMemo(() => {
        const history = adjustments.map((item) => ({
            label: toDateInput(item.effectiveDate),
            value: item.newSalary,
        }));
        if (history.length === 0) return [];
        return history;
    }, [adjustments]);

    if (points.length === 0) {
        return <div className="rounded-xl border border-wine-100 bg-wine-50/60 p-4 text-sm text-wine-600">Sem reajustes registrados. {valueLabel} atual: {currentSalary.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</div>;
    }

    const values = points.map((point) => point.value);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const span = Math.max(max - min, 1);
    const width = 520;
    const height = 160;
    const padding = 24;
    const coords = points.map((point, index) => {
        const x = points.length === 1 ? width / 2 : padding + (index * (width - padding * 2)) / (points.length - 1);
        const y = height - padding - ((point.value - min) * (height - padding * 2)) / span;
        return { ...point, x, y };
    });
    const path = coords.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");

    return (
        <div className="rounded-xl border border-wine-100 bg-white p-4">
            <svg viewBox={`0 0 ${width} ${height}`} className="h-40 w-full" role="img" aria-label="Historico de reajustes salariais">
                <path d={path} fill="none" stroke="#7f1d1d" strokeWidth="3" />
                {coords.map((point) => (
                    <g key={`${point.label}-${point.value}`}>
                        <circle cx={point.x} cy={point.y} r="5" fill="#b45309" />
                        <text x={point.x} y={point.y - 10} textAnchor="middle" className="fill-wine-900 text-[10px] font-bold">
                            {point.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                        </text>
                    </g>
                ))}
            </svg>
        </div>
    );
}

function LessonSelector({ 
  lessons, 
  maxLessons, 
  onChange 
}: { 
  lessons: number[]; 
  maxLessons: number; 
  onChange: (lessons: number[]) => void; 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const sortedLessons = useMemo(() => [...lessons].sort((a, b) => a - b), [lessons]);

  return (
    <div className="relative w-full min-w-[150px]">
      <button 
        type="button" 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-wine-50/60 text-wine-950 border border-wine-200/80 rounded-xl px-3 py-2 text-xs font-semibold transition-all shadow-sm shrink-0 h-[38px] group"
      >
        <div className="flex items-center gap-1.5 overflow-hidden">
          {sortedLessons.length === 0 ? (
            <span className="text-wine-400 font-medium">Quais aulas?</span>
          ) : (
            <div className="flex flex-wrap gap-1 items-center max-w-[110px] overflow-hidden">
              {sortedLessons.map((l) => (
                <span key={l} className="inline-flex items-center justify-center bg-wine-900 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-md leading-none shrink-0 shadow-sm">
                  {l}ª
                </span>
              ))}
            </div>
          )}
        </div>
        <ChevronDown className={`w-3.5 h-3.5 text-wine-400 shrink-0 transition-transform duration-200 group-hover:text-wine-600 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <>
          <div className="fixed inset-0 z-[100]" onClick={() => setIsOpen(false)}></div>
          <div className="absolute top-full left-0 mt-2 w-[240px] bg-white/95 backdrop-blur-md border border-wine-150/80 rounded-2xl shadow-2xl z-[101] p-4 animate-in fade-in slide-in-from-top-2 duration-200 text-left">
            <div className="flex items-center justify-between border-b border-wine-100 pb-2 mb-3">
              <span className="text-xs font-bold text-wine-900 uppercase tracking-wider">Aulas do Dia</span>
              <span className="text-[10px] font-semibold text-wine-700 bg-wine-50 border border-wine-100 px-2 py-0.5 rounded-full">
                {lessons.length} sel.
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: maxLessons }).map((_, i) => {
                const lessonNum = i + 1;
                const isSelected = lessons.includes(lessonNum);
                return (
                  <button
                    type="button"
                    key={lessonNum}
                    onClick={() => {
                      const newLessons = isSelected
                        ? lessons.filter(l => l !== lessonNum)
                        : [...lessons, lessonNum];
                      onChange(newLessons);
                    }}
                    className={`h-12 rounded-xl flex flex-col items-center justify-center border transition-all duration-200 ${
                      isSelected 
                        ? 'bg-gradient-to-br from-wine-900 to-wine-800 text-white border-wine-950 shadow-md scale-105 font-bold' 
                        : 'bg-wine-50/40 text-wine-800 border-wine-100/80 hover:border-wine-300 hover:bg-wine-100/70 hover:scale-105 active:scale-95'
                    }`}
                  >
                    <span className="text-xs font-bold">{lessonNum}ª</span>
                    <span className="text-[8px] opacity-75 font-normal">aula</span>
                  </button>
                );
              })}
            </div>
            
            <div className="mt-4 pt-3 border-t border-wine-100 flex items-center justify-between gap-2">
              <button 
                type="button" 
                onClick={() => onChange([])} 
                className="text-[10px] font-bold text-wine-500 hover:text-wine-800 hover:bg-wine-50 px-2 py-1.5 rounded-xl transition-colors"
              >
                Limpar
              </button>
              <button 
                type="button" 
                onClick={() => setIsOpen(false)} 
                className="flex-1 py-1.5 text-xs font-bold text-white bg-wine-800 hover:bg-wine-900 rounded-xl transition-all shadow-md hover:shadow active:scale-95 text-center"
              >
                Confirmar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function EditEmployeeModal({ employee, subjectOptions }: { employee: EmployeeView; subjectOptions: SubjectOption[] }) {
    const sortedAdjustments = [...(employee.salaryAdjustments || [])].sort(
        (a, b) => new Date(a.effectiveDate).getTime() - new Date(b.effectiveDate).getTime()
    );
    const employeeIsAulista = employee.isAulista || false;
    const derivedInitialPayValue = sortedAdjustments[0]?.previousSalary ?? Number(employeeIsAulista ? employee.hourlyRate || 0 : employee.baseSalary || 0);
    const currentBaseSalaryFromHistory = !employeeIsAulista ? sortedAdjustments.at(-1)?.newSalary ?? Number(employee.baseSalary || 0) : Number(employee.baseSalary || 0);
    const currentHourlyRateFromHistory = employeeIsAulista ? sortedAdjustments.at(-1)?.newSalary ?? Number(employee.hourlyRate || 0) : Number(employee.hourlyRate || 0);

    const [isOpen, setIsOpen] = useState(false);
    const [showCatalogManager, setShowCatalogManager] = useState(false);
    const [type, setType] = useState(employee.type || "PJ");
    const [isAulista, setIsAulista] = useState(employee.isAulista || false);
    const [paymentMethod, setPaymentMethod] = useState(employee.paymentMethod || "PIX");
    const [initialPayValue, setInitialPayValue] = useState(String(derivedInitialPayValue || ""));
    const [baseSalary, setBaseSalary] = useState(String(currentBaseSalaryFromHistory || ""));
    const [hourlyRate, setHourlyRate] = useState(String(currentHourlyRateFromHistory || ""));
    const [showReajuste, setShowReajuste] = useState(false);
    const [newSalary, setNewSalary] = useState("");
    const [adjustmentValue, setAdjustmentValue] = useState("");
    const [adjustmentPercent, setAdjustmentPercent] = useState("");
    const [salaryAdjustmentDate, setSalaryAdjustmentDate] = useState(todayInput);
    const [formError, setFormError] = useState<string | null>(null);

    const adjustmentLabel = isAulista ? "Valor hora" : "Salario base";
    const adjustmentUnitLabel = isAulista ? "valor hora" : "salario";
    const adjustmentBaseValue = isAulista ? hourlyRate : baseSalary;
    const adjustmentBaseNum = Number(adjustmentBaseValue) || 0;
    const contractMode = type === "CLT" ? (isAulista ? "CLT_AULISTA" : "CLT_MENSALISTA") : type;

    const cleanFormat = (num: number) => {
        if (isNaN(num) || !isFinite(num)) return "";
        return Number(num.toFixed(2)).toString();
    };

    const handleNewSalaryChange = (val: string) => {
        setNewSalary(val);
        if (val === "" || isNaN(Number(val))) {
            setAdjustmentValue("");
            setAdjustmentPercent("");
        } else {
            const newValNum = Number(val);
            const diff = newValNum - adjustmentBaseNum;
            setAdjustmentValue(cleanFormat(diff));
            if (adjustmentBaseNum > 0) {
                setAdjustmentPercent(cleanFormat((diff / adjustmentBaseNum) * 100));
            } else {
                setAdjustmentPercent("0");
            }
        }
    };

    const handleAdjustmentValueChange = (val: string) => {
        setAdjustmentValue(val);
        if (val === "" || isNaN(Number(val))) {
            setNewSalary("");
            setAdjustmentPercent("");
        } else {
            const diff = Number(val);
            const newValNum = adjustmentBaseNum + diff;
            setNewSalary(cleanFormat(newValNum));
            if (adjustmentBaseNum > 0) {
                setAdjustmentPercent(cleanFormat((diff / adjustmentBaseNum) * 100));
            } else {
                setAdjustmentPercent("0");
            }
        }
    };

    const handleAdjustmentPercentChange = (val: string) => {
        setAdjustmentPercent(val);
        if (val === "" || isNaN(Number(val))) {
            setNewSalary("");
            setAdjustmentValue("");
        } else {
            const pct = Number(val);
            const diff = (adjustmentBaseNum * pct) / 100;
            const newValNum = adjustmentBaseNum + diff;
            setNewSalary(cleanFormat(newValNum));
            setAdjustmentValue(cleanFormat(diff));
        }
    };

    const resetReajuste = () => {
        setShowReajuste(false);
        setNewSalary("");
        setAdjustmentValue("");
        setAdjustmentPercent("");
        setSalaryAdjustmentDate(todayInput());
    };

    const handleOpen = () => {
        resetReajuste();
        setFormError(null);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        setFormError(null);
        resetReajuste();
    };

    const handleContractModeChange = (value: string) => {
        if (value === "CLT_AULISTA") {
            setType("CLT");
            setIsAulista(true);
            resetReajuste();
            return;
        }
        if (value === "CLT_MENSALISTA") {
            setType("CLT");
            setIsAulista(false);
            resetReajuste();
            return;
        }
        setType(value);
        setIsAulista(false);
        resetReajuste();
    };

    const [selectedSubjects, setSelectedSubjects] = useState<string[]>(
        employee.employeeSubjects?.map((item) => item.subject?.name).filter((name): name is string => Boolean(name)) || []
    );
    const [assignments, setAssignments] = useState<AssignmentDraft[]>(() => {
        if (!employee.teachingAssignments?.length) return [emptyAssignment()];
        
        const groups: Record<string, AssignmentDraft> = {};
        
        employee.teachingAssignments.forEach((item) => {
            const key = `${item.subject?.name || ""}-${item.weekday || 1}-${item.classGroup || ""}-${item.fullDay || false}`;
            if (!groups[key]) {
                groups[key] = {
                    subjectName: item.subject?.name || "",
                    weekday: item.weekday || 1,
                    classGroup: item.classGroup || "",
                    lessons: [],
                    hours: "0",
                    fullDay: item.fullDay || false,
                };
            }
            
            if (item.lessonStart && item.lessonEnd) {
                for (let i = item.lessonStart; i <= item.lessonEnd; i++) {
                    if (!groups[key].lessons.includes(i)) {
                        groups[key].lessons.push(i);
                    }
                }
            } else if (item.lessonStart) {
                if (!groups[key].lessons.includes(item.lessonStart)) groups[key].lessons.push(item.lessonStart);
            }
            
            groups[key].hours = (Number(groups[key].hours) + Number(item.hours || 0)).toString();
        });
        
        return Object.values(groups);
    });

    const salaryChanged = showReajuste && newSalary !== "";
    const effectiveBaseSalary = !isAulista && salaryChanged ? newSalary : baseSalary;
    const effectiveHourlyRate = isAulista && salaryChanged ? newSalary : hourlyRate;
    const payValueAfterAdjustment = salaryChanged ? Number(newSalary) : adjustmentBaseNum;
    const adjustmentPercentDisplay = adjustmentBaseNum > 0 ? Math.abs((payValueAfterAdjustment / adjustmentBaseNum - 1) * 100).toFixed(2) : "0.00";

    async function handleSubmit(formData: FormData) {
        setFormError(null);
        const hasHistory = sortedAdjustments.length > 0;
        const submittedBaseSalary = !hasHistory && !isAulista ? initialPayValue : effectiveBaseSalary;
        const submittedHourlyRate = !hasHistory && isAulista ? initialPayValue : effectiveHourlyRate;

        formData.set("initialPayValue", initialPayValue);
        formData.set("baseSalary", submittedBaseSalary);
        formData.set("hourlyRate", submittedHourlyRate);
        formData.set("isReajuste", showReajuste ? "true" : "false");
        formData.set("teachingAssignments", JSON.stringify(assignments));
        formData.delete("subjects");
        selectedSubjects.forEach((sub) => formData.append("subjects", sub));
        const result = await updateEmployee(formData);
        if (!result.ok) {
            setFormError(result.error);
            return;
        }
        setIsOpen(false);
        setShowReajuste(false);
        setNewSalary("");
    }

    function updateAssignment(index: number, patch: Partial<AssignmentDraft>) {
        setAssignments((current) => current.map((item, itemIndex) => {
            if (itemIndex === index) {
                const updated = { ...item, ...patch };
                
                // Auto-calculate hours (45 min per lesson = 0.75h)
                if (patch.lessons !== undefined && !updated.fullDay) {
                    updated.hours = (patch.lessons.length * 0.75).toString();
                } else if (patch.fullDay !== undefined) {
                    if (updated.fullDay && updated.classGroup && updated.classGroup !== "Infantil") {
                        const max = getMaxLessons(updated.classGroup);
                        updated.hours = (max * 0.75).toString();
                    } else if (!updated.fullDay) {
                        updated.hours = (updated.lessons.length * 0.75).toString();
                    }
                } else if (patch.classGroup !== undefined && updated.fullDay && updated.classGroup !== "Infantil") {
                     const max = getMaxLessons(updated.classGroup);
                     updated.hours = (max * 0.75).toString();
                }
                
                return updated;
            }
            return item;
        }));
    }

    function toggleSubject(subject: string) {
        setSelectedSubjects((current) => current.includes(subject) ? current.filter((item) => item !== subject) : [...current, subject]);
    }

    return (
        <>
            <button type="button" onClick={handleOpen} className="p-2 text-wine-400 hover:bg-wine-100 hover:text-wine-800 rounded-lg transition-colors" title="Editar">
                <Pen className="w-4 h-4" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-wine-950/40 backdrop-blur-md z-[999] flex items-center justify-center p-4 animate-in fade-in duration-300">
                    <div className="bg-[#FCFBFA] rounded-[24px] shadow-premium-hover w-full max-w-5xl max-h-[95vh] flex flex-col overflow-hidden border border-wine-100/50 animate-in zoom-in-95 duration-300 text-left">
                        <div className="bg-gradient-to-r from-wine-950 to-wine-900 text-white px-6 py-4 flex items-center justify-between border-b border-wine-800/50 shrink-0">
                            <h2 className="text-sm font-bold tracking-widest uppercase text-wine-100">Editar colaborador</h2>
                            <button type="button" onClick={handleClose} className="text-wine-300 hover:text-white transition-colors p-1 hover:bg-wine-800/50 rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form action={handleSubmit} className="p-6 space-y-6 overflow-y-auto pb-36">
                            <input type="hidden" name="id" value={employee.id} />
                            <input type="hidden" name="teachingAssignments" value={JSON.stringify(assignments)} readOnly />
                            <input type="hidden" name="type" value={type} />
                            <input type="hidden" name="isAulista" value={isAulista.toString()} />
                            {formError && (
                                <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-800">
                                    {formError}
                                </div>
                            )}

                            <section>
                                <h3 className="text-xs font-bold text-wine-500 uppercase tracking-widest mb-3">Dados pessoais e contrato</h3>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-wine-900 mb-1">Nome completo</label>
                                        <input required name="name" type="text" defaultValue={employee.name} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-wine-900 mb-1">CPF</label>
                                        <input required name="cpf" type="text" defaultValue={employee.cpf} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-wine-900 mb-1">Cargo</label>
                                        <input required name="role" type="text" defaultValue={employee.role} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-wine-900 mb-1">Foto de perfil</label>
                                        <div className="flex items-center gap-3">
                                            {employee.profilePhotoUrl ? <img src={employee.profilePhotoUrl} alt="" className="h-12 w-12 rounded-full object-cover border border-wine-100" /> : <div className="h-12 w-12 rounded-full bg-wine-100 text-wine-800 grid place-items-center font-bold">{employee.name?.slice(0, 1)}</div>}
                                            <input name="profilePhoto" type="file" accept="image/*" className="w-full text-sm text-wine-800 file:mr-3 file:rounded-lg file:border-0 file:bg-wine-100 file:px-3 file:py-2 file:text-wine-900" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-wine-900 mb-1">Inicio no colegio</label>
                                        <input name="startDate" type="date" defaultValue={toDateInput(employee.startDate)} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-wine-900 mb-1">Tipo de contrato</label>
                                        <select value={contractMode} onChange={(e) => handleContractModeChange(e.target.value)} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500">
                                            <option value="PJ">PJ</option>
                                            <option value="CLT_MENSALISTA">CLT mensalista</option>
                                            <option value="CLT_AULISTA">CLT aulista</option>
                                            <option value="VOLUNTARIO">Voluntario</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-4">
                                        {/* Salary card — direct edit or adjustment */}
                                        {!showReajuste ? (
                                            <div className="rounded-xl border border-wine-100 bg-white p-4 flex flex-col gap-3">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    <div className="rounded-lg border border-wine-100 bg-wine-50/60 px-3 py-2">
                                                        <label className="block text-[10px] font-bold text-wine-500 uppercase tracking-wider mb-1">{adjustmentLabel} inicial</label>
                                                        <div className="relative">
                                                            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 text-xs font-bold text-wine-500">R$</span>
                                                            <input
                                                                type="number"
                                                                step="0.01"
                                                                value={initialPayValue}
                                                                onChange={(e) => setInitialPayValue(e.target.value)}
                                                                className="w-full rounded-md border border-wine-100 bg-white pl-7 pr-2 py-1.5 text-base font-bold text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-400"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="rounded-lg border border-emerald-100 bg-emerald-50/60 px-3 py-2">
                                                        <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">{adjustmentLabel} atual após reajustes</p>
                                                        <p className="text-base font-bold text-emerald-950">{formatBRL(adjustmentBaseNum)}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-end justify-between gap-4 flex-wrap">
                                                    <div className="flex-1 min-w-[200px]">
                                                        <label className="block text-sm font-semibold text-wine-700 mb-1">{adjustmentLabel} (Correção Direta)</label>
                                                        <div className="relative rounded-lg shadow-sm max-w-xs">
                                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                                <span className="text-wine-500 text-sm">R$</span>
                                                            </div>
                                                            <input
                                                                required
                                                                type="number"
                                                                step="0.01"
                                                                value={adjustmentBaseValue}
                                                                onChange={(e) => isAulista ? setHourlyRate(e.target.value) : setBaseSalary(e.target.value)}
                                                                className="w-full border border-wine-200 rounded-lg pl-8 pr-3 py-2 bg-white text-wine-950 font-bold focus:outline-none focus:ring-2 focus:ring-wine-500 text-sm"
                                                            />
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => { setShowReajuste(true); setNewSalary(""); }}
                                                        className="bg-wine-800 text-white hover:bg-wine-900 shadow-md px-4 py-2 rounded-lg text-sm font-bold transition-all h-[38px] flex items-center justify-center shrink-0"
                                                    >
                                                        + Registrar Reajuste Oficial
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="rounded-xl border border-wine-100 bg-white p-4 flex flex-col gap-3">
                                                <div className="flex items-center justify-between">
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
                                                        <div className="rounded-lg border border-wine-100 bg-wine-50/60 px-3 py-2">
                                                            <label className="block text-[10px] font-bold text-wine-500 uppercase tracking-wider mb-1">{adjustmentLabel} inicial</label>
                                                            <div className="relative">
                                                                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 text-xs font-bold text-wine-500">R$</span>
                                                                <input
                                                                    type="number"
                                                                    step="0.01"
                                                                    value={initialPayValue}
                                                                    onChange={(e) => setInitialPayValue(e.target.value)}
                                                                    className="w-full rounded-md border border-wine-100 bg-white pl-7 pr-2 py-1.5 text-base font-bold text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-400"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="rounded-lg border border-wine-100 bg-white px-3 py-2">
                                                            <p className="text-[10px] font-bold text-wine-500 uppercase tracking-wider">{adjustmentLabel} antes deste reajuste</p>
                                                            <p className="text-base font-bold text-wine-950">{formatBRL(adjustmentBaseNum)}</p>
                                                        </div>
                                                        <div className="rounded-lg border border-emerald-100 bg-emerald-50/60 px-3 py-2">
                                                            <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">{adjustmentLabel} após reajuste</p>
                                                            <p className="text-base font-bold text-emerald-950">{formatBRL(payValueAfterAdjustment)}</p>
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => { setShowReajuste(false); setNewSalary(""); }}
                                                        className="bg-wine-100 text-wine-800 hover:bg-wine-200 px-4 py-2 rounded-lg text-sm font-bold transition-all"
                                                    >
                                                        Cancelar reajuste
                                                    </button>
                                                </div>

                                                <div className="border-t border-wine-100 pt-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                                                    {/* Row 1: Bidirectional Salary Inputs */}
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        <div>
                                                            <label className="block text-xs font-bold text-wine-700 mb-1 uppercase tracking-wider">Novo {adjustmentUnitLabel} (R$)</label>
                                                            <div className="relative rounded-lg shadow-sm">
                                                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                                    <span className="text-wine-500 text-xs">R$</span>
                                                                </div>
                                                                <input
                                                                    type="number"
                                                                    step="0.01"
                                                                    placeholder={adjustmentBaseValue}
                                                                    value={newSalary}
                                                                    onChange={(e) => handleNewSalaryChange(e.target.value)}
                                                                    className="block w-full rounded-lg border border-amber-200 pl-8 pr-3 py-2 bg-white text-wine-950 font-bold focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label className="block text-xs font-bold text-wine-700 mb-1 uppercase tracking-wider">Valor do Reajuste (R$)</label>
                                                            <div className="relative rounded-lg shadow-sm">
                                                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                                    <span className="text-wine-500 text-xs">R$</span>
                                                                </div>
                                                                <input
                                                                    type="number"
                                                                    step="0.01"
                                                                    placeholder="Ex: 500.00 ou -200.00"
                                                                    value={adjustmentValue}
                                                                    onChange={(e) => handleAdjustmentValueChange(e.target.value)}
                                                                    className="block w-full rounded-lg border border-amber-200 pl-8 pr-3 py-2 bg-white text-wine-950 font-bold focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label className="block text-xs font-bold text-wine-700 mb-1 uppercase tracking-wider">Porcentagem (%)</label>
                                                            <div className="relative rounded-lg shadow-sm">
                                                                <input
                                                                    type="number"
                                                                    step="0.01"
                                                                    placeholder="Ex: 10 ou -5"
                                                                    value={adjustmentPercent}
                                                                    onChange={(e) => handleAdjustmentPercentChange(e.target.value)}
                                                                    className="block w-full rounded-lg border border-amber-200 px-3 py-2 bg-white text-wine-950 font-bold focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                                                                />
                                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                                                    <span className="text-wine-500 text-xs">%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Dynamic pill for increase/decrease */}
                                                    {newSalary && Number(newSalary) !== adjustmentBaseNum && (
                                                        <div className="flex items-center gap-2">
                                                            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold shadow-sm ${
                                                                Number(newSalary) > adjustmentBaseNum
                                                                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                                                    : "bg-rose-50 text-rose-700 border border-rose-200"
                                                            }`}>
                                                                <span className={`w-1.5 h-1.5 rounded-full ${Number(newSalary) > adjustmentBaseNum ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                                                                {Number(newSalary) > adjustmentBaseNum ? "Aumento de " : "Redução de "}
                                                                {Math.abs(Number(newSalary) - adjustmentBaseNum).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                                                                {" "}({adjustmentPercentDisplay}%)
                                                            </span>
                                                        </div>
                                                    )}

                                                    {/* Row 2: Date and notes */}
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-wine-50 pt-4">
                                                        <div>
                                                            <label className="block text-xs font-bold text-wine-700 mb-1 uppercase tracking-wider">Data de vigência</label>
                                                            <input
                                                                name="salaryAdjustmentDate"
                                                                type="date"
                                                                value={salaryAdjustmentDate}
                                                                onChange={(e) => setSalaryAdjustmentDate(e.target.value)}
                                                                className="w-full border border-amber-200 rounded-lg px-3 py-2 bg-white text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-xs font-bold text-wine-700 mb-1 uppercase tracking-wider">Observação</label>
                                                            <input
                                                                name="salaryAdjustmentNotes"
                                                                type="text"
                                                                placeholder="Ex: Reajuste anual"
                                                                className="w-full border border-amber-200 rounded-lg px-3 py-2 bg-white text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {/* Hidden input sends the effective salary */}
                                        <input type="hidden" name="baseSalary" value={effectiveBaseSalary} />
                                    </div>
                                    <label className="md:col-span-4 flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-sm font-medium text-emerald-900">
                                        <input name="eatsAtSchool" type="checkbox" defaultChecked={employee.eatsAtSchool} className="h-4 w-4 rounded border-emerald-300" />
                                        Almoca no colegio
                                    </label>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xs font-bold text-wine-500 uppercase tracking-widest mb-3">Pagamento e beneficios</h3>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-wine-600 uppercase tracking-wider mb-1">VT diario</label>
                                        <input name="transportDaily" type="number" step="0.01" defaultValue={employee.transportDaily || ""} placeholder="Ex: 10,60" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950" />
                                    </div>
                                    {(type === "PJ" || type === "VOLUNTARIO") && (
                                        <div>
                                            <label className="block text-xs font-bold text-wine-600 uppercase tracking-wider mb-1">Ajuda gasolina</label>
                                            <input name="gasAssistance" type="number" step="0.01" defaultValue={employee.gasAssistance || ""} placeholder="Ex: 150,00" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950" />
                                        </div>
                                    )}
                                    {type === "CLT" && (
                                        <>
                                            <div>
                                                <label className="block text-xs font-bold text-wine-600 uppercase tracking-wider mb-1">Cesta basica</label>
                                                <input name="cestaBasica" type="number" step="0.01" defaultValue={employee.cestaBasica || ""} placeholder="Ex: 250,00" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950" />
                                            </div>
                                        </>
                                    )}
                                    <div>
                                        <label className="block text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">Adiantamento dia 20</label>
                                        <input name="salaryAdvance" type="number" step="0.01" min="0" defaultValue={employee.salaryAdvance || "0"} placeholder="Ex: 500,00" className="w-full border border-amber-200 rounded-lg px-3 py-2 bg-amber-50/40 text-amber-900 font-bold" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-wine-600 uppercase tracking-wider mb-1">Forma de pagamento</label>
                                        <select name="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950">
                                            <option value="PIX">PIX</option>
                                            <option value="TRANSFER">Transferencia</option>
                                        </select>
                                    </div>
                                    {paymentMethod === "PIX" ? (
                                        <div className="md:col-span-2">
                                            <label className="block text-xs font-bold text-wine-600 uppercase tracking-wider mb-1">Chave PIX</label>
                                            <input name="pixKey" type="text" defaultValue={employee.pixKey || ""} placeholder="CPF, email, telefone ou chave aleatoria" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950" />
                                        </div>
                                    ) : (
                                        <>
                                            <div>
                                                <label className="block text-xs font-bold text-wine-600 uppercase tracking-wider mb-1">Banco</label>
                                                <input name="bankName" defaultValue={employee.bankName || ""} placeholder="Nome do banco" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-wine-600 uppercase tracking-wider mb-1">Tipo de conta</label>
                                                <input name="accountType" defaultValue={employee.accountType || ""} placeholder="Corrente ou poupanca" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-wine-600 uppercase tracking-wider mb-1">Agencia</label>
                                                <input name="agency" defaultValue={employee.agency || ""} placeholder="Agencia" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-wine-600 uppercase tracking-wider mb-1">Conta</label>
                                                <input name="accountNumber" defaultValue={employee.accountNumber || ""} placeholder="Numero da conta" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950" />
                                            </div>
                                        </>
                                    )}
                                    <div>
                                        <label className="block text-xs font-bold text-rose-700 uppercase tracking-wider mb-1">Descontos fixos</label>
                                        <input name="recurringDeductions" type="number" step="0.01" defaultValue={employee.recurringDeductions || "0"} placeholder="Ex: 100,00" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-rose-50/30 text-rose-700" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-orange-700 uppercase tracking-wider mb-1">Desconto temporario</label>
                                        <input name="temporaryDeductions" type="number" step="0.01" defaultValue={employee.temporaryDeductions || "0"} placeholder="Ex: 50,00" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-orange-50/30 text-orange-700" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-wine-600 uppercase tracking-wider mb-1">Motivo do desconto</label>
                                        <input name="temporaryDeductionsDesc" type="text" defaultValue={employee.temporaryDeductionsDesc || ""} placeholder="Ex: Uniforme" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-wine-600 uppercase tracking-wider mb-1">Fim do desconto</label>
                                        <input name="temporaryDeductionsExpiration" type="month" defaultValue={employee.temporaryDeductionsExpiration || ""} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950" />
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xs font-bold text-wine-500 uppercase tracking-widest">Materias e grade atual</h3>
                                    <button
                                        type="button"
                                        onClick={() => setShowCatalogManager(!showCatalogManager)}
                                        className="text-xs font-medium text-wine-600 hover:text-wine-900 underline underline-offset-2 transition-colors"
                                    >
                                        {showCatalogManager ? "Ocultar menu de matérias" : "Gerenciar matérias do professor"}
                                    </button>
                                </div>

                                {showCatalogManager && (
                                    <div className="mb-6 rounded-xl border border-wine-100 bg-wine-50/50 p-4">
                                        <div>
                                            <label className="block text-sm font-medium text-wine-900 mb-2">Selecione as matérias que o professor pode lecionar:</label>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 rounded-xl border border-wine-100 bg-white p-3">
                                                {subjectOptions.map((subject) => (
                                                    <label key={subject.id} className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-wine-900 hover:bg-wine-50">
                                                        <input
                                                            name="subjects"
                                                            type="checkbox"
                                                            value={subject.name}
                                                            checked={selectedSubjects.includes(subject.name)}
                                                            onChange={() => toggleSubject(subject.name)}
                                                            className="h-4 w-4 rounded border-wine-300"
                                                        />
                                                        {subject.name}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Matérias habilitadas — sempre visível acima da grade */}
                                <div className="mb-3 flex flex-wrap items-center gap-2">
                                    <span className="text-xs font-semibold text-wine-500 uppercase tracking-wider shrink-0">Habilitado para:</span>
                                    {selectedSubjects.length === 0 ? (
                                        <span className="text-xs text-wine-400 italic">Nenhuma matéria selecionada</span>
                                    ) : (
                                        selectedSubjects.map((subject) => (
                                            <span
                                                key={subject}
                                                className="inline-flex items-center gap-1 rounded-full bg-wine-100 px-2.5 py-0.5 text-xs font-medium text-wine-800"
                                            >
                                                {subject}
                                            </span>
                                        ))
                                    )}
                                </div>

                                <div className="space-y-3">
                                    {assignments.map((assignment, index) => (
                                        <div key={index} className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1.2fr_auto_1fr_0.7fr_auto] gap-3 items-end rounded-xl border border-wine-100 bg-white p-3">
                                            <div>
                                                <label className="block text-xs font-bold text-wine-600 uppercase tracking-wider mb-1">Materia atual</label>
                                                <select value={assignment.subjectName} onChange={(e) => updateAssignment(index, { subjectName: e.target.value })} className="w-full border border-wine-200 rounded-lg px-3 py-2 text-wine-950">
                                                    <option value="">Selecione</option>
                                                    {subjectOptions.map((subject) => <option key={subject.id} value={subject.name}>{subject.name}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-wine-600 uppercase tracking-wider mb-1">Serie/turma</label>
                                                <select value={assignment.classGroup} onChange={(e) => updateAssignment(index, { classGroup: e.target.value, lessons: e.target.value === "Infantil" ? [] : assignment.lessons, fullDay: e.target.value === "Infantil" ? true : assignment.fullDay })} className="w-full border border-wine-200 rounded-lg px-3 py-2 text-wine-950">
                                                    <option value="">Selecione</option>
                                                    {CLASS_GROUP_OPTIONS.map((group) => <option key={group} value={group}>{group}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-wine-600 uppercase tracking-wider mb-1">Dia da semana</label>
                                                <select value={assignment.weekday} onChange={(e) => updateAssignment(index, { weekday: Number(e.target.value) })} className="w-full border border-wine-200 rounded-lg px-3 py-2 text-wine-950">
                                                    {WEEKDAYS.map((day) => <option key={day.value} value={day.value}>{day.label}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <span className="block text-xs font-bold text-wine-600 uppercase tracking-wider mb-1">Periodo</span>
                                                <label className="flex items-center gap-1.5 px-3 py-2 select-none text-xs font-semibold text-wine-900 border border-wine-150 bg-wine-50/50 rounded-lg cursor-pointer hover:bg-wine-100/70 transition-colors h-[38px]">
                                                    <input
                                                        type="checkbox"
                                                        checked={assignment.classGroup === "Infantil" || assignment.fullDay === true}
                                                        disabled={assignment.classGroup === "Infantil"}
                                                        onChange={(e) => {
                                                            const checked = e.target.checked;
                                                            updateAssignment(index, {
                                                                fullDay: checked,
                                                                lessons: checked ? [] : assignment.lessons
                                                            });
                                                        }}
                                                        className="h-4 w-4 rounded border-wine-300 text-wine-800 focus:ring-wine-500 disabled:opacity-50"
                                                    />
                                                    <span>Dia todo</span>
                                                </label>
                                            </div>
                                            <div>
                                                <span className="block text-xs font-bold text-wine-600 uppercase tracking-wider mb-1">Aulas</span>
                                                {(assignment.classGroup === "Infantil" || assignment.fullDay) ? (
                                                    <div className="flex items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800 h-[38px] w-full">
                                                        Dia todo
                                                    </div>
                                                ) : (
                                                    <LessonSelector 
                                                        lessons={assignment.lessons}
                                                        maxLessons={getMaxLessons(assignment.classGroup || "1 ano Fundamental")}
                                                        onChange={(newLessons) => updateAssignment(index, { lessons: newLessons })}
                                                    />
                                                )}
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-wine-600 uppercase tracking-wider mb-1">Horas</label>
                                                <input value={assignment.hours} onChange={(e) => updateAssignment(index, { hours: e.target.value })} type="number" step="0.01" placeholder="Ex: 1,5" className="w-full border border-wine-200 rounded-lg px-3 py-2 text-wine-950" />
                                            </div>
                                            <button type="button" onClick={() => setAssignments((current) => current.filter((_, itemIndex) => itemIndex !== index))} className="h-[38px] p-2 text-rose-500 hover:bg-rose-50 rounded-lg">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                            {(assignment.subjectName || assignment.classGroup) && (
                                                <div className="md:col-span-full pt-1">
                                                    {(assignment.classGroup === "Infantil" || assignment.fullDay) ? (
                                                        <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                                                            {assignment.subjectName || "Matéria"} — Dia todo · {assignment.classGroup || "Infantil"} · {WEEKDAYS.find((d) => d.value === assignment.weekday)?.label}
                                                        </span>
                                                    ) : lessonsSummary(assignment.lessons, assignment.classGroup) ? (
                                                        <span className="inline-flex items-center rounded-full bg-wine-100 px-3 py-1 text-xs font-semibold text-wine-800">
                                                            {assignment.subjectName || "Matéria"} — {assignment.classGroup} · {WEEKDAYS.find((d) => d.value === assignment.weekday)?.label} · {lessonsSummary(assignment.lessons, assignment.classGroup)}
                                                        </span>
                                                    ) : null}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <button type="button" onClick={() => setAssignments((current) => [...current, emptyAssignment()])} className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-wine-800 hover:text-wine-950">
                                    <Plus className="w-4 h-4" />
                                    Adicionar aula/horario
                                </button>
                            </section>

                            <section>
                                <h3 className="text-xs font-bold text-wine-500 uppercase tracking-widest mb-3">Historico de reajustes</h3>
                                <SalaryHistoryChart adjustments={employee.salaryAdjustments || []} currentSalary={adjustmentBaseNum} valueLabel={adjustmentLabel} />
                                <div className="mt-3 overflow-x-auto rounded-xl border border-wine-100 bg-white">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-wine-50 text-xs uppercase tracking-wider text-wine-700">
                                            <tr>
                                                <th className="px-3 py-2">Data</th>
                                                <th className="px-3 py-2">Anterior</th>
                                                <th className="px-3 py-2">Novo</th>
                                                <th className="px-3 py-2">Diferenca</th>
                                                <th className="px-3 py-2">Obs.</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-wine-100">
                                            {(employee.salaryAdjustments || []).length === 0 ? (
                                                <tr><td className="px-3 py-3 text-wine-500" colSpan={5}>Nenhum reajuste registrado.</td></tr>
                                            ) : (employee.salaryAdjustments || []).map((item: SalaryAdjustment) => (
                                                <tr key={item.id}>
                                                    <td className="px-3 py-2">{toDateInput(item.effectiveDate).split("-").reverse().join("/")}</td>
                                                    <td className="px-3 py-2">{item.previousSalary.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
                                                    <td className="px-3 py-2 font-bold text-wine-950">{item.newSalary.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
                                                    <td className="px-3 py-2 text-emerald-700">{item.adjustmentValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
                                                    <td className="px-3 py-2">{item.notes || "-"}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <div className="flex justify-end gap-3 pt-6 border-t border-wine-100 mt-6">
                                <button type="button" onClick={handleClose} className="px-4 py-2 text-wine-800 font-medium hover:bg-wine-100 rounded-lg transition-colors">Cancelar</button>
                                <button type="submit" className="px-4 py-2 bg-wine-800 text-white font-medium hover:bg-wine-900 rounded-lg shadow-md transition-colors">Atualizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
