import { prisma } from './lib/prisma'

async function main() {
  const payroll = await prisma.payroll.findFirst({
    where: {
      grossEarnings: {
        gte: 2305,
        lte: 2306
      }
    },
    include: { employee: true }
  })
  
  if (payroll) {
    console.log('Employee Found:', payroll.employee.name)
    console.log('App Gross:', payroll.grossEarnings)
    console.log('App Bonuses:', payroll.bonuses)
    console.log('App Cesta:', payroll.employee.cestaBasica)
    console.log('Total Net:', payroll.netTotal)
  } else {
    console.log('No payroll found with gross ~2305.84')
  }
}

main().catch(console.error).finally(() => prisma.$disconnect())
