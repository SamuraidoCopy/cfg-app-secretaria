export function toggleExpandedPayrollId(current: ReadonlySet<string>, id: string): Set<string> {
  const next = new Set(current);

  if (next.has(id)) {
    next.delete(id);
  } else {
    next.add(id);
  }

  return next;
}
