"use client"

import { useState } from "react"
import { updateUser } from "./actions"
import { Pencil, Mail, Lock, User as UserIcon, X } from "lucide-react"

type UserProps = {
    id: string;
    name: string;
    email: string;
    role: string;
}

export default function EditUserModal({ user }: { user: UserProps }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleUpdateUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError("")
        setLoading(true)

        const formData = new FormData(e.currentTarget)
        const res = await updateUser(user.id, formData)

        setLoading(false)
        if (res?.error) {
            setError(res.error)
        } else {
            setIsModalOpen(false)
        }
    }

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="text-wine-400 hover:text-wine-600 transition-colors p-2 rounded-lg hover:bg-wine-50"
                title="Editar Usuário"
            >
                <Pencil className="w-5 h-5" />
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-wine-950/60 backdrop-blur-sm p-4 text-left">
                    <div className="bg-white rounded-[24px] shadow-premium max-w-md w-full p-8 border border-white/20 animate-in fade-in zoom-in duration-200 relative overflow-hidden">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-display font-black text-wine-950">Editar Usuário</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-wine-400 hover:bg-wine-50 p-1 rounded-full transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {error && (
                            <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-sm font-medium">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleUpdateUser} className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-wine-900 ml-1">Nome Completo</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-wine-400">
                                        <UserIcon className="h-5 w-5" />
                                    </div>
                                    <input name="name" type="text" required defaultValue={user.name} className="w-full pl-11 pr-4 py-3 bg-cream-50 border border-wine-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-wine-500/30 text-wine-950 placeholder:text-wine-300" />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-wine-900 ml-1">Email de Acesso</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-wine-400">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <input name="email" type="email" required defaultValue={user.email} className="w-full pl-11 pr-4 py-3 bg-cream-50 border border-wine-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-wine-500/30 text-wine-950 placeholder:text-wine-300" />
                                </div>
                            </div>

                            <div className="space-y-1.5 flex flex-col items-start bg-wine-50/50 p-4 rounded-xl border border-wine-100/50">
                                <label className="text-sm font-semibold text-wine-900 ml-1">Nova Senha (Opcional)</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-wine-400">
                                        <Lock className="h-5 w-5" />
                                    </div>
                                    <input name="password" type="text" className="w-full pl-11 pr-4 py-3 bg-white border border-wine-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-wine-500/30 text-wine-950 placeholder:text-wine-300" placeholder="Apenas se quiser alterar" />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-wine-900 ml-1">Permissão do Sistema</label>
                                <select name="role" defaultValue={user.role} className="w-full px-4 py-3 bg-cream-50 border border-wine-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-wine-500/30 text-wine-950 appearance-none font-medium">
                                    <option value="USER">Secretária / USER (Padrão)</option>
                                    <option value="ADMIN">ADMIN / Geral (Acesso Total)</option>
                                </select>
                            </div>

                            <div className="flex gap-3 justify-end pt-4">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 text-wine-600 font-bold hover:bg-wine-50 rounded-xl transition-colors">
                                    Cancelar
                                </button>
                                <button type="submit" disabled={loading} className="bg-wine-600 hover:bg-wine-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-wine-200 transition-all disabled:opacity-50">
                                    {loading ? "Salvando..." : "Salvar Alterações"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
