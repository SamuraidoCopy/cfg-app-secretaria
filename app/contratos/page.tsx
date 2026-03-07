import { getContracts, deleteContract } from "./actions";
import AddContractModal from "./AddContractModal";
import { FileText, Trash2, Calendar, User } from "lucide-react";

export default async function ContratosPage() {
    const contracts = await getContracts();

    return (
        <div className="w-full h-full pb-10">
            <header className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-wine-950">Contratos</h1>
                    <p className="text-wine-800/70 mt-1">Gerencie os contratos de prestação de serviço educacional</p>
                </div>
                <AddContractModal />
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {contracts.length === 0 ? (
                    <div className="col-span-1 md:col-span-2 xl:col-span-3 bg-white rounded-[24px] shadow-premium border border-wine-100/50 p-12 text-center flex flex-col items-center justify-center">
                        <FileText className="w-12 h-12 text-wine-300 mb-4" />
                        <h3 className="text-lg font-bold text-wine-950">Nenhum contrato criado</h3>
                        <p className="text-wine-600 mt-1">Use o botão acima para cadastrar o primeiro contrato.</p>
                    </div>
                ) : (
                    contracts.map((contract) => (
                        <div key={contract.id} className="bg-white rounded-[24px] shadow-premium border border-wine-100/50 flex flex-col overflow-hidden hover:border-wine-300 hover:shadow-premium-hover transition-all duration-300">
                            <div className="p-5 flex-1">
                                <div className="flex justify-between items-start mb-3">
                                    <span className={`px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded-md
                    ${contract.status === "ACTIVE" ? "bg-green-100 text-green-800" : ""}
                    ${contract.status === "DRAFT" ? "bg-amber-100 text-amber-800" : ""}
                    ${contract.status === "EXPIRED" ? "bg-red-100 text-red-800" : ""}
                  `}>
                                        {contract.status === "ACTIVE" ? "Ativo" : contract.status === "DRAFT" ? "Rascunho" : "Expirado"}
                                    </span>

                                    <div className="flex gap-2">
                                        {/* TODO: Generate PDF logic */}
                                        <button className="text-wine-400 hover:text-wine-800 transition-colors p-1" title="Ver Documento">
                                            <FileText className="w-4 h-4" />
                                        </button>
                                        <form action={deleteContract.bind(null, contract.id)}>
                                            <button type="submit" className="text-wine-400 hover:text-red-600 transition-colors p-1" title="Excluir">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </form>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-wine-950 line-clamp-1 mb-1">{contract.title}</h3>

                                <div className="space-y-2 mt-4 text-sm text-wine-800">
                                    <p className="flex items-center gap-2">
                                        <User className="w-4 h-4 opacity-70" />
                                        <span className="font-medium truncate">{contract.clientName}</span>
                                    </p>
                                    <p className="flex items-center gap-2 pl-6 text-xs opacity-80">
                                        Doc: {contract.document}
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Calendar className="w-4 h-4 opacity-70" />
                                        <span>Início: {new Date(contract.startDate).toLocaleDateString("pt-BR", { timeZone: "UTC" })}</span>
                                    </div>
                                    {contract.endDate && (
                                        <div className="flex items-center gap-2 pl-6 text-xs opacity-80">
                                            Término: {new Date(contract.endDate).toLocaleDateString("pt-BR", { timeZone: "UTC" })}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="bg-wine-900/5 px-5 py-3 border-t border-wine-100 mt-auto">
                                <p className="text-xs font-mono text-wine-600 line-clamp-2" title={contract.content}>
                                    {contract.content}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
