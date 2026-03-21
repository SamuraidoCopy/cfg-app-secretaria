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

    console.log("--- RAW PDF TEXT ---");
    // console.log(text.substring(0, 3000));
    // To see Vale transporte specifically:
    console.log("VT matches:", text.match(/282\s+.*TRANSPORTE.*/gi));
    console.log("Cesta matches:", text.match(/227\s+.*B[AÁ]SICA.*/gi));
    console.log("Adiantamento matches:", text.match(/981.*/gi));
    
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
        const liquidoMatch = dataPart.match(/Dedutora:\s*\d+\s+([\d.]+,\d{2})/i) || dataPart.match(/L[IÍ]QUIDO[\s\S]{1,20}?([\d.]+,\d{2})/i) || dataPart.match(/([\d.]+,\d{2})\s*$/);
        const baseInssMatch = dataPart.match(/Base INSS:\s*([\d.]+,\d{2})/i) || dataPart.match(/([\d.]+,\d{2})\s+Base\s+INSS/i);
        const fgtsMatch = dataPart.match(/Valor FGTS:\s*([\d.]+,\d{2})/i) || dataPart.match(/([\d.]+,\d{2})\s+Valor\s+FGTS/i);
        
        // Specific Rubrics using a generic spatial extraction strategy
        const getRubric = (codesStr: string[]) => {
            for (const c of codesStr) {
                const regex = new RegExp(`(?:^|\\s)(${c})(?:\\s|$)`, 'i');
                const match = dataLimit.match(regex);
                if (match && match.index !== undefined) {
                    const startIdx = match.index + match[0].length;
                    let chunk = dataLimit.substring(startIdx);
                    // Attempt to cut off chunk before the next 3-digit rubric code to prevent bleeding
                    const nextCodeIdx = chunk.search(/\s\d{3}\s/);
                    if (nextCodeIdx !== -1 && nextCodeIdx < 90) {
                        chunk = chunk.substring(0, nextCodeIdx);
                    } else {
                        chunk = chunk.substring(0, 80);
                    }
                    
                    // Find all currency values and return the last one (which is the financial value, skipping "reference" quantities)
                    const valMatches = [...chunk.matchAll(/([\d.]+,\d{2})/g)];
                    if (valMatches.length > 0) {
                        return parseCurrency(valMatches[valMatches.length - 1][1]);
                    }
                }
            }
            return 0;
        };

        const inssDeduction = getRubric(["998", "INSS"]);
        const valeTransporte = getRubric(["282", "VALE TRANSPORTE"]);
        const cestaBasica = getRubric(["227", "CESTA"]);
        const advanceDeduction = getRubric(["981", "ADIANT"]);
        
        if (proventosMatch && name) {
            employeesData.push({
                id,
                name,
                grossEarnings: parseCurrency(proventosMatch[1]),
                netTotal: liquidoMatch ? parseCurrency(liquidoMatch[1]) : 0,
                baseInss: baseInssMatch ? parseCurrency(baseInssMatch[1]) : 0,
                fgtsValue: fgtsMatch ? parseCurrency(fgtsMatch[1]) : 0,
                inssDeduction,
                valeTransporte,
                cestaBasica,
                advanceDeduction
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
