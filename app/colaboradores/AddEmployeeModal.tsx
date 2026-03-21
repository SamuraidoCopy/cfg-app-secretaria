"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { addEmployee } from "./actions";

export default function AddEmployeeModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState("PJ");
    const [isAulista, setIsAulista] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("PIX");

    async function handleSubmit(formData: FormData) {
        await addEmployee(formData);
        setIsOpen(false);
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
                    <div className="bg-[#FCFBFA] rounded-[24px] shadow-premium-hover w-full max-w-lg max-h-[95vh] flex flex-col overflow-hidden border border-wine-100/50 animate-in zoom-in-95 duration-300">
                        <div className="bg-gradient-to-r from-wine-950 to-wine-900 text-white px-6 py-4 flex items-center justify-between border-b border-wine-800/50 shrink-0">
                            <h2 className="text-sm font-bold tracking-widest uppercase text-wine-100">CADASTRAR COLABORADOR</h2>
                            <button type="button" onClick={() => setIsOpen(false)} className="text-wine-300 hover:text-white transition-colors p-1 hover:bg-wine-800/50 rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form action={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Nome Completo</label>
                                    <input required name="name" type="text" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">CPF</label>
                                    <input required name="cpf" type="text" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Cargo</label>
                                    <input required name="role" type="text" placeholder="Ex: Professor" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Tipo de Contrato</label>
                                    <select
                                        name="type"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500"
                                    >
                                        <option value="PJ">PJ (Pessoa Jurídica)</option>
                                        <option value="CLT">CLT</option>
                                        <option value="VOLUNTARIO">VOLUNTÁRIO</option>
                                    </select>
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Salário Base (R$)</label>
                                    <input required name="baseSalary" type="number" step="0.01" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>

                                {(type === "PJ" || type === "VOLUNTARIO" || type === "CLT") && (
                                    <div className="col-span-1">
                                        <label className="block text-sm font-medium text-wine-900 mb-1">VT Diário (R$)</label>
                                        <input name="transportDaily" type="number" step="0.01" placeholder="Ex: 15.50" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                    </div>
                                )}

                                {(type === "PJ" || type === "VOLUNTARIO") && (
                                    <div className="col-span-1">
                                        <label className="block text-sm font-medium text-wine-900 mb-1">Ajuda Gasolina Mensal (R$)</label>
                                        <input name="gasAssistance" type="number" step="0.01" placeholder="Fixo no mês" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                    </div>
                                )}

                                {type === "CLT" && (
                                    <>
                                        <div className="col-span-1">
                                            <label className="block text-sm font-medium text-wine-900 mb-1">Cesta Básica (R$)</label>
                                            <input name="cestaBasica" type="number" step="0.01" placeholder="Fixo no mês" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                        </div>

                                        <div className="col-span-2 mt-2 pt-2 border-t border-wine-100/30">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="col-span-1">
                                                    <label className="block text-sm font-medium text-wine-900 mb-1">Regime CLT</label>
                                                    <select
                                                        name="isAulista"
                                                        value={isAulista.toString()}
                                                        onChange={(e) => setIsAulista(e.target.value === "true")}
                                                        className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500"
                                                    >
                                                        <option value="false">Mensalista</option>
                                                        <option value="true">Professor Aulista</option>
                                                    </select>
                                                </div>

                                                {isAulista && (
                                                    <div className="col-span-1">
                                                        <label className="block text-sm font-medium text-wine-900 mb-1">Valor da Hora (R$)</label>
                                                        <input required name="hourlyRate" type="number" step="0.01" placeholder="Ex: 35.00" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}

                                <div className="col-span-2 mt-4 pt-4 border-t border-wine-100/50">
                                    <h3 className="text-sm font-bold text-wine-950 mb-4 uppercase tracking-wider">Dados de Pagamento</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-2">
                                            <label className="block text-sm font-medium text-wine-900 mb-1">Método de Recebimento</label>
                                            <select
                                                name="paymentMethod"
                                                value={paymentMethod}
                                                onChange={(e) => setPaymentMethod(e.target.value)}
                                                className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500"
                                            >
                                                <option value="PIX">PIX</option>
                                                <option value="TRANSFER">Transferência Bancária / Depósito</option>
                                            </select>
                                        </div>

                                        {paymentMethod === "PIX" ? (
                                            <div className="col-span-2">
                                                <label className="block text-sm font-medium text-wine-900 mb-1">Chave PIX</label>
                                                <input name="pixKey" type="text" placeholder="CPF, E-mail, Telefone ou Aleatória" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                            </div>
                                        ) : (
                                            <>
                                                <div className="col-span-1">
                                                    <label className="block text-sm font-medium text-wine-900 mb-1">Banco</label>
                                                    <input required name="bankName" type="text" placeholder="Ex: Nubank, Banco do Brasil" autoComplete="off" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                                </div>
                                                <div className="col-span-1">
                                                    <label className="block text-sm font-medium text-wine-900 mb-1">Tipo de Conta</label>
                                                    <select name="accountType" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500">
                                                        <option value="Corrente">Conta Corrente</option>
                                                        <option value="Poupança">Conta Poupança</option>
                                                        <option value="Salário">Conta Salário</option>
                                                    </select>
                                                </div>
                                                <div className="col-span-1">
                                                    <label className="block text-sm font-medium text-wine-900 mb-1">Agência</label>
                                                    <input required name="agency" type="text" placeholder="Ex: 0001" autoComplete="off" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                                </div>
                                                <div className="col-span-1">
                                                    <label className="block text-sm font-medium text-wine-900 mb-1">Número da Conta</label>
                                                    <input required name="accountNumber" type="text" placeholder="Ex: 123456-7" autoComplete="off" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="col-span-2 mt-4 pt-4 border-t border-wine-100/50">
                                    <h3 className="text-sm font-bold text-wine-950 mb-4 uppercase tracking-wider">Descontos Fixos e Temporários</h3>
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Descontos Fixos (R$)</label>
                                    <input name="recurringDeductions" type="number" step="0.01" defaultValue="0" placeholder="Ex: Plano Saúde" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500 text-rose-600 bg-rose-50/30" />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Desc. Temporário (R$)</label>
                                    <input name="temporaryDeductions" type="number" step="0.01" defaultValue="0" placeholder="Ex: Adiantamento" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500 text-orange-600 bg-orange-50/30" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Motivo (Desc. Temp)</label>
                                    <input name="temporaryDeductionsDesc" type="text" placeholder="Ex: Parcela 1/3" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Expiração (Opcional)</label>
                                    <input name="temporaryDeductionsExpiration" type="month" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-6 border-t border-wine-100 mt-6">
                                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-wine-800 font-medium hover:bg-wine-100 rounded-lg transition-colors">
                                    Cancelar
                                </button>
                                <button type="submit" className="px-4 py-2 bg-wine-800 text-white font-medium hover:bg-wine-900 rounded-lg shadow-md transition-colors">
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
