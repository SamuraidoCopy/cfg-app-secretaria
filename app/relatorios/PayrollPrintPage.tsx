import PayrollCalculationDetails from "@/app/components/PayrollCalculationDetails";
import type { PayrollBreakdown } from "@/lib/payroll-breakdown";
import styles from "./PayrollPrintPage.module.css";

export default function PayrollPrintPage({ breakdown }: { breakdown: PayrollBreakdown }) {
  return (
    <section className={styles.page} data-testid="payroll-print-page" data-payroll-id={breakdown.payrollId}>
      <header className={styles.header}>
        <p>Memória de cálculo</p>
        <h2>{breakdown.employee.name} · {breakdown.competency}</h2>
      </header>
      <PayrollCalculationDetails
        breakdown={breakdown}
        variant="print"
        panelId={`print-payroll-${breakdown.payrollId}`}
      />
      <p className={styles.endMarker}>Fim da memória</p>
    </section>
  );
}
