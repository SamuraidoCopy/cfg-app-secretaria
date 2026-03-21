import { prisma } from "@/lib/prisma"
import AdvancesClient from "./AdvancesClient"

export default async function AdvancesPage({
  searchParams,
}: {
  searchParams: Promise<{ month?: string; year?: string }>;
}) {
  const params = await searchParams;
  const today = new Date()
  const month = params.month ? parseInt(params.month) : today.getMonth() + 1
  const year = params.year ? parseInt(params.year) : today.getFullYear()

  const advances = await prisma.payrollAdvance.findMany({
    where: { month, year },
    include: { employee: true },
    orderBy: { employee: { name: 'asc' } }
  })

  return (
    <div className="container mx-auto py-8 px-4">
      <AdvancesClient
        initialAdvances={advances.map(a => ({
          ...a,
          status: a.status as "PENDING" | "PAID",
          paidAt: a.paidAt?.toISOString() || null
        }))}
        month={month}
        year={year}
      />
    </div>
  )
}
