export type Weekday = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type WorkScheduleAssignment = {
  weekday: number;
  hours: number | null;
  lessonStart?: number | null;
  lessonEnd?: number | null;
  fullDay?: boolean | null;
};

export const LESSON_CLOCK_HOURS = 0.75;
export const AULISTA_MONTH_WEEKS = 4.5;

export const WEEKDAY_LABELS: Record<Weekday, string> = {
  1: "Segunda",
  2: "Terca",
  3: "Quarta",
  4: "Quinta",
  5: "Sexta",
  6: "Sabado",
  7: "Domingo",
};

function parseLocalDate(date: string): Date | null {
  const [year, month, day] = date.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day, 12, 0, 0);
}

function toWeekday(date: Date): Weekday {
  const day = date.getDay();
  return (day === 0 ? 7 : day) as Weekday;
}

export function normalizeWeekdays(assignments: WorkScheduleAssignment[]): Weekday[] {
  const weekdays = new Set<Weekday>();

  for (const assignment of assignments) {
    if (Number.isInteger(assignment.weekday) && assignment.weekday >= 1 && assignment.weekday <= 7) {
      weekdays.add(assignment.weekday as Weekday);
    }
  }

  return [...weekdays].sort((a, b) => a - b);
}

export function countScheduledWorkDays(startDate: string, endDate: string, assignments: WorkScheduleAssignment[]): number {
  const start = parseLocalDate(startDate);
  const end = parseLocalDate(endDate);
  const weekdays = normalizeWeekdays(assignments);

  if (!start || !end || start > end || weekdays.length === 0) return 0;

  let total = 0;
  const current = new Date(start);

  while (current <= end) {
    if (weekdays.includes(toWeekday(current))) total += 1;
    current.setDate(current.getDate() + 1);
  }

  return total;
}

export function sumScheduledHours(startDate: string, endDate: string, assignments: WorkScheduleAssignment[]): number {
  const start = parseLocalDate(startDate);
  const end = parseLocalDate(endDate);

  if (!start || !end || start > end || assignments.length === 0) return 0;

  let total = 0;
  const current = new Date(start);

  while (current <= end) {
    const weekday = toWeekday(current);
    for (const assignment of assignments) {
      if (assignment.weekday === weekday) {
        total += assignment.hours || 0;
      }
    }
    current.setDate(current.getDate() + 1);
  }

  return Number(total.toFixed(2));
}

function countAssignmentLessons(assignment: WorkScheduleAssignment): number {
  if (assignment.fullDay) {
    return Math.max(0, (assignment.hours || 0) / LESSON_CLOCK_HOURS);
  }

  if (
    Number.isInteger(assignment.lessonStart) &&
    Number.isInteger(assignment.lessonEnd) &&
    assignment.lessonStart &&
    assignment.lessonEnd &&
    assignment.lessonEnd >= assignment.lessonStart
  ) {
    return assignment.lessonEnd - assignment.lessonStart + 1;
  }

  if (Number.isInteger(assignment.lessonStart)) {
    return 1;
  }

  return Math.max(0, (assignment.hours || 0) / LESSON_CLOCK_HOURS);
}

export function sumWeeklyLessons(assignments: WorkScheduleAssignment[]): number {
  const total = assignments.reduce((sum, assignment) => sum + countAssignmentLessons(assignment), 0);
  return Number(total.toFixed(2));
}

export function calculateAulistaMonthlyLessons(assignments: WorkScheduleAssignment[]) {
  const weeklyLessons = sumWeeklyLessons(assignments);
  const monthlyLessons = Number((weeklyLessons * AULISTA_MONTH_WEEKS).toFixed(2));
  const equivalentClockHours = Number((monthlyLessons * LESSON_CLOCK_HOURS).toFixed(2));

  return {
    weeklyLessons,
    monthlyLessons,
    equivalentClockHours,
  };
}

export function formatWeekdaySummary(assignments: WorkScheduleAssignment[]): string {
  const weekdays = normalizeWeekdays(assignments);
  if (weekdays.length === 0) return "Sem agenda";
  return weekdays.map((day) => WEEKDAY_LABELS[day]).join(", ");
}
