"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Menu } from "lucide-react";

export function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isLoginPage = pathname === "/login";
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            {!isLoginPage && (
                <>
                    {/* Mobile Overlay */}
                    {isSidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity"
                            onClick={() => setIsSidebarOpen(false)}
                        />
                    )}

                    <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="md:hidden fixed top-4 left-4 z-30 p-2 bg-white rounded-xl shadow-premium text-wine-900 border border-wine-100 hover:bg-wine-50 transition-colors"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </>
            )}
            <main className={`flex-1 w-full h-screen overflow-y-auto relative ${isLoginPage ? 'bg-gradient-to-br from-wine-950 to-wine-900' : 'bg-cream-50 p-6 md:p-8'}`}>
                {!isLoginPage && <div className="absolute top-0 right-0 w-96 h-96 bg-wine-200/30 rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>}

                {/* Spacer on mobile so content isn't hidden behind the floating hamburger button */}
                {!isLoginPage && <div className="h-10 md:hidden w-full mb-4"></div>}

                {children}
            </main>
        </>
    );
}
