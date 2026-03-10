export const metadata = {
    title: 'Relatórios - Frei Galvão',
    description: 'Relatórios de folha de pagamento.',
}

import ReportClient from './ReportClient'

export default function ReportsPage() {
    return (
        <div className="flex h-screen overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                <ReportClient />
            </main>
        </div>
    )
}
