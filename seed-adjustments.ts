import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './lib/generated/client/index.js';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  const employeeName = "teste da silva";
  const employee = await prisma.employee.findFirst({
    where: {
      name: {
        contains: employeeName,
        mode: 'insensitive'
      }
    }
  });

  if (!employee) {
    console.error(`Employee ${employeeName} not found.`);
    return;
  }

  console.log(`Found employee: ${employee.name} (${employee.id})`);

  // Delete existing adjustments for clean slate
  await prisma.salaryAdjustment.deleteMany({
    where: { employeeId: employee.id }
  });

  // Create 3 historical adjustments
  const adjustments = [
    {
      employeeId: employee.id,
      effectiveDate: new Date('2025-01-01T00:00:00Z'),
      previousSalary: 2000,
      newSalary: 2200,
      adjustmentValue: 200,
      notes: 'Dissídio anual 2025'
    },
    {
      employeeId: employee.id,
      effectiveDate: new Date('2025-06-01T00:00:00Z'),
      previousSalary: 2200,
      newSalary: 2500,
      adjustmentValue: 300,
      notes: 'Promoção por mérito'
    },
    {
      employeeId: employee.id,
      effectiveDate: new Date('2026-01-01T00:00:00Z'),
      previousSalary: 2500,
      newSalary: 3000,
      adjustmentValue: 500,
      notes: 'Dissídio anual 2026'
    }
  ];

  for (const adj of adjustments) {
    await prisma.salaryAdjustment.create({
      data: adj
    });
  }

  console.log('Successfully created 3 salary adjustments.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
