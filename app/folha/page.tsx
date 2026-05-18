import { prisma } from "@/lib/prisma";
import FolhaView from "./FolhaView";
import { getPayrolls } from "./actions";

export const dynamic = 'force-dynamic';

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
        where: { 
            OR: [
                { active: true },
                { payrolls: { some: { month: currentMonth, year: currentYear } } },
                { rescisoes: { some: { month: currentMonth, year: currentYear } } }
            ]
        },
        select: { 
            id: true, 
            name: true, 
            type: true, 
            baseSalary: true, 
            transportDaily: true, 
            gasAssistance: true, 
            recurringDeductions: true, 
            temporaryDeductions: true, 
            temporaryDeductionsDesc: true, 
            temporaryDeductionsExpiration: true,
            isAulista: true,
            hourlyRate: true,
            salaryAdvance: true,
            teachingAssignments: {
                where: { active: true },
                select: {
                    weekday: true,
                    hours: true,
                    startTime: true,
                    endTime: true,
                    classGroup: true,
                    lessonStart: true,
                    lessonEnd: true,
                    fullDay: true,
                    subject: { select: { name: true } }
                },
                orderBy: [{ weekday: "asc" }, { startTime: "asc" }]
            }
        }
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
