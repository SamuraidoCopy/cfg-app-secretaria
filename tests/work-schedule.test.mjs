import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";
import ts from "typescript";

const source = readFileSync(new URL("../lib/work-schedule.ts", import.meta.url), "utf8");
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
  calculateAulistaMonthlyLessons,
  countScheduledWorkDays,
  formatWeekdaySummary,
  normalizeWeekdays,
  sumScheduledHours,
} = compiledModule.exports;

const assignments = [
  { weekday: 1, hours: 2.5 },
  { weekday: 3, hours: 3 },
  { weekday: 5, hours: 1.5 },
];

test("normalizes unique weekdays in order", () => {
  assert.equal(JSON.stringify(normalizeWeekdays([
    { weekday: 5, hours: 1 },
    { weekday: 1, hours: 1 },
    { weekday: 5, hours: 2 },
    { weekday: 9, hours: 3 },
  ])), JSON.stringify([1, 5]));
});

test("counts scheduled work days for a date range", () => {
  assert.equal(countScheduledWorkDays("2026-06-01", "2026-06-07", assignments), 3);
  assert.equal(countScheduledWorkDays("2026-06-08", "2026-06-14", assignments), 3);
});

test("sums scheduled teaching hours across the period", () => {
  assert.equal(sumScheduledHours("2026-06-01", "2026-06-07", assignments), 7);
  assert.equal(sumScheduledHours("2026-06-01", "2026-06-14", assignments), 14);
});

test("calculates monthly aulista lessons by weekly lessons times 4.5", () => {
  const result = calculateAulistaMonthlyLessons([
    { weekday: 1, hours: 0.75, lessonStart: 1, lessonEnd: 1 },
    { weekday: 3, hours: 0.75, lessonStart: 1, lessonEnd: 1 },
  ]);

  assert.equal(result.weeklyLessons, 2);
  assert.equal(result.monthlyLessons, 9);
  assert.equal(result.equivalentClockHours, 6.75);
});

test("counts selected lessons as paid lesson units, not 0.75 clock hours", () => {
  const result = calculateAulistaMonthlyLessons([
    { weekday: 1, hours: 0.75, lessonStart: 1, lessonEnd: 1 },
    { weekday: 1, hours: 0.75, lessonStart: 2, lessonEnd: 2 },
    { weekday: 4, hours: 0.75, lessonStart: 5, lessonEnd: 5 },
  ]);

  assert.equal(result.weeklyLessons, 3);
  assert.equal(result.monthlyLessons, 13.5);
});

test("uses full-day clock hours to derive equivalent lesson count", () => {
  const result = calculateAulistaMonthlyLessons([
    { weekday: 2, hours: 4.5, fullDay: true },
  ]);

  assert.equal(result.weeklyLessons, 6);
  assert.equal(result.monthlyLessons, 27);
  assert.equal(result.equivalentClockHours, 20.25);
});

test("returns zero when range is invalid or schedule is empty", () => {
  assert.equal(countScheduledWorkDays("2026-06-10", "2026-06-01", assignments), 0);
  assert.equal(sumScheduledHours("2026-06-01", "2026-06-07", []), 0);
});

test("formats weekday summary for collaborator list", () => {
  assert.equal(formatWeekdaySummary(assignments), "Segunda, Quarta, Sexta");
  assert.equal(formatWeekdaySummary([]), "Sem agenda");
});
