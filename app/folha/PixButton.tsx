import { QrCode, CreditCard } from "lucide-react";

export default function PixButton({
    onOpen,
    paymentMethod,
    pixKey
}: {
    onOpen: () => void,
    paymentMethod?: string,
    pixKey?: string
}) {
    const isTransfer = paymentMethod === "TRANSFER";

    // Se for PIX e não tiver chave, mostra erro
    if (!isTransfer && !pixKey) return <span className="text-[10px] text-wine-400 font-medium">Sem PIX</span>;

    return (
        <button
            type="button"
            onClick={onOpen}
            className={`flex items-center gap-1.5 px-3 py-1.5 font-bold rounded-lg text-xs transition-all shadow-sm active:scale-95 ${isTransfer
                    ? "bg-blue-50 text-blue-800 hover:bg-blue-100"
                    : "bg-wine-100 text-wine-800 hover:bg-wine-200"
                }`}
            title={isTransfer ? "Ver Dados Bancários" : "Ver PIX"}
        >
            {isTransfer ? (
                <CreditCard className="w-3.5 h-3.5" />
            ) : (
                <QrCode className="w-3.5 h-3.5" />
            )}
            {isTransfer ? "BANCO" : "PIX"}
        </button>
    );
}
