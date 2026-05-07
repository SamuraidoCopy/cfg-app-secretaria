"use client";

import { useState } from "react";
import { Users, UserX, Search, Briefcase } from "lucide-react";
import RescisaoModal from "./RescisaoModal";

interface Employee {
    id: string;
    name: string;
    cpf: string;
    role: string;
    baseSalary: number;
}

const BRL = (v: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

export default function RescisaoPageClient({ employees }: { employees: Employee[] }) {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState<Employee | null>(null);

    const filtered = employees.filter(e =>
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.cpf.includes(search) ||
        e.role.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-full h-full pb-10">
            <header className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-wine-950">Rescisão de Contratos CLT</h1>
                    <p className="text-wine-800/70 mt-1">Calcule e registre as verbas rescisórias dos colaboradores CLT</p>
                </div>
                <div className="flex items-center gap-2 bg-wine-100/60 border border-wine-200/50 rounded-xl px-3 py-2 text-wine-700 text-sm font-semibold">
                    <Users className="w-4 h-4" />
                    {employees.length} CLT{employees.length !== 1 ? "s" : ""} ativo{employees.length !== 1 ? "s" : ""}
                </div>
            </header>

            {/* Busca */}
            <div className="relative mb-5">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-wine-400 pointer-events-none" />
                <input
                    type="text"
                    placeholder="Buscar colaborador por nome, CPF ou cargo..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-wine-200 rounded-2xl text-sm text-wine-900 placeholder-wine-400 focus:outline-none focus:ring-2 focus:ring-wine-400 shadow-sm"
                />
            </div>

            {/* Info Card */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 mb-6 flex items-start gap-3">
                <UserX className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                    <p className="text-sm font-bold text-amber-900">Como funciona</p>
                    <p className="text-xs text-amber-700 mt-0.5">
                        Clique em <strong>"Calcular Rescisão"</strong> para um colaborador. O sistema calculará todas as verbas rescisórias (saldo de salário, 13º, férias, FGTS, multa 40%, INSS e IRRF). Ao salvar, o registro será vinculado ao mês corrente e o colaborador será marcado como <strong>inativo</strong>.
                    </p>
                </div>
            </div>

            {/* Lista de CLTs */}
            <div className="bg-white rounded-[24px] shadow-premium border border-wine-100/50 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-wine-50/50 border-b border-wine-100/50 text-wine-900 text-xs uppercase tracking-wider">
                                <th className="px-6 py-4 font-semibold">Nome &amp; Cargo</th>
                                <th className="px-6 py-4 font-semibold hidden sm:table-cell">CPF</th>
                                <th className="px-6 py-4 font-semibold hidden md:table-cell">Salário Base</th>
                                <th className="px-6 py-4 font-semibold text-right">Ação</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-wine-100">
                            {filtered.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-16 text-center text-wine-500">
                                        <Briefcase className="w-12 h-12 mx-auto text-wine-200 mb-4" />
                                        <p className="font-semibold text-lg text-wine-900">
                                            {search ? "Nenhum colaborador encontrado." : "Nenhum colaborador CLT ativo."}
                                        </p>
                                    </td>
                                </tr>
                            ) : (
                                filtered.map(emp => (
                                    <tr key={emp.id} className="hover:bg-wine-50/80 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-wine-950">{emp.name}</div>
                                            <div className="text-xs text-wine-700 font-medium">{emp.role}</div>
                                        </td>
                                        <td className="px-6 py-4 hidden sm:table-cell text-wine-900 font-mono text-sm">{emp.cpf}</td>
                                        <td className="px-6 py-4 hidden md:table-cell text-wine-950 font-bold font-display tracking-tight">
                                            {BRL(emp.baseSalary)}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => setSelected(emp)}
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
                                            >
                                                <UserX className="w-3.5 h-3.5" />
                                                Calcular Rescisão
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {selected && (
                <RescisaoModal
                    employee={selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </div>
    );
}
