import { calculateTeacherComponents } from "./payroll-calc";

export interface PayrollBreakdownEmployee {
  id: string;
  name: string;
  type: string;
  role: string;
  baseSalary: number;
  hourlyRate: number | null;
  cestaBasica: number | null;
  isAulista: boolean;
  transportDaily?: number | null;
}

export interface PayrollBreakdownPayroll {
  id: string;
  month: number;
  year: number;
  status: string;
  baseSalary: number;
  workingDays?: number | null;
  transportTotal?: number | null;
  absences: number;
  absenceDeduction: number;
  absencesVT: number;
  transportDeduction: number;
  otherDeductions: number;
  bonuses: number;
  grossEarnings: number;
  inssDeduction: number;
  irrfDeduction: number;
  fgtsValue: number;
  salaryAdvance: number;
  hoursAulista?: number | null;
  netTotal: number;
}

export interface PayrollBreakdownInput {
  employee: PayrollBreakdownEmployee;
  payroll: PayrollBreakdownPayroll;
}

export interface PayrollBreakdownItem {
  id: string;
  label: string;
  value: number;
  description?: string;
}

export interface PayrollBreakdown {
  payrollId: string;
  competency: string;
  employee: PayrollBreakdownEmployee;
  baseSalary: number;
  status: string;
  earnings: PayrollBreakdownItem[];
  deductions: PayrollBreakdownItem[];
  totals: {
    gross: number;
    deductions: number;
    net: number;
  };
  fgtsValue: number | null;
}

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const number = new Intl.NumberFormat("pt-BR", {
  maximumFractionDigits: 2,
});

const months = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

function roundCurrency(value: number): number {
  return Number(value.toFixed(2));
}

function formatCurrency(value: number): string {
  return currency.format(value).replace(/\u00A0/g, " ");
}

function positive(value: number | null | undefined): number {
  return value && value > 0 ? value : 0;
}

export function buildPayrollBreakdown({ employee, payroll }: PayrollBreakdownInput): PayrollBreakdown {
  const isCLT = employee.type === "CLT";
  const earnings: PayrollBreakdownItem[] = [];
  const deductions: PayrollBreakdownItem[] = [];

  if (isCLT && employee.isAulista) {
    const hours = positive(payroll.hoursAulista);
    const hourlyRate = positive(employee.hourlyRate);
    const classesBase = hours * hourlyRate;
    const classes = roundCurrency(classesBase);
    const teacherComponents = calculateTeacherComponents(classesBase);

    earnings.push(
      {
        id: "classes",
        label: "Aulas do mês",
        value: classes,
        description: `${number.format(hours)} aulas × ${formatCurrency(hourlyRate)}`,
      },
      {
        id: "dsr",
        label: "DSR (Descanso Semanal Remunerado)",
        value: teacherComponents.dsr,
        description: "16,67% do valor das aulas",
      },
      {
        id: "activity",
        label: "Hora Atividade",
        value: teacherComponents.horaAtividade,
        description: "5% do valor das aulas",
      },
    );
  } else {
    const baseSalary = payroll.baseSalary;
    earnings.push({
      id: "salary",
      label: "Salário Mês",
      value: baseSalary,
      description: "Salário Base",
    });

    const isTeacher = isCLT && employee.role.toUpperCase().includes("PROFESSOR");
    if (isTeacher) {
      earnings.push({
        id: "activity",
        label: "Hora Atividade",
        value: roundCurrency(baseSalary * 0.05),
        description: "5% do salário base",
      });
    }
  }

  const cestaBasica = positive(employee.cestaBasica);
  const bonuses = payroll.bonuses - cestaBasica;
  if (cestaBasica > 0) {
    earnings.push({
      id: "basic-basket",
      label: "Cesta Básica",
      value: cestaBasica,
      description: "Benefício",
    });
  }
  if (bonuses > 0) {
    earnings.push({ id: "bonuses", label: "Bônus / Adicionais", value: bonuses });
  }
  if (positive(payroll.transportTotal) > 0) {
    const scheduledTransportDays = positive(payroll.workingDays);
    const absentTransportDays = positive(payroll.absencesVT);
    const paidTransportDays = Math.max(0, scheduledTransportDays - absentTransportDays);
    earnings.push({
      id: "transport",
      label: "Vale Transporte (Recebimento)",
      value: payroll.transportTotal ?? 0,
      description: `${scheduledTransportDays} dias previstos - ${absentTransportDays} faltas VT = ${paidTransportDays} dias pagos × ${formatCurrency(positive(employee.transportDaily))}`,
    });
  }

  if (isCLT && positive(payroll.inssDeduction) > 0) {
    deductions.push({
      id: "inss",
      label: "INSS",
      value: payroll.inssDeduction,
      description: "Desconto Previdenciário",
    });
  }
  if (isCLT && positive(payroll.irrfDeduction) > 0) {
    deductions.push({
      id: "irrf",
      label: "IRRF",
      value: payroll.irrfDeduction,
      description: "Imposto de Renda (Retido na Fonte)",
    });
  }
  if (positive(payroll.absenceDeduction) > 0) {
    deductions.push({
      id: "absence",
      label: "Faltas",
      value: payroll.absenceDeduction,
      description: `${payroll.absences} dias`,
    });
  }
  if (positive(payroll.salaryAdvance) > 0) {
    deductions.push({ id: "advance", label: "Adiantamento Mensal", value: payroll.salaryAdvance });
  }
  if (positive(payroll.otherDeductions) > 0) {
    deductions.push({
      id: "other",
      label: "Outros Descontos",
      value: payroll.otherDeductions,
      description: "Saúde, etc.",
    });
  }

  const gross = earnings.reduce((total, earning) => total + earning.value, 0);
  const totalDeductions = deductions.reduce((total, deduction) => total + deduction.value, 0);

  return {
    payrollId: payroll.id,
    competency: `${months[payroll.month - 1] ?? "competência"} de ${payroll.year}`,
    employee,
    baseSalary: payroll.baseSalary,
    status: payroll.status,
    earnings,
    deductions,
    totals: {
      gross: roundCurrency(gross),
      deductions: roundCurrency(totalDeductions),
      net: payroll.netTotal,
    },
    fgtsValue: isCLT ? payroll.fgtsValue : null,
  };
}
