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

// Tabela IRRF (Mensal) - Valores atuais
export const IRRF_BRACKETS = [
  { max: 2259.20, rate: 0, deduction: 0 },
  { max: 2826.65, rate: 0.075, deduction: 169.44 },
  { max: 3751.05, rate: 0.15, deduction: 381.44 },
  { max: 4664.68, rate: 0.225, deduction: 662.77 },
  { max: Infinity, rate: 0.275, deduction: 896.00 }
];

export const IRRF_SIMPLIFIED_DEDUCTION = 424.00; // Parcela de dedução simplificada (conforme extrato)

export function calculateIRRF(baseIrrf: number, useSimplified = true): number {
  if (baseIrrf <= 0) return 0;
  
  // A base do IRRF geralmente já abate o INSS. O desconto simplificado substitui
  // a dedução padrão de INSS + Dependentes se for mais vantajoso.
  // Como estamos apenas conferindo a contabilidade, podemos usar o método simplificado como default.
  
  const baseCalculo = useSimplified ? Math.max(0, baseIrrf - IRRF_SIMPLIFIED_DEDUCTION) : baseIrrf;
  
  for (const bracket of IRRF_BRACKETS) {
    if (baseCalculo <= bracket.max) {
      if (bracket.rate === 0) return 0;
      const tax = (baseCalculo * bracket.rate) - bracket.deduction;
      return Number(Math.max(0, tax).toFixed(2));
    }
  }
  return 0;
}

export function calculateFGTS(baseFgts: number): number {
  return Number((baseFgts * 0.08).toFixed(2));
}

/**
 * Lógica específica para Professores Aulistas (CLT):
 * 1. DSR: 1/6 (16.67%) do salário base (aulas)
 * 2. Hora Atividade: 5% do salário base (aulas)
 */
export function calculateTeacherComponents(baseAulas: number) {
  const dsr = Number((baseAulas * (1 / 6)).toFixed(2));
  const horaAtividade = Number((baseAulas * 0.05).toFixed(2));
  const baseInss = Number((baseAulas + dsr + horaAtividade).toFixed(2));
  
  return {
    dsr,
    horaAtividade,
    baseInss
  };
}
