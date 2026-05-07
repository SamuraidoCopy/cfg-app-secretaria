import { prisma } from "@/lib/prisma"
import ImportCheckClient from "./ImportCheckClient"

export const dynamic = 'force-dynamic'

export default async function ImportCheckPage() {
  // Para fins de demonstração do double-check automático, vamos buscar os funcionários
  // Na versão final real, você buscaria os registros `Payroll` do mês específico.
  // Aqui, vamos calcular "on the fly" baseado nos funcionários ativos apenas para gerar o "Valor App".
  
  const employees = await prisma.employee.findMany({
    where: { active: true }
  })

  const payrolls = await prisma.payroll.findMany({
    orderBy: { createdAt: 'desc' }
  })

  const rescisoes = await prisma.rescisao.findMany({
    orderBy: { createdAt: 'desc' }
  })

  // Injetar flag isRescisao nas rescisões para o cliente identificar
  const mappedRescisoes = rescisoes.map(r => ({
    ...r,
    isRescisao: true,
    // Mapear campos para compatibilidade básica de tipos se necessário
    grossEarnings: r.totalBruto,
    inssDeduction: r.inss, // Na rescisão usamos o inss (saldo) ou a soma? No PDF da contabilidade vem separado? 
    // Geralmente no PDF vem a base INSS e o desconto.
  }))


  return (
    <div className="container mx-auto py-8">
      <ImportCheckClient employees={employees} payrolls={[...payrolls, ...mappedRescisoes] as any[]} />
    </div>
  )
}
