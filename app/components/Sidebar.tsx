"use client";

import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Users, FileText, Wallet, FileSignature, ShieldAlert, X, BarChart2, FileCheck, ChevronDown, Banknote } from "lucide-react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const { data: session } = useSession();
    const pathname = usePathname();

    const navItems = [
        { label: "Dashboard", href: "/", icon: <LayoutDashboard className="w-5 h-5" /> },
        { label: "Colaboradores", href: "/colaboradores", icon: <Users className="w-5 h-5" /> },
        { 
            label: "Folha de Pagamento", 
            href: "/folha", 
            icon: <FileText className="w-5 h-5" />,
            subItems: [
                { label: "Double-check CLT", href: "/dashboard/payroll/import-check", icon: <FileCheck className="w-4 h-4" /> },
                { label: "Adiantamentos", href: "/dashboard/payroll/advances", icon: <Banknote className="w-4 h-4" /> }
            ]
        },
        { label: "Relatórios", href: "/relatorios", icon: <BarChart2 className="w-5 h-5" /> },
        { label: "Financeiro", href: "/financeiro", icon: <Wallet className="w-5 h-5" /> },
        { label: "Contratos", href: "/contratos", icon: <FileSignature className="w-5 h-5" /> },
    ];

    return (
        <aside className={`fixed inset-y-0 left-0 z-50 w-64 flex-shrink-0 h-[100dvh] overflow-y-auto overflow-x-hidden scrollbar-hide bg-gradient-to-b from-wine-950 to-wine-900 text-cream-50 flex flex-col items-center pt-8 pb-16 md:pb-8 shadow-[8px_0_30px_rgba(0,0,0,0.12)] transition-transform duration-300 md:relative md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            {/* Mobile Close Button */}
            <button
                onClick={onClose}
                className="md:hidden absolute top-4 right-4 p-2 text-wine-300 hover:text-white hover:bg-wine-800/50 rounded-lg transition-colors"
                title="Fechar Menu"
            >
                <X className="w-5 h-5" />
            </button>

            <div className="w-full px-6 mb-12 flex flex-col items-center group cursor-default">
                <div className="w-32 h-auto bg-white rounded-2xl shadow-premium p-3 flex items-center justify-center mb-4 transform group-hover:scale-105 transition-transform duration-500 border border-wine-800/30">
                    <Image
                        src="/logo.jpg"
                        alt="Logo Colégio Frei Galvão"
                        width={120}
                        height={120}
                        className="w-full h-auto object-contain mix-blend-multiply"
                    />
                </div>
                <p className="text-wine-300 text-[10px] mt-1 uppercase tracking-[0.2em] font-bold">Secretaria</p>
            </div>

            <nav className="w-full flex-1 px-4 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || (item.subItems?.some(sub => pathname === sub.href));
                    
                    return (
                        <div key={item.href} className="space-y-1">
                            <Link
                                href={item.href}
                                onClick={onClose}
                                className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all duration-300 group border border-transparent ${
                                    isActive 
                                    ? "bg-wine-800/80 text-white shadow-lg shadow-black/20 border-wine-700/50" 
                                    : "text-wine-100/70 hover:bg-wine-800/30 hover:text-white hover:translate-x-1"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`${isActive ? "text-emerald-400" : "text-wine-400 group-hover:text-emerald-400"} transition-colors duration-300`}>
                                        {item.icon}
                                    </div>
                                    <span className="font-medium text-sm">{item.label}</span>
                                </div>
                                {item.subItems && (
                                    <ChevronDown className={`w-3.5 h-3.5 text-wine-500 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                                )}
                            </Link>

                            {item.subItems && (isActive || pathname.startsWith(item.href)) && (
                                <div className="ml-9 space-y-1 animate-in slide-in-from-top-2 duration-300">
                                    {item.subItems.map((sub) => {
                                        const isSubActive = pathname === sub.href;
                                        return (
                                            <Link
                                                key={sub.href}
                                                href={sub.href}
                                                onClick={onClose}
                                                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all duration-300 group ${
                                                    isSubActive 
                                                    ? "text-white bg-wine-800/40" 
                                                    : "text-wine-300/60 hover:text-white hover:bg-wine-800/20"
                                                }`}
                                            >
                                                <div className={`${isSubActive ? "text-emerald-400" : "text-wine-500 group-hover:text-emerald-400"} transition-colors`}>
                                                    {sub.icon}
                                                </div>
                                                <span className="text-xs font-semibold">{sub.label}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}

                {session?.user?.role === "ADMIN" && (
                    <div className="mt-6 border-t border-wine-800/30 pt-4">
                        <div className="px-4 mb-3">
                            <p className="text-[10.5px] font-black uppercase tracking-[0.2em] text-wine-400/60">Administração</p>
                        </div>
                        <Link
                            href="/admin/usuarios"
                            onClick={onClose}
                            className="flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 text-wine-100/70 hover:bg-wine-800/50 hover:text-white hover:shadow-lg hover:shadow-black/10 hover:-translate-y-0.5 active:translate-y-0 group border border-transparent hover:border-wine-800/50"
                        >
                            <div className="text-wine-400 group-hover:text-amber-400 transition-colors duration-300">
                                <ShieldAlert className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-sm">Controle de Acessos</span>
                        </Link>
                    </div>
                )}
            </nav>

            <div className="w-full px-4 mt-auto pt-8 pb-6">
                <LogoutButton />
                <div className="pt-6 mt-6 border-t border-wine-800/30 flex flex-col items-center opacity-50">
                    <p className="text-[10px] font-medium tracking-wide">© {new Date().getFullYear()} Colégio Frei Galvão</p>
                    {session?.user?.name && <p className="text-[9px] mt-1.5 font-bold text-wine-300">{session.user.name}</p>}
                </div>
            </div>
        </aside>
    );
}
