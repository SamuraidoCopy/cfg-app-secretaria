"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
    return (
        <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-wine-800 text-white font-medium hover:bg-wine-900 rounded-lg shadow-md transition-colors print:hidden"
        >
            <Printer className="w-4 h-4" />
            Imprimir Recibo
        </button>
    );
}
