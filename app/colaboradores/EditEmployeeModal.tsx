"use client";

import { useState } from "react";
import { Pen, X } from "lucide-react";
import { updateEmployee } from "./actions";

export default function EditEmployeeModal({ employee }: { employee: any }) {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState(employee.type || "PJ");
    const [paymentMethod, setPaymentMethod] = useState(employee.paymentMethod || "PIX");

    async function handleSubmit(formData: FormData) {
        await updateEmployee(formData);
        setIsOpen(false);
    }

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="p-2 text-wine-400 hover:bg-wine-100 hover:text-wine-800 rounded-lg transition-colors"
                title="Editar"
            >
                <Pen className="w-4 h-4" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-wine-950/40 backdrop-blur-md z-[999] flex items-center justify-center p-4 animate-in fade-in duration-300">
                    <div className="bg-[#FCFBFA] rounded-[24px] shadow-premium-hover w-full max-w-lg max-h-[95vh] flex flex-col overflow-hidden border border-wine-100/50 animate-in zoom-in-95 duration-300 text-left">
                        <div className="bg-gradient-to-r from-wine-950 to-wine-900 text-white px-6 py-4 flex items-center justify-between border-b border-wine-800/50 shrink-0">
                            <h2 className="text-sm font-bold tracking-widest uppercase text-wine-100">EDITAR COLABORADOR</h2>
                            <button type="button" onClick={() => setIsOpen(false)} className="text-wine-300 hover:text-white transition-colors p-1 hover:bg-wine-800/50 rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form action={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
                            <input type="hidden" name="id" value={employee.id} />

                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Nome Completo</label>
                                    <input required name="name" type="text" defaultValue={employee.name} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">CPF</label>
                                    <input required name="cpf" type="text" defaultValue={employee.cpf} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Cargo</label>
                                    <input required name="role" type="text" defaultValue={employee.role} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
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
                                    <input required name="baseSalary" type="number" step="0.01" defaultValue={employee.baseSalary} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>

                                {(type === "PJ" || type === "VOLUNTARIO") && (
                                    <>
                                        <div className="col-span-1">
                                            <label className="block text-sm font-medium text-wine-900 mb-1">VT Diário (R$)</label>
                                            <input name="transportDaily" type="number" step="0.01" defaultValue={employee.transportDaily || ''} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                        </div>
                                        <div className="col-span-1">
                                            <label className="block text-sm font-medium text-wine-900 mb-1">Ajuda Gasolina Mensal (R$)</label>
                                            <input name="gasAssistance" type="number" step="0.01" defaultValue={employee.gasAssistance || ''} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
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
                                                <input name="pixKey" type="text" defaultValue={employee.pixKey || ''} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                            </div>
                                        ) : (
                                            <>
                                                <div className="col-span-1">
                                                    <label className="block text-sm font-medium text-wine-900 mb-1">Banco</label>
                                                    <input required name="bankName" type="text" defaultValue={employee.bankName || ''} autoComplete="off" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                                </div>
                                                <div className="col-span-1">
                                                    <label className="block text-sm font-medium text-wine-900 mb-1">Tipo de Conta</label>
                                                    <select name="accountType" defaultValue={employee.accountType || 'Corrente'} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500">
                                                        <option value="Corrente">Conta Corrente</option>
                                                        <option value="Poupança">Conta Poupança</option>
                                                        <option value="Salário">Conta Salário</option>
                                                    </select>
                                                </div>
                                                <div className="col-span-1">
                                                    <label className="block text-sm font-medium text-wine-900 mb-1">Agência</label>
                                                    <input required name="agency" type="text" defaultValue={employee.agency || ''} autoComplete="off" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                                </div>
                                                <div className="col-span-1">
                                                    <label className="block text-sm font-medium text-wine-900 mb-1">Número da Conta</label>
                                                    <input required name="accountNumber" type="text" defaultValue={employee.accountNumber || ''} autoComplete="off" className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
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
                                    <input name="recurringDeductions" type="number" step="0.01" defaultValue={employee.recurringDeductions || '0'} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500 text-rose-600 bg-rose-50/30" />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Desc. Temporário (R$)</label>
                                    <input name="temporaryDeductions" type="number" step="0.01" defaultValue={employee.temporaryDeductions || '0'} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500 text-orange-600 bg-orange-50/30" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Motivo (Desc. Temp)</label>
                                    <input name="temporaryDeductionsDesc" type="text" defaultValue={employee.temporaryDeductionsDesc || ''} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-wine-900 mb-1">Expiração (Opcional)</label>
                                    <input name="temporaryDeductionsExpiration" type="month" defaultValue={employee.temporaryDeductionsExpiration || ''} className="w-full border border-wine-200 rounded-lg px-3 py-2 bg-white text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500" />
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-6 border-t border-wine-100 mt-6">
                                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-wine-800 font-medium hover:bg-wine-100 rounded-lg transition-colors">
                                    Cancelar
                                </button>
                                <button type="submit" className="px-4 py-2 bg-wine-800 text-white font-medium hover:bg-wine-900 rounded-lg shadow-md transition-colors">
                                    Atualizar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
