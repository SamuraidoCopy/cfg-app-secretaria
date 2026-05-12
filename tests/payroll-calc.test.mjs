import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";
import ts from "typescript";

const source = readFileSync(new URL("../lib/payroll-calc.ts", import.meta.url), "utf8");
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
});

const {
  IRRF_SIMPLIFIED_DEDUCTION,
  calculateIRRF,
  calculateIRRFBase,
  calculateProgressiveIRRF,
  isIRRF2026ReductionEffective,
} = compiledModule.exports;

const jan2026 = { competency: { month: 1, year: 2026 } };
const dec2025 = { competency: { month: 12, year: 2025 } };

test("uses the 05/2025 simplified deduction", () => {
  assert.equal(IRRF_SIMPLIFIED_DEDUCTION, 607.20);
});

test("exempts taxable earnings up to R$ 5,000.00 from IRRF in 2026", () => {
  assert.equal(calculateIRRF(5000, 0, jan2026), 0);
});

test("applies the additional 2026 reduction between R$ 5,000.01 and R$ 7,350.00", () => {
  assert.equal(calculateIRRFBase(5256, 0), 4648.80);
  assert.equal(calculateProgressiveIRRF(4648.80), 370.49);
  assert.equal(calculateIRRF(5256, 0, jan2026), 91.68);
});

test("does not apply the additional reduction above R$ 7,350.00", () => {
  assert.equal(calculateIRRFBase(7900, 915.58), 6984.42);
  assert.equal(calculateIRRF(7900, 915.58, jan2026), 1011.99);
});

test("does not apply the 2026 reduction before January 2026", () => {
  assert.equal(isIRRF2026ReductionEffective({ month: 0, year: 2026 }), false);
  assert.equal(isIRRF2026ReductionEffective({ month: 12, year: 2025 }), false);
  assert.equal(calculateIRRF(5000, 0, dec2025), 312.89);
  assert.equal(calculateIRRF(5256, 0, dec2025), 370.49);
});

test("covers the 2026 reduction range boundaries", () => {
  assert.equal(calculateIRRF(5000.00, 0, jan2026), 0);
  assert.equal(calculateIRRF(5000.01, 0, jan2026), 0);
  assert.equal(calculateIRRF(7350.00, 0, jan2026), 945.54);
  assert.equal(calculateIRRF(7350.01, 0, jan2026), 945.54);
});

test("keeps dependent deductions and the legal-vs-simplified base choice", () => {
  assert.equal(calculateIRRFBase(7000, 700), 6300.00);
  assert.equal(calculateIRRFBase(7000, 700, 2), 5920.82);
});
