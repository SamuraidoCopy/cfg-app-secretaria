import { prisma } from './lib/prisma'

async function main() {
  const payrolls = await prisma.payroll.findMany({
    take: 10,
    orderBy: { createdAt: 'desc' },
    include: { employee: true }
  })
  
  console.log('--- Last 10 Payrolls ---')
  payrolls.forEach(p => {
    console.log(`- Emp: ${p.employee.name} | Month: ${p.month} | Year: ${p.year} | Status: ${p.status}`)
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
