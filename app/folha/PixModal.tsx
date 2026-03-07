"use client";

import { QrCode, Copy, Check, X, ShieldCheck } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { createStaticPix, hasError } from "pix-utils";

interface PixModalProps {
    isOpen: boolean;
    onClose: () => void;
    pixKey: string;
    amount: number;
}

export default function PixModal({ isOpen, onClose, pixKey, amount }: PixModalProps) {
    const [copied, setCopied] = useState(false);

    if (!isOpen) return null;

    const pix = createStaticPix({
        merchantName: 'Frei Galvao',
        merchantCity: 'Sao Paulo',
        pixKey: pixKey,
        infoAdicional: 'Repasse RH',
        transactionAmount: amount,
    });
    const pixPayload = hasError(pix) ? pixKey : pix.toBRCode();

    const copyToClipboard = () => {
        navigator.clipboard.writeText(pixPayload);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <div className="fixed inset-0 bg-wine-950/60 backdrop-blur-md z-[999] flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="bg-[#FCFBFA] rounded-[2rem] shadow-premium-hover w-full max-w-sm overflow-hidden border border-wine-100/50 flex flex-col items-center animate-in zoom-in-95 duration-300">

                {/* Header with Close */}
                <div className="w-full px-6 py-4 flex justify-between items-center bg-gradient-to-r from-wine-50/50 to-transparent border-b border-wine-100/50">
                    <div className="flex items-center gap-2 text-wine-800 font-bold">
                        <ShieldCheck className="w-5 h-5 text-emerald-600" />
                        <span className="text-xs uppercase tracking-widest font-bold">Pagamento Seguro</span>
                    </div>
                    <button onClick={onClose} className="p-2 bg-white hover:bg-wine-50 rounded-full transition-colors text-wine-400 hover:text-wine-900 shadow-sm border border-wine-100/50">
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Content Area */}
                <div className="p-8 w-full flex flex-col items-center">

                    {/* Hero Amount */}
                    <div className="text-center mb-8">
                        <p className="text-[10px] font-bold text-wine-400 uppercase tracking-widest mb-2">Valor do Repasse</p>
                        <h4 className="text-5xl font-black text-wine-950 tracking-tight font-display">
                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount)}
                        </h4>
                    </div>

                    {/* QR Code Container */}
                    <div className="relative group mb-8">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-wine-100 to-transparent rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-80 transition duration-700"></div>
                        <div className="relative bg-white p-6 rounded-[2rem] shadow-premium border border-wine-100/50 flex items-center justify-center aspect-square w-[220px] transform group-hover:-translate-y-1 transition-transform duration-500">
                            <QRCodeSVG
                                value={pixPayload}
                                size={180}
                                fgColor="#350F19"
                                level="H"
                                includeMargin={false}
                                style={{ display: 'block' }}
                            />
                        </div>
                    </div>

                    <p className="text-sm text-wine-800 text-center mb-6 leading-relaxed px-4">
                        Escaneie o código acima ou copie a chave abaixo para finalizar o pagamento.
                    </p>

                    {/* Pix Key Bar */}
                    <div className="w-full bg-white p-1.5 rounded-2xl border border-wine-100/50 flex items-center justify-between shadow-sm">
                        <span className="font-mono text-sm text-wine-900 px-4 truncate max-w-[210px]" title={pixKey}>
                            {pixKey}
                        </span>
                        <button
                            onClick={copyToClipboard}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0 ${copied
                                ? "bg-emerald-600 text-white shadow-emerald-600/20"
                                : "bg-gradient-to-b from-wine-800 to-wine-900 text-white shadow-wine-900/20"
                                }`}
                        >
                            {copied ? (
                                <>
                                    <Check className="w-4 h-4" /> Copiado!
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4" /> Copiar
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="w-full px-8 pb-8">
                    <button
                        onClick={onClose}
                        className="w-full py-3.5 text-wine-800 font-bold text-xs uppercase tracking-wider bg-transparent hover:bg-wine-50 rounded-2xl transition-colors"
                    >
                        Já realizei o pagamento
                    </button>
                </div>
            </div>
        </div>
    );
}
