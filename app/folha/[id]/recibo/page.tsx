import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import numeroPorExtenso from "numero-por-extenso";
import PrintButton from "./PrintButton";

export default async function ReciboPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const payroll = await prisma.payroll.findUnique({
        where: { id },
        include: { employee: true },
    });

    if (!payroll) {
        notFound();
    }

    const netTotal = payroll.netTotal;
    const extenso = numeroPorExtenso.porExtenso(netTotal, numeroPorExtenso.estilo.monetario);

    // Formatadores
    const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    const capitalizedExtenso = extenso.charAt(0).toUpperCase() + extenso.slice(1);

    // Nomes dos meses
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const mesReferencia = meses[payroll.month - 1];

    const today = new Date();
    const currentDay = String(today.getDate()).padStart(2, '0');
    const currentMonthStr = meses[today.getMonth()];
    const currentYearStr = today.getFullYear();

    return (
        <div className="min-h-screen bg-wine-50 p-8 print:p-0 print:bg-white flex flex-col items-center">

            {/* Controles apenas para tela */}
            <div className="w-full max-w-4xl mb-6 flex justify-between items-center print:hidden bg-white p-4 rounded-[24px] shadow-premium border border-wine-100/50">
                <h1 className="text-xl font-bold text-wine-950">Visualização de Impressão</h1>
                <PrintButton />
            </div>

            {/* A página do recibo */}
            <div className="w-full max-w-4xl bg-white p-12 md:p-16 shadow-premium rounded-[24px] print:shadow-none print:rounded-none print:p-0 print:block print:relative print:border-none border border-wine-100/50">

                {/* Cabeçalho do Recibo (Branding) */}
                <div className="flex flex-col items-center mb-12 border-b-2 border-wine-900 pb-8 print:border-black">
                    <img src="/logo.jpg" alt="Logo Colégio Frei Galvão" className="h-24 w-auto mb-4 object-contain" />
                    <h2 className="text-3xl font-black text-wine-950 uppercase tracking-[0.2em] font-display">Relatório de Recibo</h2>
                    <p className="text-wine-600 font-bold uppercase tracking-widest text-xs mt-1">Colégio Frei Galvão</p>
                </div>

                <div className="text-center mb-12">
                    <h1 className="text-5xl font-black text-wine-950 uppercase tracking-[0.4em] font-display print:text-black">Recibo</h1>
                </div>

                {/* Corpo do Recibo */}
                <div className="text-justify leading-relaxed text-wine-950 text-xl font-medium max-w-3xl mx-auto space-y-8 print:text-black">
                    <p className="indent-12 first-letter:text-3xl first-letter:font-black">
                        Recebi da Associação SANTO ANTONIO DE SANTANA GALVÃO, CNPJ 47.595.476/0001-86 a quantia de <strong className="font-bold border-b-2 border-wine-900 print:border-black">{currency.format(netTotal)}</strong> (<strong className="font-bold italic">{capitalizedExtenso}</strong>), referente a ajuda de custo de trabalhos realizados no Colégio Frei Galvão, situado à Rua Pirajá nº223.
                    </p>
                    <p className="indent-12">
                        Tal valor se refere ao reembolso de despesas pelos serviços prestados, {payroll.employee.type === "PJ" ? "incluindo os custos de deslocamento até o Colégio, " : " "}referente a serviços extraordinários no mês de {mesReferencia} de {payroll.year}.
                    </p>
                </div>

                {/* Assinatura */}
                <div className="mt-32 max-w-3xl mx-auto">
                    <p className="text-center text-lg text-wine-900 mb-20">São Paulo, {currentDay} de {currentMonthStr} de {currentYearStr}</p>

                    <div className="flex flex-col items-center justify-center">
                        <div className="w-96 border-t border-wine-950 mb-4"></div>
                        <p className="text-xl font-bold text-wine-950">{payroll.employee.name}</p>
                        <p className="text-sm text-wine-700 mt-1">CPF: {payroll.employee.cpf}</p>
                    </div>
                </div>

            </div>

            {/* Global Print Styles for Recibo */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @media print {
          @page { margin: 1.5cm; size: A4 portrait; }
          body { background-color: white !important; font-family: serif; color: black !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:border-none { border: none !important; }
          .indent-12 { text-indent: 1.5cm !important; }
          h1 { font-size: 32pt !important; margin-bottom: 0.5cm !important; }
          h2 { font-size: 18pt !important; }
          p { font-size: 12pt !important; line-height: 1.6 !important; }
          .w-96 { width: 10cm !important; }
          * { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
        }
      `}} />
        </div>
    );
}
