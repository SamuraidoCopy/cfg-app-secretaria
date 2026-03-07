"use client"

import { useState } from "react"
import { createUser, deleteUser } from "./actions"
import { PlusCircle, Trash2, Mail, Lock, User as UserIcon, Shield } from "lucide-react"

type UserProps = {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: Date;
}

export default function AdminUsuariosClient({ users }: { users: UserProps[] }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleCreateUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError("")
        setLoading(true)

        const formData = new FormData(e.currentTarget)
        const res = await createUser(formData)

        setLoading(false)
        if (res?.error) {
            setError(res.error)
        } else {
            setIsModalOpen(false)
        }
    }

    async function handleDelete(id: string) {
        if (!confirm("Tem certeza que deseja deletar este usuário?")) return
        const res = await deleteUser(id)
        if (res?.error) alert(res.error)
    }

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-display font-black tracking-tight text-wine-950 flex items-center gap-2">
                        <Shield className="w-8 h-8 text-wine-500" />
                        Controle de Acessos
                    </h1>
                    <p className="text-wine-600/80 font-medium">Gerencie quem tem acesso ao sistema (Admin e Secretária)</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-to-r from-wine-800 to-wine-950 hover:from-wine-700 hover:to-wine-900 text-white px-6 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-wine-950/20 hover:-translate-y-0.5 transition-all"
                >
                    <PlusCircle className="w-5 h-5" />
                    Novo Usuário
                </button>
            </div>

            <div className="bg-white rounded-3xl shadow-premium border border-wine-100/50 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-cream-50/50 text-wine-900 text-sm font-semibold uppercase tracking-wider">
                                <th className="p-5 font-display border-b border-wine-100">Nome</th>
                                <th className="p-5 font-display border-b border-wine-100">Email</th>
                                <th className="p-5 font-display border-b border-wine-100">Perfil</th>
                                <th className="p-5 font-display border-b border-wine-100">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-wine-50">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-cream-50/30 transition-colors">
                                    <td className="p-5 text-wine-950 font-medium flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-wine-100 text-wine-800 flex items-center justify-center font-bold text-xs">
                                            {user.name.charAt(0).toUpperCase()}
                                        </div>
                                        {user.name}
                                    </td>
                                    <td className="p-5 text-wine-600 font-medium">{user.email}</td>
                                    <td className="p-5">
                                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${user.role === 'ADMIN' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                                            }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="p-5">
                                        <button
                                            onClick={() => handleDelete(user.id)}
                                            className="text-wine-400 hover:text-rose-500 transition-colors p-2 rounded-lg hover:bg-rose-50"
                                            title="Excluir Usuário"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            {users.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="p-10 text-center text-wine-400 font-medium">
                                        Nenhum usuário encontrado.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal - Create User */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-wine-950/60 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-[24px] shadow-premium max-w-md w-full p-8 border border-white/20 animate-in fade-in zoom-in duration-200 relative overflow-hidden">
                        <h2 className="text-2xl font-display font-black text-wine-950 mb-6">Cadastrar Usuário</h2>

                        {error && (
                            <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-sm font-medium">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleCreateUser} className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-wine-900 ml-1">Nome Completo</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-wine-400">
                                        <UserIcon className="h-5 w-5" />
                                    </div>
                                    <input name="name" type="text" required className="w-full pl-11 pr-4 py-3 bg-cream-50 border border-wine-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-wine-500/30 text-wine-950 placeholder:text-wine-300" placeholder="Ex: Maria" />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-wine-900 ml-1">Email de Acesso</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-wine-400">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <input name="email" type="email" required className="w-full pl-11 pr-4 py-3 bg-cream-50 border border-wine-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-wine-500/30 text-wine-950 placeholder:text-wine-300" placeholder="nome@freigalvao.com.br" />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-wine-900 ml-1">Senha (Temporária)</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-wine-400">
                                        <Lock className="h-5 w-5" />
                                    </div>
                                    <input name="password" type="text" required className="w-full pl-11 pr-4 py-3 bg-cream-50 border border-wine-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-wine-500/30 text-wine-950 placeholder:text-wine-300" placeholder="Mínimo 6 caracteres" />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-wine-900 ml-1">Permissão do Sistema</label>
                                <select name="role" className="w-full px-4 py-3 bg-cream-50 border border-wine-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-wine-500/30 text-wine-950 appearance-none font-medium">
                                    <option value="USER">Secretária / USER (Padrão)</option>
                                    <option value="ADMIN">ADMIN / Geral (Acesso Total)</option>
                                </select>
                            </div>

                            <div className="flex gap-3 justify-end pt-4">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 text-wine-600 font-bold hover:bg-wine-50 rounded-xl transition-colors">
                                    Cancelar
                                </button>
                                <button type="submit" disabled={loading} className="bg-wine-600 hover:bg-wine-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-wine-200 transition-all disabled:opacity-50">
                                    {loading ? "Salvando..." : "Salvar Usuário"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
