import { getEmployees, deleteEmployee, getSubjectCatalog } from "./actions";
import AddEmployeeModal from "./AddEmployeeModal";
import EditEmployeeModal from "./EditEmployeeModal";
import Link from "next/link";
import { Briefcase, CalendarDays, Printer, Trash2, Utensils } from "lucide-react";
import { formatWeekdaySummary } from "@/lib/work-schedule";

export const dynamic = "force-dynamic";

type EmployeeSubjectView = {
    id: string;
    subject: { name: string };
};

type EmployeeView = {
    id: string;
    name: string;
    cpf: string;
    type: string;
    role: string;
    baseSalary: number;
    hourlyRate: number | null;
    isAulista: boolean;
    profilePhotoUrl: string | null;
    startDate: Date | null;
    eatsAtSchool: boolean;
    transportDaily: number | null;
    teachingAssignments: { weekday: number; hours: number | null }[];
    employeeSubjects: EmployeeSubjectView[];
    salaryAdjustments: {
        id: string;
        effectiveDate: Date | string;
        previousSalary: number;
        newSalary: number;
        adjustmentValue: number;
        notes: string | null;
    }[];
};

function formatLocalDate(date: Date | string | null): string {
    if (!date) return "";
    const d = new Date(date);
    const day = String(d.getUTCDate()).padStart(2, "0");
    const month = String(d.getUTCMonth() + 1).padStart(2, "0");
    const year = d.getUTCFullYear();
    return `${day}/${month}/${year}`;
}

function currentPayValue(employee: EmployeeView) {
    const latestAdjustment = [...(employee.salaryAdjustments || [])].sort(
        (a, b) => new Date(a.effectiveDate).getTime() - new Date(b.effectiveDate).getTime()
    ).at(-1);

    if (latestAdjustment) return latestAdjustment.newSalary;
    return employee.isAulista ? employee.hourlyRate || 0 : employee.baseSalary;
}

export default async function ColaboradoresPage() {
    const [employees, subjects] = await Promise.all([getEmployees(), getSubjectCatalog()]);

    return (
        <div className="w-full h-full pb-10">
            <header className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-wine-950">Colaboradores</h1>
                    <p className="text-wine-800/70 mt-1">Gerencie equipe, dados contratuais, agenda e reajustes</p>
                </div>
                <div className="w-full md:w-auto">
                    <AddEmployeeModal subjectOptions={subjects} />
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
                                <th className="px-6 py-4 font-semibold hidden md:table-cell">Salario atual</th>
                                <th className="px-6 py-4 font-semibold hidden lg:table-cell">Rotina</th>
                                <th className="px-6 py-4 font-semibold hidden xl:table-cell">Materias</th>
                                <th className="px-6 py-4 font-semibold text-right">Acoes</th>
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
                                (employees as EmployeeView[]).map((employee) => {
                                    const payValue = currentPayValue(employee);
                                    const payLabel = employee.isAulista ? "Valor hora atual" : "Salario atual";

                                    return (
                                    <tr key={employee.id} className="hover:bg-wine-50/80 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                {employee.profilePhotoUrl ? (
                                                    <img src={employee.profilePhotoUrl} alt="" className="h-11 w-11 rounded-full object-cover border border-wine-100" />
                                                ) : (
                                                    <div className="h-11 w-11 rounded-full bg-wine-100 text-wine-800 grid place-items-center font-bold">
                                                        {employee.name.slice(0, 1)}
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="font-bold text-wine-950">{employee.name}</div>
                                                    <div className="text-xs text-wine-700 font-medium">{employee.role}</div>
                                                    {employee.startDate && (
                                                        <div className="text-[11px] text-wine-500 flex items-center gap-1 mt-0.5">
                                                            <CalendarDays className="w-3 h-3" />
                                                            Desde {formatLocalDate(employee.startDate)}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 hidden sm:table-cell text-wine-900 font-mono text-sm">{employee.cpf}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${employee.type === "CLT" ? "bg-blue-100/50 text-blue-800" : "bg-amber-100/50 text-amber-800"}`}>
                                                {employee.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 hidden md:table-cell text-wine-950 font-bold font-display tracking-tight">
                                            <div>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(payValue)}</div>
                                            {employee.isAulista && <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-wine-400">{payLabel}</div>}
                                        </td>
                                        <td className="px-6 py-4 hidden lg:table-cell text-wine-800 text-xs">
                                            <div className="flex flex-col gap-1">
                                                <span><strong className="text-wine-950">Agenda:</strong> {formatWeekdaySummary(employee.teachingAssignments)}</span>
                                                {employee.eatsAtSchool ? (
                                                    <span className="inline-flex items-center gap-1 text-emerald-700"><Utensils className="w-3 h-3" /> Almoca no colegio</span>
                                                ) : (
                                                    <span className="text-wine-400">Nao almoca no colegio</span>
                                                )}
                                                {employee.transportDaily ? <span><strong className="text-wine-950">VT:</strong> {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(employee.transportDaily)}/dia</span> : null}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 hidden xl:table-cell text-wine-800 text-xs max-w-[220px]">
                                            {employee.employeeSubjects.length ? (
                                                <div className="flex flex-wrap gap-1">
                                                    {employee.employeeSubjects.slice(0, 4).map((item) => (
                                                        <span key={item.id} className="rounded-md bg-wine-50 px-2 py-1 text-wine-800">{item.subject.name}</span>
                                                    ))}
                                                    {employee.employeeSubjects.length > 4 && <span className="text-wine-400">+{employee.employeeSubjects.length - 4}</span>}
                                                </div>
                                            ) : <span className="text-wine-400 italic">Sem materias</span>}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/api/generate-employee-registration-pdf?id=${employee.id}`}
                                                    target="_blank"
                                                    className="p-2 text-wine-400 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                                                    title="Gerar PDF cadastral"
                                                >
                                                    <Printer className="w-4 h-4" />
                                                </Link>
                                                <EditEmployeeModal employee={employee} subjectOptions={subjects} />
                                                <form action={deleteEmployee.bind(null, employee.id)} className="inline-block">
                                                    <button type="submit" className="p-2 text-wine-400 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-colors" title="Remover">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
