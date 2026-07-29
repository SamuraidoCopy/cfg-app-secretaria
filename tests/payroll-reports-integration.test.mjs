import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const source = readFileSync(new URL("../app/relatorios/ReportClient.tsx", import.meta.url), "utf8");
const reportPageSource = readFileSync(new URL("../app/relatorios/page.tsx", import.meta.url), "utf8");

test("opens each regular payroll calculation in an accessible dialog without expanding the report table", () => {
  assert.match(source, /selectedPayrollDetails/);
  assert.match(source, /setSelectedPayrollDetails\(buildPayrollBreakdown\(breakdownInput\)\)/);
  assert.match(source, /role="dialog"/);
  assert.match(source, /aria-modal="true"/);
  assert.match(source, /Fechar detalhes/);
  assert.match(source, /z-\[999\]/);
  assert.doesNotMatch(source, /overflow-y-auto p-4 sm:p-6/);
  assert.doesNotMatch(reportPageSource, /relative z-0/);
  assert.doesNotMatch(source, /toggleExpandedPayrollId/);
  assert.doesNotMatch(source, /monthly-payroll-details-/);
  assert.doesNotMatch(source, /collaborator-payroll-details-/);
});
