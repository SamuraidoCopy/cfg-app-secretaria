"use client";

import { useState } from "react";
import { Plus, X, FileText } from "lucide-react";
import { addContract } from "./actions";

export default function AddContractModal() {
    const [isOpen, setIsOpen] = useState(false);
    const today = new Date().toISOString().split('T')[0];

    async function handleSubmit(formData: FormData) {
        await addContract(formData);
        setIsOpen(false);
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 bg-wine-800 text-white px-4 py-2 rounded-xl font-medium shadow-md hover:bg-wine-900 transition-colors"
            >
                <Plus className="w-5 h-5" />
                Novo Contrato
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-cream-50 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden border border-wine-200">
                        <div className={`bg-wine-950 text-white px-6 py-4 flex items-center justify-between`}>
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                <FileText className="w-5 h-5" />
                                GERAR NOVO CONTRATO
                            </h2>
                            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form action={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Título do Contrato</label>
                                    <input required name="title" type="text" placeholder="Ex: Contrato de Prestação de Serviços Educacionais" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Nome do Cliente/Responsável</label>
                                    <input required name="clientName" type="text" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">CPF/CNPJ</label>
                                    <input required name="document" type="text" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Data Início</label>
                                    <input required name="startDate" type="date" defaultValue={today} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Data Fim (Opcional)</label>
                                    <input name="endDate" type="date" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>

                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Status</label>
                                    <select name="status" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500">
                                        <option value="ACTIVE">Ativo</option>
                                        <option value="DRAFT">Rascunho</option>
                                        <option value="EXPIRED">Expirado</option>
                                    </select>
                                </div>

                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Conteúdo do Contrato (Minuta)</label>
                                    <textarea required name="content" rows={6} placeholder="Cole aqui o texto do contrato que será gerado, ou resumo de termos." className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500 font-mono text-sm"></textarea>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-6 border-t border-wine-100 mt-6">
                                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-wine-800 font-medium hover:bg-wine-100 rounded-lg transition-colors">
                                    Cancelar
                                </button>
                                <button type="submit" className={`px-4 py-2 bg-wine-800 text-white font-medium hover:bg-wine-900 rounded-lg shadow-md transition-colors`}>
                                    Salvar Contrato
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
