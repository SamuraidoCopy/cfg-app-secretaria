import { getTransactions, deleteTransaction } from "./actions";
import AddTransactionModal from "./AddTransactionModal";
import MonthPicker from "../components/MonthPicker";
import { ArrowUpCircle, ArrowDownCircle, Trash2, Wallet } from "lucide-react";

export default async function FinanceiroPage({
    searchParams,
}: {
    searchParams: Promise<{ month?: string; year?: string }>;
}) {
    const params = await searchParams;
    const now = new Date();
    const currentMonth = params.month ? parseInt(params.month) : now.getMonth() + 1;
    const currentYear = params.year ? parseInt(params.year) : now.getFullYear();

    const transactions = await getTransactions(currentMonth, currentYear);

    const totalIncomes = transactions.filter(t => t.type === "INCOME").reduce((sum, t) => sum + t.amount, 0);
    const totalExpenses = transactions.filter(t => t.type === "EXPENSE").reduce((sum, t) => sum + t.amount, 0);
    const netBalance = totalIncomes - totalExpenses;

    return (
        <div className="w-full h-full pb-10">
            <header className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-wine-950">Financeiro</h1>
                    <p className="text-wine-800/70 mt-1">Controle de receitas, despesas e saldo do mês</p>
                </div>
                <div className="flex flex-wrap gap-3 items-center w-full md:w-auto">
                    <MonthPicker currentMonth={currentMonth} currentYear={currentYear} />
                    <AddTransactionModal />
                </div>
            </header>

            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-[24px] shadow-premium border border-wine-100/50 border-l-[6px] border-l-emerald-500 hover:shadow-premium-hover transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-wine-500">Total Entradas</h3>
                        <ArrowUpCircle className="w-6 h-6 text-emerald-500" />
                    </div>
                    <span className="text-3xl font-bold text-wine-950 tracking-tight font-display">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalIncomes)}
                    </span>
                </div>

                <div className="bg-white p-6 rounded-[24px] shadow-premium border border-wine-100/50 border-l-[6px] border-l-rose-500 hover:shadow-premium-hover transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-wine-500">Total Saídas</h3>
                        <ArrowDownCircle className="w-6 h-6 text-rose-500" />
                    </div>
                    <span className="text-3xl font-bold text-wine-950 tracking-tight font-display">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalExpenses)}
                    </span>
                </div>

                <div className={`p-6 flex flex-col text-white rounded-[24px] shadow-premium border border-white/10 hover:shadow-premium-hover transition-all duration-300 relative overflow-hidden group ${netBalance >= 0 ? "bg-gradient-to-br from-wine-950 to-wine-900" : "bg-gradient-to-br from-rose-950 to-rose-900"}`}>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -z-0 group-hover:bg-white/10 transition-colors duration-500"></div>
                    <div className="flex items-center justify-between mb-2 z-10">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/70">Saldo do Mês</h3>
                        <Wallet className="w-6 h-6 opacity-80" />
                    </div>
                    <span className="text-4xl font-bold mt-1">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(netBalance)}
                    </span>
                </div>
            </div>

            <div className="bg-white rounded-[24px] shadow-premium border border-wine-100/50 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-wine-50/50 border-b border-wine-100/50 text-wine-900 text-xs uppercase tracking-wider">
                                <th className="px-6 py-4 font-semibold">Data</th>
                                <th className="px-6 py-4 font-semibold">Título / Descrição</th>
                                <th className="px-6 py-4 font-semibold">Categoria</th>
                                <th className="px-6 py-4 font-semibold text-right">Valor</th>
                                <th className="px-6 py-4 font-semibold text-right">Ação</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-wine-100">
                            {transactions.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-16 text-center text-wine-500">
                                        <Wallet className="w-12 h-12 mx-auto text-wine-200 mb-4" />
                                        <p className="font-semibold text-lg text-wine-900">Nenhum lançamento encontrado para este mês.</p>
                                    </td>
                                </tr>
                            ) : (
                                transactions.map((t) => (
                                    <tr key={t.id} className="hover:bg-wine-50/50 transition-colors group">
                                        <td className="px-6 py-4 text-wine-800 text-sm whitespace-nowrap">
                                            {new Date(t.date).toLocaleDateString("pt-BR", { timeZone: "UTC" })}
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="font-semibold text-wine-950 flex items-center gap-2">
                                                {t.type === "INCOME" ? (
                                                    <ArrowUpCircle className="w-4 h-4 text-green-500" />
                                                ) : (
                                                    <ArrowDownCircle className="w-4 h-4 text-red-500" />
                                                )}
                                                {t.title}
                                            </p>
                                            {t.description && (
                                                <p className="text-xs text-wine-600 mt-1 line-clamp-1">{t.description}</p>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 text-xs font-bold rounded-lg bg-wine-100 text-wine-800 uppercase tracking-wider">
                                                {t.category}
                                            </span>
                                        </td>
                                        <td className={`px-6 py-4 font-bold text-lg text-right ${t.type === "INCOME" ? "text-green-700" : "text-red-700"}`}>
                                            {t.type === "INCOME" ? "+" : "-"} {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(t.amount)}
                                        </td>

                                        <td className="px-6 py-4 text-right">
                                            <form action={deleteTransaction.bind(null, t.id)}>
                                                <button type="submit" className="p-2 text-wine-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors" title="Remover">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
