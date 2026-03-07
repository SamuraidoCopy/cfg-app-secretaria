"use client"

import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"

export default function LogoutButton() {
    return (
        <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 w-full text-wine-100/70 hover:bg-rose-500/20 hover:text-rose-400 group border border-transparent hover:border-rose-500/30"
        >
            <div className="text-wine-400 group-hover:text-rose-400 transition-colors duration-300">
                <LogOut className="w-5 h-5" />
            </div>
            <span className="font-medium text-sm">Sair do Sistema</span>
        </button>
    )
}
