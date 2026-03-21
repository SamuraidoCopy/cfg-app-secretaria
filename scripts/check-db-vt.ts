import { prisma } from '../lib/prisma'
require('dotenv').config()


async function checkEmployeesVT() {
  const employees = await prisma.employee.findMany();
  console.log('--- Employee VT Daily Rates ---');
  employees.forEach(e => {
    if (e.transportDaily) {
      console.log(`${e.name}: ${e.transportDaily} (Type: ${typeof e.transportDaily})`);
    }
  });
  
  const payrolls = await prisma.payroll.findMany({
    include: { employee: true },
    orderBy: { createdAt: 'desc' },
    take: 5
  });
  
  console.log('\n--- Recent Payroll VT Totals ---');
  payrolls.forEach(p => {
    console.log(`${p.employee.name}: ${p.transportTotal} (WorkingDays: ${p.workingDays}, AbsVT: ${p.absencesVT})`);
  });
}

checkEmployeesVT();
