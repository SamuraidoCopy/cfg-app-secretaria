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
const { buildPayrollBreakdown } = compileModule("../lib/payroll-breakdown.ts", (dependency) => {
  if (dependency === "./payroll-calc") return payrollCalc;
  throw new Error(`Unexpected dependency: ${dependency}`);
});

function item(items, id) {
  const found = items.find((entry) => entry.id === id);
  assert.ok(found, `expected item ${id}`);
  return found;
}

test("builds the detailed CLT aulista payroll breakdown from persisted values", () => {
  const breakdown = buildPayrollBreakdown({
    employee: {
      type: "CLT",
      role: "Professora",
      baseSalary: 0,
      hourlyRate: 31.12,
      cestaBasica: 0,
      isAulista: true,
    },
    payroll: {
      baseSalary: 0,
      hoursAulista: 81.03,
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
  assert.equal(item(breakdown.deductions, "inss").value, 257.91);
  assert.equal(item(breakdown.deductions, "transport-absence").value, 21.20);
  assert.equal(breakdown.totals.gross, 3068.09);
  assert.equal(breakdown.totals.deductions, 279.11);
  assert.equal(breakdown.totals.net, 2937.38);
  assert.equal(breakdown.fgtsValue, 245.45);
});
