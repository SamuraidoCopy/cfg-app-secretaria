"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MonthPicker({
    currentMonth,
    currentYear,
}: {
    currentMonth: number;
    currentYear: number;
}) {
    const router = useRouter();

    const handlePrev = () => {
        let nextMonth = currentMonth - 1;
        let nextYear = currentYear;
        if (nextMonth < 1) {
            nextMonth = 12;
            nextYear -= 1;
        }
        router.push(`?month=${nextMonth}&year=${nextYear}`);
    };

    const handleNext = () => {
        let nextMonth = currentMonth + 1;
        let nextYear = currentYear;
        if (nextMonth > 12) {
            nextMonth = 1;
            nextYear += 1;
        }
        router.push(`?month=${nextMonth}&year=${nextYear}`);
    };

    const monthName = new Date(currentYear, currentMonth - 1).toLocaleString("pt-BR", {
        month: "long",
    });

    return (
        <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-xl shadow-md border border-wine-100">
            <button onClick={handlePrev} className="p-1 hover:bg-wine-100 text-wine-800 rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-semibold text-wine-950 min-w-[120px] text-center capitalize">
                {monthName} {currentYear}
            </span>
            <button onClick={handleNext} className="p-1 hover:bg-wine-100 text-wine-800 rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
}
