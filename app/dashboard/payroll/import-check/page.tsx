import { prisma } from "@/lib/prisma"
import ImportCheckClient from "./ImportCheckClient"

export default async function ImportCheckPage() {
  // Para fins de demonstração do double-check automático, vamos buscar os funcionários
  // Na versão final real, você buscaria os registros `Payroll` do mês específico.
  // Aqui, vamos calcular "on the fly" baseado nos funcionários ativos apenas para gerar o "Valor App".
  
  const employees = await prisma.employee.findMany({
    where: { active: true }
  })

  // Buscamos os registros de payroll para cruzamento
  const payrolls = await prisma.payroll.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="container mx-auto py-8">
      <ImportCheckClient employees={employees} payrolls={payrolls} />
    </div>
  )
}
