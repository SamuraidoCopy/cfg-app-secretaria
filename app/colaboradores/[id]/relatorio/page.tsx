import { prisma } from "@/lib/prisma";
import { WEEKDAY_LABELS, type Weekday } from "@/lib/work-schedule";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import PrintButton from "./PrintButton";

export const dynamic = "force-dynamic";

function currency(value: number | null | undefined) {
    if (value === null || value === undefined) return "Nao informado";
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

function text(value: string | number | null | undefined) {
    if (value === null || value === undefined || value === "") return "Nao informado";
    return String(value);
}

function bool(value: boolean) {
    return value ? "Sim" : "Nao";
}

function localDate(value: Date | string | null | undefined) {
    if (!value) return "Nao informado";
    const date = new Date(value);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
}

function lessonLabel(assignment: {
    fullDay: boolean;
    lessonStart: number | null;
    lessonEnd: number | null;
}) {
    if (assignment.fullDay) return "Dia todo";
    if (assignment.lessonStart && assignment.lessonEnd && assignment.lessonStart !== assignment.lessonEnd) {
        return `Aulas ${assignment.lessonStart}-${assignment.lessonEnd}`;
    }
    if (assignment.lessonStart) return `Aula ${assignment.lessonStart}`;
    return "Nao informado";
}

function InfoItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="border-b border-wine-100 pb-2 print:border-gray-300">
            <dt className="text-[10px] font-black uppercase tracking-widest text-wine-400 print:text-gray-500">{label}</dt>
            <dd className="mt-1 text-sm font-bold text-wine-950 print:text-black">{value}</dd>
        </div>
    );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="rounded-2xl border border-wine-100 bg-white p-5 shadow-sm print:break-inside-avoid print:rounded-none print:border-gray-300 print:p-4 print:shadow-none">
            <h2 className="mb-4 border-b border-wine-100 pb-2 text-xs font-black uppercase tracking-[0.18em] text-wine-800 print:border-gray-300 print:text-black">
                {title}
            </h2>
            {children}
        </section>
    );
}

export default async function EmployeeRegistrationPrintPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const employee = await prisma.employee.findUnique({
        where: { id },
        include: {
            employeeSubjects: {
                include: { subject: true },
                orderBy: { subject: { name: "asc" } },
            },
            teachingAssignments: {
                include: { subject: true },
                orderBy: [{ weekday: "asc" }, { startTime: "asc" }],
            },
            salaryAdjustments: {
                orderBy: { effectiveDate: "desc" },
            },
        },
    });

    if (!employee) notFound();

    const account = [employee.accountType, employee.agency, employee.accountNumber].filter(Boolean).join(" / ");
    const issuedAt = new Date().toLocaleDateString("pt-BR");

    return (
        <main className="registration-print-root min-h-screen bg-cream-100 px-4 py-8 text-wine-950 print:bg-white print:p-0">
            <div className="mx-auto mb-6 flex w-full max-w-5xl items-center justify-between gap-4 rounded-2xl border border-wine-100 bg-white p-4 shadow-premium print:hidden">
                <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-wine-400">Visualizacao de Impressao</p>
                    <h1 className="text-xl font-black text-wine-950">Cadastro de {employee.name}</h1>
                </div>
                <PrintButton autoPrint />
            </div>

            <article className="registration-print-sheet mx-auto w-full max-w-5xl rounded-[24px] border border-wine-100 bg-white p-8 shadow-premium print:max-w-none print:rounded-none print:border-none print:p-0 print:shadow-none">
                <header className="mb-7 border-b-4 border-wine-900 pb-6 print:border-black">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-5">
                            <img src="/logo.jpg" alt="Logo Colegio Frei Galvao" className="h-20 w-20 rounded-2xl object-contain ring-1 ring-wine-100 print:h-16 print:w-16 print:rounded-none print:ring-0" />
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-wine-500 print:text-gray-600">Colegio Frei Galvao</p>
                                <h2 className="mt-1 text-3xl font-black tracking-tight text-wine-950 print:text-2xl print:text-black">Relatorio Cadastral</h2>
                                <p className="mt-1 text-sm font-bold text-wine-600 print:text-gray-700">Funcionario ativo no cadastro atual</p>
                            </div>
                        </div>
                        <div className="text-left md:text-right">
                            <p className="text-[10px] font-black uppercase tracking-widest text-wine-400 print:text-gray-600">Emitido em</p>
                            <p className="text-lg font-black text-wine-950 print:text-black">{issuedAt}</p>
                        </div>
                    </div>
                </header>

                <section className="mb-6 flex flex-col gap-5 rounded-2xl bg-wine-50/70 p-5 md:flex-row md:items-center print:rounded-none print:border print:border-gray-300 print:bg-transparent">
                    {employee.profilePhotoUrl ? (
                        <img src={employee.profilePhotoUrl} alt={`Foto de ${employee.name}`} className="h-28 w-28 rounded-2xl object-cover ring-4 ring-white print:h-24 print:w-24 print:rounded-none print:ring-0" />
                    ) : (
                        <div className="grid h-28 w-28 place-items-center rounded-2xl bg-white text-4xl font-black text-wine-300 ring-1 ring-wine-100 print:hidden">
                            {employee.name.slice(0, 1).toUpperCase()}
                        </div>
                    )}
                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-md bg-wine-900 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white print:border print:border-black print:bg-transparent print:text-black">{employee.type}</span>
                            <span className="rounded-md bg-emerald-100 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-800 print:border print:border-black print:bg-transparent print:text-black">{employee.active ? "Ativo" : "Inativo"}</span>
                            {employee.isAulista && <span className="rounded-md bg-amber-100 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-amber-800 print:border print:border-black print:bg-transparent print:text-black">Aulista</span>}
                        </div>
                        <h1 className="mt-3 text-4xl font-black tracking-tight text-wine-950 print:text-3xl print:text-black">{employee.name}</h1>
                        <p className="mt-1 text-lg font-bold text-wine-700 print:text-gray-700">{employee.role}</p>
                    </div>
                </section>

                <div className="registration-section-grid grid gap-5 lg:grid-cols-2">
                    <Section title="Identificacao">
                        <dl className="grid gap-3 sm:grid-cols-2">
                            <InfoItem label="Nome" value={employee.name} />
                            <InfoItem label="CPF" value={employee.cpf} />
                            <InfoItem label="Tipo" value={employee.type} />
                            <InfoItem label="Cargo" value={employee.role} />
                            <InfoItem label="Data de inicio" value={localDate(employee.startDate)} />
                            <InfoItem label="Status" value={employee.active ? "Ativo" : "Inativo"} />
                        </dl>
                    </Section>

                    <Section title="Remuneracao">
                        <dl className="grid gap-3 sm:grid-cols-2">
                            <InfoItem label="Salario base" value={currency(employee.baseSalary)} />
                            <InfoItem label="Aulista" value={bool(employee.isAulista)} />
                            <InfoItem label="Valor hora" value={currency(employee.hourlyRate)} />
                            <InfoItem label="Cesta basica" value={currency(employee.cestaBasica)} />
                            <InfoItem label="Adiantamento salarial" value={currency(employee.salaryAdvance)} />
                            <InfoItem label="Descontos recorrentes" value={currency(employee.recurringDeductions)} />
                            <InfoItem label="Descontos temporarios" value={currency(employee.temporaryDeductions)} />
                            <InfoItem label="Validade desconto temp." value={text(employee.temporaryDeductionsExpiration)} />
                            <div className="sm:col-span-2">
                                <InfoItem label="Descricao desconto temp." value={text(employee.temporaryDeductionsDesc)} />
                            </div>
                        </dl>
                    </Section>

                    <Section title="Beneficios e Pagamento">
                        <dl className="grid gap-3 sm:grid-cols-2">
                            <InfoItem label="VT diario" value={currency(employee.transportDaily)} />
                            <InfoItem label="Auxilio gasolina" value={currency(employee.gasAssistance)} />
                            <InfoItem label="Almoca no colegio" value={bool(employee.eatsAtSchool)} />
                            <InfoItem label="Metodo de pagamento" value={employee.paymentMethod} />
                            <InfoItem label="Chave Pix" value={text(employee.pixKey)} />
                            <InfoItem label="Banco" value={text(employee.bankName)} />
                            <InfoItem label="Conta" value={account || "Nao informado"} />
                        </dl>
                    </Section>

                    <Section title="Materias Possiveis">
                        {employee.employeeSubjects.length ? (
                            <div className="flex flex-wrap gap-2">
                                {employee.employeeSubjects.map((item) => (
                                    <span key={item.id} className="rounded-md bg-wine-50 px-3 py-2 text-xs font-bold text-wine-900 print:border print:border-gray-300 print:bg-transparent print:text-black">
                                        {item.subject.name}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm font-bold text-wine-950">Nao informado</p>
                        )}
                    </Section>
                </div>

                <div className="registration-wide-sections mt-5 grid gap-5">
                    <Section title="Grade Atual">
                        {employee.teachingAssignments.length ? (
                            <table className="w-full border-collapse text-left text-xs">
                                <thead>
                                    <tr className="border-b-2 border-wine-100 print:border-black">
                                        <th className="py-2 pr-3 font-black uppercase tracking-widest text-wine-400 print:text-black">Dia</th>
                                        <th className="py-2 pr-3 font-black uppercase tracking-widest text-wine-400 print:text-black">Turma</th>
                                        <th className="py-2 pr-3 font-black uppercase tracking-widest text-wine-400 print:text-black">Materia</th>
                                        <th className="py-2 pr-3 font-black uppercase tracking-widest text-wine-400 print:text-black">Aula</th>
                                        <th className="py-2 text-right font-black uppercase tracking-widest text-wine-400 print:text-black">Carga</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employee.teachingAssignments.map((assignment) => (
                                        <tr key={assignment.id} className="border-b border-wine-50 print:border-gray-300">
                                            <td className="py-2 pr-3 font-bold text-wine-950">{WEEKDAY_LABELS[assignment.weekday as Weekday] || `Dia ${assignment.weekday}`}</td>
                                            <td className="py-2 pr-3 text-wine-700 print:text-black">{text(assignment.classGroup)}</td>
                                            <td className="py-2 pr-3 text-wine-700 print:text-black">{assignment.subject.name}</td>
                                            <td className="py-2 pr-3 text-wine-700 print:text-black">{lessonLabel(assignment)}</td>
                                            <td className="py-2 text-right font-bold text-wine-950">{assignment.hours.toLocaleString("pt-BR")}h</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-sm font-bold text-wine-950">Nao informado</p>
                        )}
                    </Section>

                    <Section title="Historico de Reajustes">
                        {employee.salaryAdjustments.length ? (
                            <table className="w-full border-collapse text-left text-xs">
                                <thead>
                                    <tr className="border-b-2 border-wine-100 print:border-black">
                                        <th className="py-2 pr-3 font-black uppercase tracking-widest text-wine-400 print:text-black">Data</th>
                                        <th className="py-2 pr-3 text-right font-black uppercase tracking-widest text-wine-400 print:text-black">Anterior</th>
                                        <th className="py-2 pr-3 text-right font-black uppercase tracking-widest text-wine-400 print:text-black">Novo</th>
                                        <th className="py-2 pr-3 text-right font-black uppercase tracking-widest text-wine-400 print:text-black">Diferenca</th>
                                        <th className="py-2 font-black uppercase tracking-widest text-wine-400 print:text-black">Observacao</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employee.salaryAdjustments.map((adjustment) => (
                                        <tr key={adjustment.id} className="border-b border-wine-50 print:border-gray-300">
                                            <td className="py-2 pr-3 font-bold text-wine-950">{localDate(adjustment.effectiveDate)}</td>
                                            <td className="py-2 pr-3 text-right text-wine-700 print:text-black">{currency(adjustment.previousSalary)}</td>
                                            <td className="py-2 pr-3 text-right text-wine-700 print:text-black">{currency(adjustment.newSalary)}</td>
                                            <td className="py-2 pr-3 text-right font-bold text-wine-950">{currency(adjustment.adjustmentValue)}</td>
                                            <td className="py-2 text-wine-700 print:text-black">{text(adjustment.notes)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-sm font-bold text-wine-950">Nao informado</p>
                        )}
                    </Section>
                </div>

                <footer className="mt-8 border-t border-wine-100 pt-4 text-center text-[10px] font-bold uppercase tracking-widest text-wine-300 print:border-gray-300 print:text-gray-500">
                    Documento gerado a partir do cadastro atual do sistema de folha.
                </footer>
            </article>

            <style dangerouslySetInnerHTML={{
                __html: `
                    @media print {
                        @page { margin: 10mm; size: A4 portrait; }

                        html,
                        body {
                            width: 100% !important;
                            min-width: 0 !important;
                            margin: 0 !important;
                            padding: 0 !important;
                            overflow: visible !important;
                            background: white !important;
                            color: black !important;
                            -webkit-print-color-adjust: exact !important;
                            print-color-adjust: exact !important;
                        }

                        *,
                        *::before,
                        *::after {
                            box-sizing: border-box !important;
                            max-width: 100% !important;
                            animation: none !important;
                            transition: none !important;
                        }

                        .registration-print-root,
                        .registration-print-sheet {
                            display: block !important;
                            width: 100% !important;
                            max-width: 100% !important;
                            min-width: 0 !important;
                            margin: 0 !important;
                            padding: 0 !important;
                            overflow: visible !important;
                        }

                        .registration-section-grid,
                        .registration-wide-sections {
                            display: grid !important;
                            grid-template-columns: minmax(0, 1fr) !important;
                            gap: 8mm !important;
                            width: 100% !important;
                        }

                        section {
                            width: 100% !important;
                            max-width: 100% !important;
                            page-break-inside: avoid !important;
                            break-inside: avoid !important;
                        }

                        dl,
                        table {
                            width: 100% !important;
                            min-width: 0 !important;
                        }

                        table {
                            table-layout: fixed !important;
                            border-collapse: collapse !important;
                            page-break-inside: auto !important;
                        }

                        th,
                        td,
                        dd,
                        dt,
                        p,
                        h1,
                        h2 {
                            overflow-wrap: anywhere !important;
                            word-break: break-word !important;
                        }

                        tr {
                            page-break-inside: avoid !important;
                            break-inside: avoid !important;
                        }
                    }
                `,
            }} />
        </main>
    );
}
