import { NextResponse } from 'next/server';
import PDFParser from 'pdf2json';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'Nenhum arquivo enviado.' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Read PDF text using pdf2json (Pure JS, fully Vercel compatible)
    const text = await new Promise<string>((resolve, reject) => {
        const pdfParser = new PDFParser(null, true); // true = extract raw text
        
        pdfParser.on("pdfParser_dataError", (errData: any) => reject(errData.parserError));
        pdfParser.on("pdfParser_dataReady", () => {
            resolve(pdfParser.getRawTextContent());
        });
        
        pdfParser.parseBuffer(buffer);
    });

    // Parse logic
    const employeesData: Array<{
      id: string;
      name: string;
      grossEarnings: number;
      netTotal: number;
      baseInss: number;
      fgtsValue: number;
      inssDeduction: number;
      valeTransporte: number;
      cestaBasica: number;
      advanceDeduction: number;
    }> = [];

    const parseCurrency = (str: string) => parseFloat(str.replace(/\./g, "").replace(",", "."));
    
    // Extract month and year from the PDF header
    const periodMatch = text.match(/(JAN|FEV|MAR[ÇC]O|ABR|MAI|JUN|JUL|AGO|SET|OUT|NOV|DEZ|\d{2})[/\s-]?(\d{4})/i);
    let month = 0;
    let year = 0;
    
    if (periodMatch) {
        const monthGroup = periodMatch[1].toUpperCase();
        year = parseInt(periodMatch[2]);
        
        if (/^\d{2}$/.test(monthGroup)) {
            month = parseInt(monthGroup);
        } else {
            const monthsMap: Record<string, number> = {
                'JANEIRO': 1, 'JAN': 1,
                'FEVEREIRO': 2, 'FEV': 2,
                'MARÇO': 3, 'MARCO': 3, 'MAR': 3,
                'ABRIL': 4, 'ABR': 4,
                'MAIO': 5, 'MAI': 5,
                'JUNHO': 6, 'JUN': 6,
                'JULHO': 7, 'JUL': 7,
                'AGOSTO': 8, 'AGO': 8,
                'SETEMBRO': 9, 'SET': 9,
                'OUTUBRO': 10, 'OUT': 10,
                'NOVEMBRO': 11, 'NOV': 11,
                'DEZEMBRO': 12, 'DEZ': 12
            };
            month = monthsMap[monthGroup] || 0;
        }
    }

    // Split text by "Empr.:"
    const blocks = text.split("Empr.:");
    
    for (let i = 0; i < blocks.length - 1; i++) {
        const headerPart = blocks[i];
        const dataPart = blocks[i+1];
        
        // Extract Name from end of headerPart
        const nameMatch = headerPart.match(/(\d+)([A-Z\s]+)\s*$/);
        if (!nameMatch) continue;
        
        const id = nameMatch[1].trim();
        const name = nameMatch[2].trim();
        
        // Restrict search area to current employee block (before "ND:")
        const dataLimit = dataPart.split(/ND:/i)[0];
        
        // Standard total lines
        const proventosMatch = dataPart.match(/Proventos:\s*([\d.]+,\d{2})/i);
        const liquidoMatch = dataPart.match(/Dedutora:\s*\d+\s+([\d.]+,\d{2})/i);
        const baseInssMatch = dataPart.match(/Base INSS:\s*([\d.]+,\d{2})/i);
        const fgtsMatch = dataPart.match(/Valor FGTS:\s*([\d.]+,\d{2})/i);
        
        // Specific Rubrics using codes and P/D markers
        // INSS: "998 121,57 D"
        const inssSpecMatch = dataLimit.match(/998\s+([\d.]+,\d{2})\s+D/i);
        
        // VT: "282 VALE TRANSPORTE ... P 222,60"
        const vtSpecMatch = dataLimit.match(/282\s+VALE\s+TRANSPORTE[\s\S]*?P\s+([\d.]+,\d{2})/i);
        
        // Cesta: "227 CESTA BASICA VALOR ... P 180,00"
        const cestaSpecMatch = dataLimit.match(/227\s+CESTA\s+B[AÁ]SICA[\s\S]*?P\s+([\d.]+,\d{2})/i);
        
        // Adiantamento: "981 607,20 D"
        const adiantSpecMatch = dataLimit.match(/(?:981|DESC\.ADIANT\.SALARIAL)[\s\S]{0,35}?([\d.]+,\d{2})(?:\s+D)?/i);
        
        if (proventosMatch && name) {
            employeesData.push({
                id,
                name,
                grossEarnings: parseCurrency(proventosMatch[1]),
                netTotal: liquidoMatch ? parseCurrency(liquidoMatch[1]) : 0,
                inssDeduction: inssSpecMatch ? parseCurrency(inssSpecMatch[1]) : 0,
                baseInss: baseInssMatch ? parseCurrency(baseInssMatch[1]) : 0,
                fgtsValue: fgtsMatch ? parseCurrency(fgtsMatch[1]) : 0,
                valeTransporte: vtSpecMatch ? parseCurrency(vtSpecMatch[1]) : 0,
                cestaBasica: cestaSpecMatch ? parseCurrency(cestaSpecMatch[1]) : 0,
                advanceDeduction: adiantSpecMatch ? parseCurrency(adiantSpecMatch[1]) : 0
            });
        }
    }
    
    return NextResponse.json({ 
        success: true, 
        count: employeesData.length, 
        data: employeesData,
        month,
        year
    });
  } catch (error: any) {
    console.error("PDF Parsing error:", error);
    return NextResponse.json({ error: error.message || 'Erro ao processar PDF' }, { status: 500 });
  }
}
