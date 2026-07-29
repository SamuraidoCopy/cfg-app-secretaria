import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const source = readFileSync(new URL("../app/relatorios/ReportClient.tsx", import.meta.url), "utf8");

test("renders accessible regular-payroll detail controls and print-ready panels in both payment reports", () => {
  assert.match(source, /toggleExpandedPayrollId/);
  assert.match(source, /aria-controls=\{`monthly-payroll-details-\$\{p\.id\}`\}/);
  assert.match(source, /aria-controls=\{`collaborator-payroll-details-\$\{p\.id\}`\}/);
  assert.match(source, /panelId=\{`monthly-payroll-details-\$\{p\.id\}`\}/);
  assert.match(source, /panelId=\{`collaborator-payroll-details-\$\{p\.id\}`\}/);
  assert.match(source, /hidden=\{!isMonthlyExpanded\}/);
  assert.match(source, /hidden=\{!isCollaboratorExpanded\}/);
  assert.match(source, /print:block/);
});
