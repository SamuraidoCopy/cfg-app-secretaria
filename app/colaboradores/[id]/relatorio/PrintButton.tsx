"use client";

import { Printer } from "lucide-react";
import { useEffect } from "react";

export default function PrintButton({ autoPrint = false }: { autoPrint?: boolean }) {
    useEffect(() => {
        if (!autoPrint) return;

        const timeout = window.setTimeout(() => {
            window.print();
        }, 600);

        return () => window.clearTimeout(timeout);
    }, [autoPrint]);

    return (
        <button
            onClick={() => window.print()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-wine-900 px-5 py-3 text-sm font-bold text-white shadow-premium transition-colors hover:bg-wine-950 print:hidden"
        >
            <Printer className="h-4 w-4" />
            Imprimir / Salvar PDF
        </button>
    );
}
