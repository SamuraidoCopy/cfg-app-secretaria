import { prisma } from "../../../../lib/prisma"
import CLTCheckForm from "./CLTCheckForm"

export default async function CLTCheckPage() {
  const employees = await prisma.employee.findMany({
    where: {
      active: true,
      // Se tivermos certeza de que type === 'CLT' é usado:
      // type: 'CLT'
    },
    orderBy: { name: 'asc' }
  })

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Conferência Folha Mensal CLT</h1>
      <p className="text-gray-600 mb-8">
        Use esta ferramenta para fazer o double-check dos valores enviados pela contabilidade.
      </p>
      
      <CLTCheckForm employees={employees} />
    </div>
  )
}
