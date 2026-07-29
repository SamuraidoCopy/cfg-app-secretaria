import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";
import ts from "typescript";

function compileModule(path, require = () => {
  throw new Error("Unexpected dependency");
}) {
  const source = readFileSync(new URL(path, import.meta.url), "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  });
  const compiledModule = { exports: {} };
  vm.runInNewContext(compiled.outputText, {
    exports: compiledModule.exports,
    module: compiledModule,
    require,
  });
  return compiledModule.exports;
}

const payrollCalc = compileModule("../lib/payroll-calc.ts");
function loadPayrollBreakdown(calculator = payrollCalc) {
  return compileModule("../lib/payroll-breakdown.ts", (dependency) => {
    if (dependency === "./payroll-calc") return calculator;
    throw new Error(`Unexpected dependency: ${dependency}`);
  });
}

const { buildPayrollBreakdown } = loadPayrollBreakdown();

function item(items, id) {
  const found = items.find((entry) => entry.id === id);
  assert.ok(found, `expected item ${id}`);
  return found;
}

test("builds the detailed CLT aulista payroll breakdown from persisted values", () => {
  const breakdown = buildPayrollBreakdown({
    employee: {
      id: "employee-clt-aulista",
      name: "Maria da Silva",
      type: "CLT",
      role: "Professora",
      baseSalary: 0,
      hourlyRate: 31.12,
      cestaBasica: 0,
      isAulista: true,
      transportDaily: 10.60,
    },
    payroll: {
      id: "payroll-clt-aulista",
      month: 7,
      year: 2026,
      status: "PAID",
      baseSalary: 0,
      hoursAulista: 81.03,
      workingDays: 14,
      transportTotal: 127.20,
      absences: 0,
      absenceDeduction: 0,
      absencesVT: 2,
      transportDeduction: 21.20,
      otherDeductions: 0,
      bonuses: 0,
      grossEarnings: 3068.09,
      inssDeduction: 257.91,
      irrfDeduction: 0,
      fgtsValue: 245.45,
      salaryAdvance: 0,
      netTotal: 2937.38,
    },
  });

  assert.equal(item(breakdown.earnings, "classes").value, 2521.65);
  assert.equal(item(breakdown.earnings, "classes").description, "81,03 aulas × R$ 31,12");
  assert.equal(item(breakdown.earnings, "dsr").value, 420.36);
  assert.equal(item(breakdown.earnings, "activity").value, 126.08);
  assert.equal(item(breakdown.earnings, "transport").value, 127.20);
  assert.equal(
    item(breakdown.earnings, "transport").description,
    "14 dias previstos - 2 faltas VT = 12 dias pagos × R$ 10,60",
  );
  assert.equal(item(breakdown.deductions, "inss").value, 257.91);
  assert.equal(breakdown.deductions.some((entry) => entry.id === "transport-absence"), false);
  assert.equal(breakdown.totals.gross, 3195.29);
  assert.equal(breakdown.totals.deductions, 257.91);
  assert.equal(breakdown.totals.net, 2937.38);
  assert.equal(
    Number((breakdown.totals.gross - breakdown.totals.deductions).toFixed(2)),
    breakdown.totals.net,
  );
  assert.equal(breakdown.fgtsValue, 245.45);
});

test("passes the unrounded class base to the teacher component calculator", () => {
  let receivedBase = null;
  const { buildPayrollBreakdown: buildWithSpy } = loadPayrollBreakdown({
    calculateTeacherComponents(base) {
      receivedBase = base;
      return { dsr: 420.36, horaAtividade: 126.08, baseInss: 3068.09 };
    },
  });

  buildWithSpy({
    employee: {
      id: "employee-clt-spy",
      name: "Maria da Silva",
      type: "CLT",
      role: "Professora",
      baseSalary: 0,
      hourlyRate: 31.12,
      cestaBasica: 0,
      isAulista: true,
    },
    payroll: {
      id: "payroll-clt-spy",
      month: 7,
      year: 2026,
      status: "PAID",
      baseSalary: 0,
      hoursAulista: 81.03,
      transportTotal: 0,
      absences: 0,
      absenceDeduction: 0,
      absencesVT: 0,
      transportDeduction: 0,
      otherDeductions: 0,
      bonuses: 0,
      grossEarnings: 3068.09,
      inssDeduction: 0,
      irrfDeduction: 0,
      fgtsValue: 0,
      salaryAdvance: 0,
      netTotal: 3068.09,
    },
  });

  assert.equal(receivedBase, 2521.6536);
});

test("includes only positive conditional earnings for a non-hourly CLT teacher", () => {
  const breakdown = buildPayrollBreakdown({
    employee: {
      id: "employee-clt-teacher",
      name: "Ana Souza",
      type: "CLT",
      role: "Professora Coordenadora",
      baseSalary: 4000,
      hourlyRate: null,
      cestaBasica: 250,
      isAulista: false,
    },
    payroll: {
      id: "payroll-clt-teacher",
      month: 7,
      year: 2026,
      status: "PENDING",
      baseSalary: 4000,
      transportTotal: 0,
      absences: 0,
      absenceDeduction: 0,
      absencesVT: 0,
      transportDeduction: 0,
      otherDeductions: 0,
      bonuses: 350,
      grossEarnings: 4550,
      inssDeduction: 0,
      irrfDeduction: 0,
      fgtsValue: 364,
      salaryAdvance: 0,
      netTotal: 4550,
    },
  });

  assert.deepEqual(
    Array.from(breakdown.earnings, (entry) => entry.id),
    ["salary", "activity", "basic-basket", "bonuses"],
  );
  assert.equal(item(breakdown.earnings, "basic-basket").value, 250);
  assert.equal(item(breakdown.earnings, "bonuses").value, 100);
  assert.equal(breakdown.earnings.some((entry) => entry.id === "transport"), false);
  assert.equal(breakdown.earnings.every((entry) => entry.value > 0), true);
});

test("hides residual CLT taxes and FGTS from a PJ breakdown totals", () => {
  const breakdown = buildPayrollBreakdown({
    employee: {
      id: "employee-pj",
      name: "Carla Lima",
      type: "PJ",
      role: "Consultora",
      baseSalary: 3000,
      hourlyRate: null,
      cestaBasica: 0,
      isAulista: false,
    },
    payroll: {
      id: "payroll-pj",
      month: 7,
      year: 2026,
      status: "PENDING",
      baseSalary: 3000,
      transportTotal: 200,
      absences: 1,
      absenceDeduction: 100,
      absencesVT: 0,
      transportDeduction: 0,
      otherDeductions: 25,
      bonuses: 0,
      grossEarnings: 3000,
      inssDeduction: 257.91,
      irrfDeduction: 80.42,
      fgtsValue: 240,
      salaryAdvance: 300,
      netTotal: 2575,
    },
  });

  assert.equal(breakdown.deductions.some((entry) => entry.id === "inss"), false);
  assert.equal(breakdown.deductions.some((entry) => entry.id === "irrf"), false);
  assert.equal(breakdown.fgtsValue, null);
  assert.equal(breakdown.totals.deductions, 425);
  assert.equal(
    breakdown.totals.deductions,
    breakdown.deductions.reduce((total, entry) => total + entry.value, 0),
  );
});

function assertReconciled(breakdown) {
  const credits = breakdown.earnings.reduce((sum, entry) => sum + entry.value, 0);
  const deductions = breakdown.deductions.reduce((sum, entry) => sum + entry.value, 0);

  assert.equal(breakdown.totals.gross, Number(credits.toFixed(2)));
  assert.equal(breakdown.totals.deductions, Number(deductions.toFixed(2)));
  assert.ok(
    Math.abs(breakdown.totals.gross - breakdown.totals.deductions - breakdown.totals.net) <= 0.01,
    `breakdown ${breakdown.payrollId} is not reconciled`,
  );
}

test("reconciles a monthly CLT absence exactly once", () => {
  const breakdown = buildPayrollBreakdown({
    employee: {
      id: "employee-clt-monthly",
      name: "Joana",
      type: "CLT",
      role: "Coordenadora",
      baseSalary: 2500,
      hourlyRate: null,
      cestaBasica: 0,
      isAulista: false,
      transportDaily: 10.60,
    },
    payroll: {
      id: "payroll-clt-monthly",
      month: 7,
      year: 2026,
      status: "PAID",
      baseSalary: 2500,
      workingDays: 22,
      transportTotal: 212,
      absences: 1,
      absenceDeduction: 100,
      absencesVT: 2,
      transportDeduction: 21.20,
      otherDeductions: 50,
      bonuses: 0,
      grossEarnings: 2400,
      inssDeduction: 200,
      irrfDeduction: 0,
      fgtsValue: 192,
      salaryAdvance: 0,
      hoursAulista: null,
      netTotal: 2362,
    },
  });

  assert.equal(breakdown.deductions.some((entry) => entry.id === "transport-absence"), false);
  assertReconciled(breakdown);
});

test("reconciles PJ without CLT-only deductions", () => {
  const breakdown = buildPayrollBreakdown({
    employee: {
      id: "employee-pj-reconciled",
      name: "Empresa Teste",
      type: "PJ",
      role: "Consultoria",
      baseSalary: 3000,
      hourlyRate: null,
      cestaBasica: 0,
      isAulista: false,
      transportDaily: 10,
    },
    payroll: {
      id: "payroll-pj-reconciled",
      month: 7,
      year: 2026,
      status: "PENDING",
      baseSalary: 3000,
      workingDays: 20,
      transportTotal: 190,
      absences: 1,
      absenceDeduction: 100,
      absencesVT: 1,
      transportDeduction: 10,
      otherDeductions: 25,
      bonuses: 0,
      grossEarnings: 2900,
      inssDeduction: 257.91,
      irrfDeduction: 80.42,
      fgtsValue: 240,
      salaryAdvance: 300,
      hoursAulista: null,
      netTotal: 2765,
    },
  });

  assert.equal(
    breakdown.deductions.some((entry) => ["inss", "irrf", "transport-absence"].includes(entry.id)),
    false,
  );
  assert.equal(breakdown.fgtsValue, null);
  assertReconciled(breakdown);
});
