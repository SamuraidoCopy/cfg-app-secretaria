"use client";

import { useState, useMemo } from "react";
import { ChevronDown, Plus, Trash2, X } from "lucide-react";
import { addEmployee } from "./actions";
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

type AssignmentDraft = {
    subjectName: string;
    weekday: number;
    classGroup: string;
    lessons: number[];
    hours: string;
    fullDay?: boolean;
};

const emptyAssignment = (): AssignmentDraft => ({
    subjectName: "",
    weekday: 1,
    classGroup: "",
    lessons: [],
    hours: "",
    fullDay: false,
});

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

export default function AddEmployeeModal({ subjectOptions }: { subjectOptions: SubjectOption[] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [showCatalogManager, setShowCatalogManager] = useState(false);
    const [type, setType] = useState("PJ");
    const [isAulista, setIsAulista] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("PIX");
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
    const [assignments, setAssignments] = useState<AssignmentDraft[]>([emptyAssignment()]);
    const [formError, setFormError] = useState<string | null>(null);
    const contractMode = type === "CLT" ? (isAulista ? "CLT_AULISTA" : "CLT_MENSALISTA") : type;

    async function handleSubmit(formData: FormData) {
        setFormError(null);
        formData.set("teachingAssignments", JSON.stringify(assignments));
        if (isAulista) {
            formData.set("baseSalary", "0");
        }
        formData.delete("subjects");
        selectedSubjects.forEach((sub) => formData.append("subjects", sub));
        const result = await addEmployee(formData);
        if (!result.ok) {
            setFormError(result.error);
            return;
        }
        setIsOpen(false);
        setSelectedSubjects([]);
        setAssignments([emptyAssignment()]);
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

    function handleContractModeChange(value: string) {
        if (value === "CLT_AULISTA") {
            setType("CLT");
            setIsAulista(true);
            return;
        }
        if (value === "CLT_MENSALISTA") {
            setType("CLT");
            setIsAulista(false);
            return;
        }
        setType(value);
        setIsAulista(false);
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 bg-wine-800 text-white px-4 py-2 rounded-xl font-medium shadow-md hover:bg-wine-900 transition-colors"
            >
                <Plus className="w-5 h-5" />
                Novo Colaborador
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-wine-950/40 backdrop-blur-md z-[999] flex items-center justify-center p-4 animate-in fade-in duration-300">
                    <div className="bg-[#FCFBFA] rounded-[24px] shadow-premium-hover w-full max-w-5xl max-h-[95vh] flex flex-col overflow-hidden border border-wine-100/50 animate-in zoom-in-95 duration-300">
                        <div className="bg-gradient-to-r from-wine-950 to-wine-900 text-white px-6 py-4 flex items-center justify-between border-b border-wine-800/50 shrink-0">
                            <h2 className="text-sm font-bold tracking-widest uppercase text-wine-100">Cadastrar colaborador</h2>
                            <button type="button" onClick={() => setIsOpen(false)} className="text-wine-300 hover:text-white transition-colors p-1 hover:bg-wine-800/50 rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form action={handleSubmit} className="p-6 space-y-6 overflow-y-auto pb-36">
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
                                        <input required name="name" type="text" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-wine-900 mb-1">CPF</label>
                                        <input required name="cpf" type="text" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-wine-900 mb-1">Cargo</label>
                                        <input required name="role" type="text" placeholder="Ex: Professor" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-wine-900 mb-1">Foto de perfil</label>
                                        <input name="profilePhoto" type="file" accept="image/*" className="w-full text-sm text-wine-800 file:mr-3 file:rounded-lg file:border-0 file:bg-wine-100 file:px-3 file:py-2 file:text-wine-900" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-wine-900 mb-1">Inicio no colegio</label>
                                        <input name="startDate" type="date" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
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
                                    <div>
                                        <label className="block text-sm font-medium text-wine-900 mb-1">{isAulista ? "Valor hora (R$)" : "Salario base (R$)"}</label>
                                        <input required name={isAulista ? "hourlyRate" : "baseSalary"} type="number" step="0.01" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                    </div>
                                    <label className="md:col-span-4 flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-sm font-medium text-emerald-900">
                                        <input name="eatsAtSchool" type="checkbox" className="h-4 w-4 rounded border-emerald-300" />
                                        Almoca no colegio
                                    </label>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xs font-bold text-wine-500 uppercase tracking-widest mb-3">Pagamento e beneficios</h3>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-wine-900 mb-1">VT diario (R$)</label>
                                        <input name="transportDaily" type="number" step="0.01" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                    </div>
                                    {(type === "PJ" || type === "VOLUNTARIO") && (
                                        <div>
                                            <label className="block text-sm font-medium text-wine-900 mb-1">Ajuda gasolina mensal (R$)</label>
                                            <input name="gasAssistance" type="number" step="0.01" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                        </div>
                                    )}
                                    {type === "CLT" && (
                                        <>
                                            <div>
                                                <label className="block text-sm font-medium text-wine-900 mb-1">Cesta basica (R$)</label>
                                                <input name="cestaBasica" type="number" step="0.01" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                            </div>
                                        </>
                                    )}
                                    <div>
                                        <label className="block text-sm font-medium text-wine-900 mb-1">Adiantamento dia 20 (R$)</label>
                                        <input name="salaryAdvance" type="number" step="0.01" min="0" defaultValue="0" className="w-full border border-amber-200 rounded-lg px-3 py-2 bg-amber-50/40 text-amber-900 font-bold focus:outline-none focus:ring-2 focus:ring-amber-400" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-wine-900 mb-1">Metodo</label>
                                        <select name="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500">
                                            <option value="PIX">PIX</option>
                                            <option value="TRANSFER">Transferencia</option>
                                        </select>
                                    </div>
                                    {paymentMethod === "PIX" ? (
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-wine-900 mb-1">Chave PIX</label>
                                            <input name="pixKey" type="text" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                        </div>
                                    ) : (
                                        <>
                                            <input name="bankName" placeholder="Banco" className="border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950" />
                                            <input name="accountType" placeholder="Tipo de conta" className="border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950" />
                                            <input name="agency" placeholder="Agencia" className="border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950" />
                                            <input name="accountNumber" placeholder="Conta" className="border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950" />
                                        </>
                                    )}
                                    <input name="recurringDeductions" type="number" step="0.01" defaultValue="0" placeholder="Descontos fixos" className="border border-wine-200 rounded-lg px-3 py-2 bg-rose-50/30 text-rose-700" />
                                    <input name="temporaryDeductions" type="number" step="0.01" defaultValue="0" placeholder="Desc. temporario" className="border border-wine-200 rounded-lg px-3 py-2 bg-orange-50/30 text-orange-700" />
                                    <input name="temporaryDeductionsDesc" type="text" placeholder="Motivo desc. temp." className="border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950" />
                                    <input name="temporaryDeductionsExpiration" type="month" className="border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950" />
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
                                        <div key={index} className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1.2fr_auto_1fr_0.7fr_auto] gap-3 items-center rounded-xl border border-wine-100 bg-white p-3">
                                            <select value={assignment.subjectName} onChange={(e) => updateAssignment(index, { subjectName: e.target.value })} className="border border-wine-200 rounded-lg px-3 py-2 text-wine-950">
                                                <option value="">Materia atual</option>
                                                {subjectOptions.map((subject) => <option key={subject.id} value={subject.name}>{subject.name}</option>)}
                                            </select>
                                            <select value={assignment.classGroup} onChange={(e) => updateAssignment(index, { classGroup: e.target.value, lessons: e.target.value === "Infantil" ? [] : assignment.lessons, fullDay: e.target.value === "Infantil" ? true : assignment.fullDay })} className="border border-wine-200 rounded-lg px-3 py-2 text-wine-950">
                                                <option value="">Serie/turma</option>
                                                {CLASS_GROUP_OPTIONS.map((group) => <option key={group} value={group}>{group}</option>)}
                                            </select>
                                            <select value={assignment.weekday} onChange={(e) => updateAssignment(index, { weekday: Number(e.target.value) })} className="border border-wine-200 rounded-lg px-3 py-2 text-wine-950">
                                                {WEEKDAYS.map((day) => <option key={day.value} value={day.value}>{day.label}</option>)}
                                            </select>
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
                                            <input value={assignment.hours} onChange={(e) => updateAssignment(index, { hours: e.target.value })} type="number" step="0.01" placeholder="Horas" className="border border-wine-200 rounded-lg px-3 py-2 text-wine-950" />
                                            <button type="button" onClick={() => setAssignments((current) => current.filter((_, itemIndex) => itemIndex !== index))} className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg">
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

                            <div className="flex justify-end gap-3 pt-6 border-t border-wine-100 mt-6">
                                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-wine-800 font-medium hover:bg-wine-100 rounded-lg transition-colors">Cancelar</button>
                                <button type="submit" className="px-4 py-2 bg-wine-800 text-white font-medium hover:bg-wine-900 rounded-lg shadow-md transition-colors">Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
