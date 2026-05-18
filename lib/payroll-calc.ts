// lib/payroll-calc.ts

export interface InssBracket {
  floor: number;
  ceiling: number;
  rate: number;
}

export const inssTable2026: InssBracket[] = [
  { floor: 0, ceiling: 1621.00, rate: 0.075 },
  { floor: 1621.00, ceiling: 2865.00, rate: 0.090 },
  { floor: 2865.00, ceiling: 4296.00, rate: 0.120 },
  { floor: 4296.00, ceiling: 8475.55, rate: 0.140 }
];

export function calculateProgressiveINSS(baseValue: number, brackets: InssBracket[]): number {
  let totalTax = 0;
  for (const bracket of brackets) {
    if (baseValue > bracket.floor) {
      const taxableInThisBracket = Math.min(baseValue, bracket.ceiling) - bracket.floor;
      totalTax += taxableInThisBracket * bracket.rate;
    } else {
      break;
    }
  }
  return Math.round(totalTax * 100) / 100;
}

// Tabela IRRF (Mensal) vigente a partir de 05/2025.
export const IRRF_BRACKETS = [
  { max: 2428.80, rate: 0, deduction: 0 },
  { max: 2826.65, rate: 0.075, deduction: 182.16 },
  { max: 3751.05, rate: 0.15, deduction: 394.16 },
  { max: 4664.68, rate: 0.225, deduction: 675.49 },
  { max: Infinity, rate: 0.275, deduction: 908.73 }
];

export const IRRF_SIMPLIFIED_DEDUCTION = 607.20;
export const IRRF_DEPENDENT_DEDUCTION = 189.59;
export const IRRF_2026_EXEMPTION_LIMIT = 5000.00;
export const IRRF_2026_REDUCTION_LIMIT = 7350.00;
export const IRRF_2026_REDUCTION_FIXED = 978.62;
export const IRRF_2026_REDUCTION_FACTOR = 0.133145;

export interface PayrollCompetency {
  month: number;
  year: number;
}

export interface IRRFCalculationOptions {
  dependents?: number;
  competency?: PayrollCompetency;
}

function roundCurrency(value: number): number {
  return Number(value.toFixed(2));
}

function normalizeIRRFOptions(
  dependentsOrOptions: number | IRRFCalculationOptions = 0,
  competency?: PayrollCompetency
): Required<IRRFCalculationOptions> {
  if (typeof dependentsOrOptions === "number") {
    return {
      dependents: dependentsOrOptions,
      competency: competency ?? { month: 0, year: 0 }
    };
  }

  return {
    dependents: dependentsOrOptions.dependents ?? 0,
    competency: dependentsOrOptions.competency ?? { month: 0, year: 0 }
  };
}

export function isIRRF2026ReductionEffective(competency?: PayrollCompetency): boolean {
  if (!competency) return false;
  const hasValidMonth = Number.isInteger(competency.month) && competency.month >= 1 && competency.month <= 12;
  return hasValidMonth && competency.year >= 2026;
}

export function calculateIRRFBase(grossEarnings: number, inssDeduction: number, dependents: number = 0): number {
  if (grossEarnings <= 0) return 0;

  const dependentDeduction = dependents * IRRF_DEPENDENT_DEDUCTION;
  const legalBase = grossEarnings - inssDeduction - dependentDeduction;
  const simplifiedBase = grossEarnings - IRRF_SIMPLIFIED_DEDUCTION;

  return roundCurrency(Math.max(0, Math.min(legalBase, simplifiedBase)));
}

export function calculateProgressiveIRRF(baseCalculo: number): number {
  if (baseCalculo <= 0) return 0;

  for (const bracket of IRRF_BRACKETS) {
    if (baseCalculo <= bracket.max) {
      const tax = (baseCalculo * bracket.rate) - bracket.deduction;
      return roundCurrency(Math.max(0, tax));
    }
  }

  return 0;
}

export function calculateIRRF(
  grossEarnings: number,
  inssDeduction: number,
  dependentsOrOptions: number | IRRFCalculationOptions = 0,
  competency?: PayrollCompetency
): number {
  if (grossEarnings <= 0) return 0;

  const options = normalizeIRRFOptions(dependentsOrOptions, competency);
  const baseCalculo = calculateIRRFBase(grossEarnings, inssDeduction, options.dependents);
  const progressiveTax = calculateProgressiveIRRF(baseCalculo);

  if (!isIRRF2026ReductionEffective(options.competency)) {
    return progressiveTax;
  }

  if (grossEarnings <= IRRF_2026_EXEMPTION_LIMIT) return 0;

  if (grossEarnings <= IRRF_2026_REDUCTION_LIMIT) {
    const additionalReduction = IRRF_2026_REDUCTION_FIXED - (IRRF_2026_REDUCTION_FACTOR * grossEarnings);
    return roundCurrency(Math.max(0, progressiveTax - additionalReduction));
  }

  return progressiveTax;
}

export function calculateFGTS(baseFgts: number): number {
  return Number((baseFgts * 0.08).toFixed(2));
}

export const TEACHER_DSR_RATE = 0.1667;
export const TEACHER_ACTIVITY_RATE = 0.05;

/**
 * Logica especifica para Professores Aulistas (CLT):
 * 1. Hora Atividade: 5% do salario base (aulas)
 * 2. DSR: 16,67% do salario base (aulas)
 */
export function calculateTeacherComponents(baseAulas: number) {
  const horaAtividade = Number((baseAulas * TEACHER_ACTIVITY_RATE).toFixed(2));
  const dsr = Number((baseAulas * TEACHER_DSR_RATE).toFixed(2));
  const baseInss = Number((baseAulas + dsr + horaAtividade).toFixed(2));

  return {
    dsr,
    horaAtividade,
    baseInss
  };
}
