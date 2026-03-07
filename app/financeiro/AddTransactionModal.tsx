"use client";

import { useState } from "react";
import { Plus, X, ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { addTransaction } from "./actions";

export default function AddTransactionModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState("INCOME");

    async function handleSubmit(formData: FormData) {
        await addTransaction(formData);
        setIsOpen(false);
    }

    const today = new Date().toISOString().split('T')[0];

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 bg-wine-800 text-white px-4 py-2 rounded-xl font-medium shadow-md hover:bg-wine-900 transition-colors"
            >
                <Plus className="w-5 h-5" />
                Novo Lançamento
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-cream-50 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-wine-200">
                        <div className={`text-white px-6 py-4 flex items-center justify-between ${type === "INCOME" ? "bg-green-700" : "bg-red-700"}`}>
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                {type === "INCOME" ? <ArrowUpCircle className="w-5 h-5" /> : <ArrowDownCircle className="w-5 h-5" />}
                                NOVO LANÇAMENTO
                            </h2>
                            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form action={handleSubmit} className="p-6 space-y-4">
                            <div className="flex gap-4 mb-6">
                                <label className={`flex-1 flex flex-col items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-colors ${type === "INCOME" ? "border-green-600 bg-green-50 text-green-800 font-bold" : "border-gray-200 bg-white text-gray-500 hover:bg-gray-50"}`}>
                                    <input type="radio" name="type" value="INCOME" className="sr-only" checked={type === "INCOME"} onChange={() => setType("INCOME")} />
                                    ENTRADA (Receita)
                                </label>
                                <label className={`flex-1 flex flex-col items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-colors ${type === "EXPENSE" ? "border-red-600 bg-red-50 text-red-800 font-bold" : "border-gray-200 bg-white text-gray-500 hover:bg-gray-50"}`}>
                                    <input type="radio" name="type" value="EXPENSE" className="sr-only" checked={type === "EXPENSE"} onChange={() => setType("EXPENSE")} />
                                    SAÍDA (Despesa)
                                </label>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Título</label>
                                    <input required name="title" type="text" placeholder="Ex: Mensalidades Turma A" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Valor (R$)</label>
                                    <input required name="amount" type="number" step="0.01" min="0.01" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white font-bold text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Data</label>
                                    <input required name="date" type="date" defaultValue={today} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>

                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Categoria</label>
                                    <select name="category" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500">
                                        <option value="MENSALIDADES">Mensalidades</option>
                                        <option value="MATERIAL">Material Didático</option>
                                        <option value="ESTRUTURA">Obras e Manutenção</option>
                                        <option value="IMPOSTOS">Impostos e Taxas</option>
                                        <option value="ADMINISTRATIVO">Despesas Administrativas</option>
                                        <option value="EVENTOS">Eventos / Extras</option>
                                        <option value="OUTROS">Outros</option>
                                    </select>
                                </div>

                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Descrição Opcional</label>
                                    <textarea name="description" rows={2} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500"></textarea>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-6 border-t border-wine-100 mt-6">
                                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-wine-800 font-medium hover:bg-wine-100 rounded-lg transition-colors">
                                    Cancelar
                                </button>
                                <button type="submit" className={`px-4 py-2 text-white font-medium rounded-lg shadow-md transition-colors ${type === "INCOME" ? 'bg-green-700 hover:bg-green-800' : 'bg-red-700 hover:bg-red-800'}`}>
                                    Salvar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
