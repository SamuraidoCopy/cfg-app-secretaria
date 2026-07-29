import type { PayrollBreakdown, PayrollBreakdownItem } from "@/lib/payroll-breakdown";

export interface PayrollCalculationDetailsProps {
  breakdown: PayrollBreakdown;
  variant?: "standalone" | "embedded";
  panelId?: string;
}

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function formatCurrency(value: number): string {
  return currency.format(value).replace(/\u00A0/g, "");
}

function DetailItem({ item, tone }: { item: PayrollBreakdownItem; tone: "earning" | "deduction" }) {
  const value = `${tone === "deduction" ? "-" : ""}${formatCurrency(item.value)}`;
  const toneClasses = tone === "earning"
    ? "border-emerald-50 text-emerald-700"
    : "border-rose-50 text-rose-700";

  return (
    <div className={`flex items-center justify-between gap-4 rounded-lg border bg-white p-3 shadow-sm ${toneClasses}`}>
      <div className="min-w-0">
        <p className="text-sm font-bold text-wine-900">{item.label}</p>
        {item.description ? <p className="text-xs text-wine-500">{item.description}</p> : null}
      </div>
      <span className="shrink-0 font-medium">{value}</span>
    </div>
  );
}

export default function PayrollCalculationDetails({
  breakdown,
  variant = "standalone",
  panelId,
}: PayrollCalculationDetailsProps) {
  const id = panelId ?? `payroll-calculation-${breakdown.payrollId}`;
  const isPaid = breakdown.status === "PAID";
  const statusLabel = isPaid ? "PAGO" : "PENDENTE";
  const shellClasses = variant === "standalone"
    ? "grid grid-cols-1 gap-6 lg:grid-cols-3"
    : "grid grid-cols-1 gap-4 xl:grid-cols-3";
  const detailClasses = variant === "standalone" ? "lg:col-span-2" : "xl:col-span-2";

  return (
    <section id={id} className="payroll-calculation-details w-full" aria-label={`Memória de cálculo de ${breakdown.employee.name}`}>
      <div className={shellClasses}>
        <aside className="space-y-4">
          <section className="rounded-[24px] border border-wine-100/50 bg-white p-5 shadow-premium">
            <h2 className="mb-1 text-lg font-bold text-wine-950">Dados do Colaborador</h2>
            <p className="mb-4 text-xs text-wine-600">Informações base para o cálculo</p>
            <dl className="divide-y divide-wine-50">
              <Detail label="Nome" value={breakdown.employee.name} />
              <Detail label="Cargo" value={breakdown.employee.role} />
              <Detail label="Tipo de Contrato" value={breakdown.employee.type} />
              <Detail label="Salário Base" value={formatCurrency(breakdown.baseSalary)} />
              {breakdown.employee.isAulista ? (
                <Detail label="Valor Hora-Aula" value={formatCurrency(breakdown.employee.hourlyRate ?? 0)} />
              ) : null}
            </dl>
          </section>

          <section className={`flex items-center justify-between rounded-[24px] border p-5 shadow-premium ${isPaid ? "border-emerald-200 bg-emerald-50" : "border-rose-200 bg-rose-50"}`}>
            <div>
              <h3 className={`text-xs font-bold uppercase tracking-widest ${isPaid ? "text-emerald-700" : "text-rose-700"}`}>Status do Pagamento</h3>
              <p className="mt-1 text-2xl font-black tracking-tight text-wine-950">{statusLabel}</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs font-bold ${isPaid ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>{statusLabel}</span>
          </section>
        </aside>

        <section className={`rounded-[24px] border border-wine-100/50 bg-cream-50/40 p-5 shadow-premium ${detailClasses}`}>
          <div className="mb-6 border-b border-wine-100 pb-4">
            <h2 className="text-xl font-bold text-wine-950">Detalhamento do Cálculo</h2>
            <p className="mt-1 text-sm text-wine-600">Competência: {breakdown.competency}</p>
          </div>

          <section className="mb-6">
            <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
              <span className="grid h-5 w-5 place-items-center rounded-sm bg-emerald-100">+</span>
              Proventos (Ganhos)
            </h3>
            <div className="space-y-3 rounded-xl border border-emerald-100/50 bg-emerald-50/50 p-4">
              {breakdown.earnings.map((item) => <DetailItem key={item.id} item={item} tone="earning" />)}
              <TotalLine label="Total de Vencimentos Acumulado" value={formatCurrency(breakdown.totals.gross)} tone="earning" />
            </div>
          </section>

          <section className="mb-6">
            <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-700">
              <span className="grid h-5 w-5 place-items-center rounded-sm bg-rose-100">-</span>
              Descontos (Retenções)
            </h3>
            <div className="space-y-3 rounded-xl border border-rose-100/50 bg-rose-50/50 p-4">
              {breakdown.deductions.map((item) => <DetailItem key={item.id} item={item} tone="deduction" />)}
              <TotalLine label="Total de Descontos Acumulado" value={`-${formatCurrency(breakdown.totals.deductions)}`} tone="deduction" />
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[16px] bg-wine-950 p-6 text-white shadow-premium">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="mb-1 text-sm font-bold uppercase tracking-widest text-wine-200/80">Valor Líquido a Receber</h3>
                <p className="text-4xl font-black tracking-tight text-white">{formatCurrency(breakdown.totals.net)}</p>
              </div>
              {breakdown.fgtsValue !== null ? (
                <div className="border-t border-white/20 pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 sm:text-right">
                  <h4 className="mb-1 text-[10px] font-bold uppercase tracking-widest text-wine-300">Recolhimento FGTS</h4>
                  <p className="text-xl font-bold text-wine-100">{formatCurrency(breakdown.fgtsValue)}</p>
                </div>
              ) : null}
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 py-3">
      <dt className="text-sm font-medium text-wine-600">{label}</dt>
      <dd className="text-right text-sm font-bold text-wine-950">{value}</dd>
    </div>
  );
}

function TotalLine({ label, value, tone }: { label: string; value: string; tone: "earning" | "deduction" }) {
  const toneClasses = tone === "earning" ? "border-emerald-200/50 text-emerald-700" : "border-rose-200/50 text-rose-700";
  return (
    <div className={`mt-4 flex items-center justify-between border-t-2 pt-3 font-bold ${toneClasses}`}>
      <span className="text-wine-950">{label}</span>
      <span className="text-lg font-black">{value}</span>
    </div>
  );
}
