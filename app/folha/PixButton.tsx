"use client";

import { QrCode } from "lucide-react";

export default function PixButton({ pixKey, onOpen }: { pixKey: string, onOpen: () => void }) {
    if (!pixKey) return <span className="text-[10px] text-wine-400 font-medium">Sem PIX</span>;

    return (
        <button
            type="button"
            onClick={onOpen}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-wine-100 text-wine-800 font-bold rounded-lg text-xs hover:bg-wine-200 transition-all shadow-sm active:scale-95"
            title="Ver PIX"
        >
            <QrCode className="w-3.5 h-3.5" /> PIX
        </button>
    );
}
