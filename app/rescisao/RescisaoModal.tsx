"use client";

import { useState, useTransition } from "react";
import { X, Calculator, FileDown, Loader2, CheckCircle2, AlertTriangle, UserX } from "lucide-react";
import { calcularERescisao, salvarRescisao, type RescisaoInput, type RescisaoResult } from "./actions";

const TIPO_RESCISAO = [
    { value: "SEM_JUSTA_CAUSA", label: "Sem Justa Causa (Demissão pela Empresa)", color: "text-rose-700" },
    { value: "COM_JUSTA_CAUSA", label: "Com Justa Causa", color: "text-red-900" },
    { value: "PEDIDO_DEMISSAO", label: "Pedido de Demissão", color: "text-amber-700" },
    { value: "ACORDO_COMUM", label: "Acordo Comum (Art. 484-A CLT)", color: "text-blue-700" },
];

const AVISO_PREVIO = [
    { value: "TRABALHADO", label: "Aviso Prévio Trabalhado" },
    { value: "INDENIZADO", label: "Aviso Prévio Indenizado (pago pela empresa)" },
    { value: "DISPENSADO", label: "Aviso Prévio Dispensado" },
];

const BRL = (v: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);
const monthNames = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

interface Props {
    employee: { id: string; name: string; baseSalary: number; cpf: string };
    onClose: () => void;
}

export default function RescisaoModal({ employee, onClose }: Props) {
    const today = new Date().toISOString().split("T")[0];
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    const [form, setForm] = useState({
        tipoRescisao: "SEM_JUSTA_CAUSA" as RescisaoInput["tipoRescisao"],
        dataAdmissao: "",
        dataDemissao: today,
        avisoPrevio: "TRABALHADO" as RescisaoInput["avisoPrevio"],
        diasTrabalhados: 30,
        feriasVencidas: false,
    });
    const [result, setResult] = useState<RescisaoResult | null>(null);
    const [saved, setSaved] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [isSaving, startSaving] = useTransition();

    function set(field: string, value: any) {
        setForm(prev => ({ ...prev, [field]: value }));
        setResult(null);
        setSaved(false);
    }

    function handleCalc() {
        if (!form.dataAdmissao) return alert("Informe a data de admissão.");
        
        const admissao = new Date(form.dataAdmissao);
        const demissao = new Date(form.dataDemissao);

        if (admissao > demissao) {
            alert("A data de admissão não pode ser posterior à data de demissão.");
            return;
        }

        startTransition(async () => {
            const res = await calcularERescisao({
                employeeId: employee.id,
                tipoRescisao: form.tipoRescisao,
                dataAdmissao: form.dataAdmissao,
                dataDemissao: form.dataDemissao,
                avisoPrevio: form.avisoPrevio,
                diasTrabalhados: form.diasTrabalhados,
                feriasVencidas: form.feriasVencidas,
                month: currentMonth,
                year: currentYear,
            });
            setResult(res);
        });
    }

    function handleSave() {
        if (!result) return;
        startSaving(async () => {
            await salvarRescisao({
                employeeId: employee.id,
                tipoRescisao: form.tipoRescisao,
                dataAdmissao: form.dataAdmissao,
                dataDemissao: form.dataDemissao,
                avisoPrevio: form.avisoPrevio,
                diasTrabalhados: form.diasTrabalhados,
                feriasVencidas: form.feriasVencidas,
                month: currentMonth,
                year: currentYear,
            }, result);
            setSaved(true);
        });
    }

    async function handlePDF() {
        if (!result) return;
        const res = await fetch("/api/generate-rescisao-pdf", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                employee,
                form,
                result,
                month: currentMonth,
                year: currentYear,
            }),
        });
        if (!res.ok) return alert("Erro ao gerar PDF.");
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `rescisao-${employee.name.replace(/\s+/g, "-").toLowerCase()}-${currentMonth}-${currentYear}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
    }

    const verbas = result ? [
        { label: "Saldo de Salário", value: result.saldoSalario, always: true },
        { label: "13º Proporcional", value: result.decimoTerceiroProp, always: false },
        { label: "13º s/ Aviso Indenizado", value: result.decimoTerceiroInd, always: false },
        { label: "Férias Proporcionais", value: result.feriasProp, always: true },
        { label: "Férias s/ Aviso Indenizado", value: result.feriasInd, always: false },
        { label: "1/3 sobre Férias Prop.", value: result.tercoFeriasProp, always: true },
        { label: "1/3 sobre Férias Inden.", value: result.tercoFeriasInd, always: false },
        { label: "Férias Vencidas (+ 1/3)", value: result.feriasVencidas, always: false },
        { label: "Aviso Prévio Indenizado", value: result.avisoPrevioIndeniz, always: false },
        { label: "FGTS Rescisório (Saldo)", value: result.fgtsRescisorio, always: false, info: true },
        { label: "Multa FGTS (40%)", value: result.multaFgts, always: false, info: true },
    ] : [];

    const descontos = result ? [
        { label: "INSS Rescisão", value: result.inss },
        { label: "INSS 13º Rescisão", value: result.inss13 },
        { label: "IRRF", value: result.irrf },
    ] : [];

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div
                className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-wine-950 to-wine-800 rounded-t-3xl p-6 flex items-start justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <UserX className="w-5 h-5 text-rose-300" />
                            <span className="text-rose-300 text-xs font-bold uppercase tracking-widest">Rescisão CLT</span>
                        </div>
                        <h2 className="text-xl font-bold text-white">{employee.name}</h2>
                        <p className="text-wine-300 text-sm mt-0.5">CPF: {employee.cpf} · Salário: {BRL(employee.baseSalary)}</p>
                        <p className="text-wine-400 text-xs mt-1">{monthNames[currentMonth]} {currentYear}</p>
                    </div>
                    <button onClick={onClose} className="text-wine-300 hover:text-white p-1 rounded-lg hover:bg-wine-700/40 transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    {/* Tipo de Rescisão */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-wine-700 mb-2">Tipo de Rescisão</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {TIPO_RESCISAO.map(t => (
                                <button
                                    key={t.value}
                                    type="button"
                                    onClick={() => set("tipoRescisao", t.value)}
                                    className={`text-left px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${form.tipoRescisao === t.value
                                        ? "border-wine-700 bg-wine-50 text-wine-900"
                                        : "border-wine-100 hover:border-wine-300 text-wine-500"
                                        }`}
                                >
                                    {t.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Datas */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-wine-700 mb-1.5">Data de Admissão</label>
                            <input
                                type="date"
                                value={form.dataAdmissao}
                                onChange={e => set("dataAdmissao", e.target.value)}
                                className="w-full border border-wine-200 rounded-xl px-3 py-2.5 text-sm text-wine-900 focus:outline-none focus:ring-2 focus:ring-wine-400"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-wine-700 mb-1.5">Data de Demissão</label>
                            <input
                                type="date"
                                value={form.dataDemissao}
                                onChange={e => set("dataDemissao", e.target.value)}
                                className="w-full border border-wine-200 rounded-xl px-3 py-2.5 text-sm text-wine-900 focus:outline-none focus:ring-2 focus:ring-wine-400"
                            />
                        </div>
                    </div>

                    {/* Aviso Prévio e Dias trabalhados */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-wine-700 mb-1.5">Aviso Prévio</label>
                            <select
                                value={form.avisoPrevio}
                                onChange={e => set("avisoPrevio", e.target.value)}
                                className="w-full border border-wine-200 rounded-xl px-3 py-2.5 text-sm text-wine-900 focus:outline-none focus:ring-2 focus:ring-wine-400 bg-white"
                            >
                                {AVISO_PREVIO.map(a => <option key={a.value} value={a.value}>{a.label}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-wine-700 mb-1.5">Dias Trabalhados no Mês</label>
                            <input
                                type="number"
                                min={1} max={31}
                                value={form.diasTrabalhados}
                                onChange={e => set("diasTrabalhados", parseInt(e.target.value) || 0)}
                                className="w-full border border-wine-200 rounded-xl px-3 py-2.5 text-sm text-wine-900 focus:outline-none focus:ring-2 focus:ring-wine-400"
                            />
                        </div>
                    </div>

                    {/* Férias Vencidas */}
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${form.feriasVencidas ? "bg-wine-700 border-wine-700" : "border-wine-300 group-hover:border-wine-500"}`}
                            onClick={() => set("feriasVencidas", !form.feriasVencidas)}>
                            {form.feriasVencidas && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                        </div>
                        <span className="text-sm font-semibold text-wine-800">Possui férias vencidas (período anterior não gozado)</span>
                    </label>

                    {/* Botão Calcular */}
                    <button
                        onClick={handleCalc}
                        disabled={isPending}
                        className="w-full flex items-center justify-center gap-2 bg-wine-900 hover:bg-wine-800 text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Calculator className="w-5 h-5" />}
                        {isPending ? "Calculando..." : "Calcular Verbas Rescisórias"}
                    </button>

                    {/* Resultado */}
                    {result && (
                        <div className="bg-wine-50 rounded-2xl border border-wine-100 overflow-hidden">
                            {/* Tempo de serviço */}
                            <div className="px-5 py-3 border-b border-wine-100 flex items-center justify-between">
                                <span className="text-xs font-bold uppercase tracking-widest text-wine-500">Tempo de Serviço</span>
                                <span className="text-sm font-bold text-wine-900">{result.anosServico}a {result.mesesServico % 12}m</span>
                            </div>

                            {/* Verbas */}
                            <div className="px-5 py-4 space-y-2">
                                <p className="text-xs font-bold uppercase tracking-widest text-wine-500 mb-3">Proventos</p>
                                {verbas.map(v => v.value > 0 && (
                                    <div key={v.label} className="flex items-center justify-between">
                                        <span className="text-sm text-wine-700">{v.label}</span>
                                        <span className="text-sm font-bold text-wine-950">{BRL(v.value)}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Descontos */}
                            {(result.inss > 0 || result.inss13 > 0 || result.irrf > 0) && (
                                <div className="px-5 py-4 border-t border-wine-100 space-y-2">
                                    <p className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-3">Descontos</p>
                                    {descontos.map(d => d.value > 0 && (
                                        <div key={d.label} className="flex items-center justify-between">
                                            <span className="text-sm text-rose-700">{d.label}</span>
                                            <span className="text-sm font-bold text-rose-700">- {BRL(d.value)}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Totais */}
                            <div className="bg-wine-900 px-5 py-4 rounded-b-2xl">
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-xs text-wine-300 font-semibold">Total Bruto</span>
                                    <span className="text-sm text-wine-200 font-bold">{BRL(result.totalBruto)}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-white font-bold uppercase tracking-wide">Total Líquido a Pagar</span>
                                    <span className="text-lg text-emerald-400 font-black">{BRL(result.totalLiquido)}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Aviso salvaremos o colaborador como inativo */}
                    {result && !saved && (
                        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                            <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-amber-800 font-medium">
                                Ao salvar, o colaborador será marcado como <strong>inativo</strong> no sistema e removido da folha de pagamento.
                            </p>
                        </div>
                    )}

                    {/* Ações finais */}
                    {result && (
                        <div className="flex gap-3">
                            {!saved ? (
                                <button
                                    onClick={handleSave}
                                    disabled={isSaving}
                                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-50"
                                >
                                    {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                                    {isSaving ? "Salvando..." : "Salvar Rescisão"}
                                </button>
                            ) : (
                                <div className="flex-1 flex items-center justify-center gap-2 bg-emerald-100 text-emerald-800 font-bold py-3 rounded-xl">
                                    <CheckCircle2 className="w-4 h-4" />
                                    Rescisão salva com sucesso!
                                </div>
                            )}
                            <button
                                onClick={handlePDF}
                                className="flex items-center gap-2 px-5 py-3 border-2 border-wine-200 hover:border-wine-400 hover:bg-wine-50 text-wine-700 font-bold rounded-xl transition-colors"
                            >
                                <FileDown className="w-4 h-4" />
                                PDF
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
