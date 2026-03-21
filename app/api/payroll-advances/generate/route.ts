import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { month, year } = body;

    if (!month || !year) {
      return NextResponse.json({ error: 'Mês e ano são obrigatórios.' }, { status: 400 });
    }

    // Find all active employees with a salary advance configured
    const employees = await prisma.employee.findMany({
      where: {
        active: true,
        salaryAdvance: { gt: 0 }
      }
    });

    if (employees.length === 0) {
      return NextResponse.json({ message: 'Nenhum colaborador com adiantamento configurado.', created: 0 });
    }

    // Upsert an advance for each employee for the given month/year
    const results = await Promise.all(
      employees.map(emp =>
        prisma.payrollAdvance.upsert({
          where: {
            employeeId_month_year: {
              employeeId: emp.id,
              month,
              year
            }
          },
          update: {
            amount: emp.salaryAdvance
          },
          create: {
            employeeId: emp.id,
            month,
            year,
            amount: emp.salaryAdvance,
            status: 'PENDING'
          }
        })
      )
    );

    return NextResponse.json({ success: true, created: results.length, advances: results });
  } catch (error: any) {
    console.error('Error generating advances:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const month = parseInt(searchParams.get('month') || '0');
  const year = parseInt(searchParams.get('year') || '0');

  const where: any = {};
  if (month > 0) where.month = month;
  if (year > 0) where.year = year;

  const advances = await prisma.payrollAdvance.findMany({
    where,
    include: { employee: true },
    orderBy: { employee: { name: 'asc' } }
  });

  return NextResponse.json({ advances });
}
