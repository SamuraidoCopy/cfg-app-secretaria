import { NextResponse } from 'next/server';
import pdfParse from 'pdf-parse';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'Nenhum arquivo enviado.' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Read PDF text using pdf-parse natively
    const data = await pdfParse(buffer);
    const text = data.text;
    
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
        
        // Robust extraction using "Indicator-First" strategy to handle merged columns
        const extractRubricValue = (code: string, preferredType: 'P' | 'D') => {
            const lines = dataLimit.split('\n');
            const codeRegex = new RegExp(`(?:^|\\D)${code}(?=\\d|\\s|$)`, 'i');
            
            for (const line of lines) {
                if (codeRegex.test(line)) {
                    // Match all values with their markers
                    const valRegex = /([PD]?)\s*([\d.]+,\d{2})\s*([PD]?)/gi;
                    const matches = [...line.matchAll(valRegex)];
                    
                    if (matches.length > 0) {
                        // First try to find a match with the preferred marker
                        for (const match of matches) {
                            const [full, pre, val, post] = match;
                            if (pre.toUpperCase() === preferredType || post.toUpperCase() === preferredType) {
                                return parseCurrency(val);
                            }
                        }
                        // Fallback: If no match with preferred marker, take the first value
                        return parseCurrency(matches[0][2]);
                    }
                }
            }
            return 0;
        };

        const inssDeduction = extractRubricValue("998", "D");
        const valeTransporte = extractRubricValue("282", "P");
        const cestaBasica = extractRubricValue("227", "P");
        let advanceDeduction = extractRubricValue("981", "D");
        if (advanceDeduction === 0) {
            const altMatch = dataLimit.match(/DESC\.?ADIANT[^\n]*?([\d.]+,\d{2})/i);
            if (altMatch) advanceDeduction = parseCurrency(altMatch[1]);
        }
        
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
    console.error('Erro no processamento do PDF:', error);
    return NextResponse.json(
      { error: 'Erro ao processar o arquivo PDF.', details: error.message },
      { status: 500 }
    );
  }
}
