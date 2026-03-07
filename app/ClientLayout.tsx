"use client";

import { usePathname } from "next/navigation";

export function ClientLayout({ children, sidebar }: { children: React.ReactNode, sidebar: React.ReactNode }) {
    const pathname = usePathname();
    const isLoginPage = pathname === "/login";

    return (
        <>
            {!isLoginPage && sidebar}
            <main className={`flex-1 w-full h-screen overflow-y-auto relative ${isLoginPage ? 'bg-gradient-to-br from-wine-950 to-wine-900' : 'bg-cream-50 p-6'}`}>
                {!isLoginPage && <div className="absolute top-0 right-0 w-96 h-96 bg-wine-200/30 rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>}
                {children}
            </main>
        </>
    );
}
