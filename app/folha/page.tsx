import { prisma } from "@/lib/prisma";
import FolhaView from "./FolhaView";
import { getPayrolls } from "./actions";

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ month?: string; year?: string }>;
}) {
    const params = await searchParams;
    const now = new Date();
    const currentMonth = params.month ? parseInt(params.month) : now.getMonth() + 1;
    const currentYear = params.year ? parseInt(params.year) : now.getFullYear();

    const employees = await prisma.employee.findMany({
        where: { active: true },
        select: { id: true, name: true, type: true, baseSalary: true, transportDaily: true, gasAssistance: true }
    });

    const payrolls = await getPayrolls(currentMonth, currentYear);

    return (
        <FolhaView
            searchParams={searchParams}
            initialData={payrolls}
            employees={employees}
            currentMonth={currentMonth}
            currentYear={currentYear}
        />
    );
}
