import { getEmployees, deleteEmployee } from "./actions";
import AddEmployeeModal from "./AddEmployeeModal";
import EditEmployeeModal from "./EditEmployeeModal";
import { Briefcase, CreditCard, Trash2 } from "lucide-react";

export default async function ColaboradoresPage() {
    const employees = await getEmployees();

    return (
        <div className="w-full h-full pb-10">
            <header className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-wine-950">Colaboradores</h1>
                    <p className="text-wine-800/70 mt-1">Gerencie a equipe e dados contratuais</p>
                </div>
                <div className="w-full md:w-auto">
                    <AddEmployeeModal />
                </div>
            </header>

            <div className="bg-white rounded-[24px] shadow-premium border border-wine-100/50 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-wine-50/50 border-b border-wine-100/50 text-wine-900 text-xs uppercase tracking-wider">
                                <th className="px-6 py-4 font-semibold">Nome & Cargo</th>
                                <th className="px-6 py-4 font-semibold hidden sm:table-cell">CPF</th>
                                <th className="px-6 py-4 font-semibold">Tipo</th>
                                <th className="px-6 py-4 font-semibold hidden md:table-cell">Salário Base</th>
                                <th className="px-6 py-4 font-semibold hidden lg:table-cell">Benefícios</th>
                                <th className="px-6 py-4 font-semibold hidden xl:table-cell">Chave PIX</th>
                                <th className="px-6 py-4 font-semibold text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-wine-100">
                            {employees.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="px-6 py-16 text-center text-wine-500">
                                        <Briefcase className="w-12 h-12 mx-auto text-wine-200 mb-4" />
                                        <p className="font-semibold text-lg text-wine-900">Nenhum colaborador cadastrado.</p>
                                    </td>
                                </tr>
                            ) : (
                                employees.map((employee: any) => (
                                    <tr key={employee.id} className="hover:bg-wine-50/80 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-wine-950">{employee.name}</div>
                                            <div className="text-xs text-wine-700 font-medium">{employee.role}</div>
                                        </td>
                                        <td className="px-6 py-4 hidden sm:table-cell text-wine-900 font-mono text-sm">{employee.cpf}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest
                                            ${employee.type === 'CLT' ? 'bg-blue-100/50 text-blue-800' : 'bg-amber-100/50 text-amber-800'}`}>
                                                {employee.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 hidden md:table-cell text-wine-950 font-bold font-display tracking-tight">
                                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(employee.baseSalary)}
                                        </td>
                                        <td className="px-6 py-4 hidden lg:table-cell text-wine-800 text-xs">
                                            <div className="flex flex-col gap-1">
                                                {employee.type === "PJ" && employee.transportDaily ? <span><strong className="text-wine-950">VT:</strong> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(employee.transportDaily)}/dia</span> : null}
                                                {employee.type === "PJ" && employee.gasAssistance ? <span><strong className="text-wine-950">Gasolina:</strong> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(employee.gasAssistance)}</span> : null}
                                                {employee.recurringDeductions > 0 ? <span className="text-rose-600"><strong className="text-wine-950">Desc. Fixo:</strong> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(employee.recurringDeductions)}</span> : null}
                                                {employee.temporaryDeductions > 0 ? <span className="text-orange-600"><strong className="text-wine-950">Desc. Temp:</strong> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(employee.temporaryDeductions)} {employee.temporaryDeductionsDesc ? `(${employee.temporaryDeductionsDesc})` : ''} {employee.temporaryDeductionsExpiration ? `(Até ${employee.temporaryDeductionsExpiration.split('-').reverse().join('/')})` : ''}</span> : null}
                                                {employee.type !== "PJ" && !employee.recurringDeductions && !employee.temporaryDeductions ? <span className="text-wine-400">-</span> : null}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 hidden xl:table-cell text-wine-800 text-xs font-mono truncate max-w-[150px]">
                                            {employee.pixKey || <span className="text-wine-400 italic font-sans">Não informada</span>}
                                        </td>
                                        <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                                            <EditEmployeeModal employee={employee} />
                                            <form action={deleteEmployee.bind(null, employee.id)} className="inline-block">
                                                <button type="submit" className="p-2 text-wine-400 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-colors" title="Remover">
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
