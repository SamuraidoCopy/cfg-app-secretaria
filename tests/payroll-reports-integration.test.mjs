import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const source = readFileSync(new URL("../app/relatorios/ReportClient.tsx", import.meta.url), "utf8");
const reportPageSource = readFileSync(new URL("../app/relatorios/page.tsx", import.meta.url), "utf8");

test("uses the native dialog top layer for payroll details", () => {
  assert.match(source, /selectedPayrollDetails/);
  assert.match(source, /setSelectedPayrollDetails\(buildPayrollBreakdown\(breakdownInput\)\)/);
  assert.match(source, /<dialog/);
  assert.match(source, /showModal\(\)/);
  assert.match(source, /onCancel=/);
  assert.match(source, /data-testid="payroll-details-dialog"/);
  assert.match(source, /overflow-y-auto/);
  assert.match(source, /overflow-x-hidden/);
  assert.match(source, /Fechar detalhes/);
  assert.doesNotMatch(source, /role="dialog"/);
  assert.doesNotMatch(source, /fixed inset-0 z-\[999\]/);
  assert.doesNotMatch(reportPageSource, /relative z-0/);
  assert.doesNotMatch(source, /toggleExpandedPayrollId/);
  assert.doesNotMatch(source, /monthly-payroll-details-/);
  assert.doesNotMatch(source, /collaborator-payroll-details-/);
});

test("prints regular payrolls through one scoped A4 page component", () => {
  assert.match(source, /<PayrollPrintPage/);
  assert.match(source, /filter\(\(p\) => !p\.isRescisao\)/);
  assert.doesNotMatch(source, /Scorched Earth Reset/);
  assert.doesNotMatch(source, /dangerouslySetInnerHTML/);
});
