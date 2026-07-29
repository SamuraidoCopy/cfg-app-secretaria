import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import ts from "typescript";

const require = createRequire(import.meta.url);

function loadComponent() {
  const source = readFileSync(new URL("../app/components/PayrollCalculationDetails.tsx", import.meta.url), "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
  });
  const compiledModule = { exports: {} };
  vm.runInNewContext(compiled.outputText, {
    exports: compiledModule.exports,
    module: compiledModule,
    require,
  });
  return compiledModule.exports.default;
}

const cltBreakdown = {
  payrollId: "payroll-clt-1",
  competency: "julho de 2026",
  employee: {
    id: "employee-1",
    name: "Maria da Silva",
    role: "Professora",
    type: "CLT",
    baseSalary: 0,
    hourlyRate: 31.12,
    cestaBasica: 0,
    isAulista: true,
  },
  baseSalary: 0,
  status: "PAID",
  earnings: [
    { id: "classes", label: "Aulas do mês", value: 2521.65, description: "81,03 aulas × R$31,12" },
    { id: "dsr", label: "DSR", value: 420.36 },
    { id: "activity", label: "Hora Atividade", value: 126.08 },
  ],
  deductions: [{ id: "inss", label: "INSS", value: 257.91 }],
  totals: { gross: 3068.09, deductions: 130.71, net: 2937.38 },
  fgtsValue: 245.45,
};

test("renders a detailed CLT calculation panel with collaborator, items, totals and FGTS", () => {
  const PayrollCalculationDetails = loadComponent();
  const html = renderToStaticMarkup(createElement(PayrollCalculationDetails, {
    breakdown: cltBreakdown,
    panelId: "clt-calculation-panel",
  }));

  assert.match(html, /id="clt-calculation-panel"/);
  assert.match(html, /Dados do Colaborador/);
  assert.match(html, /Maria da Silva/);
  assert.match(html, /Professora/);
  assert.match(html, /CLT/);
  assert.match(html, /Valor Hora-Aula/);
  assert.match(html, /PAGO/);
  assert.match(html, /Aulas do mês/);
  assert.match(html, /INSS/);
  assert.match(html, /R\$2\.937,38/);
  assert.match(html, /Recolhimento FGTS/);
});

test("does not render the FGTS section for PJ breakdowns without fgtsValue", () => {
  const PayrollCalculationDetails = loadComponent();
  const html = renderToStaticMarkup(createElement(PayrollCalculationDetails, {
    breakdown: {
      ...cltBreakdown,
      payrollId: "payroll-pj-1",
      employee: { ...cltBreakdown.employee, type: "PJ", role: "Consultora", isAulista: false, hourlyRate: null },
      status: "PENDING",
      fgtsValue: null,
    },
    variant: "embedded",
    panelId: "pj-calculation-panel",
  }));

  assert.match(html, /id="pj-calculation-panel"/);
  assert.match(html, /PENDENTE/);
  assert.doesNotMatch(html, /Recolhimento FGTS/);
});
