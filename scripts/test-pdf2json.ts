import fs from 'fs';
import path from 'path';
import PDFParser from 'pdf2json';

async function test() {
    const pdfPath = path.join(process.cwd(), 'public', 'pdfs', 'Folha Marco CFG_compressed.pdf'); // Or any available PDF
    if (!fs.existsSync(pdfPath)) {
        console.log("PDF not found.");
        return;
    }

    const buffer = fs.readFileSync(pdfPath);
    const pdfParser = new PDFParser(null, 1);
    
    pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
    pdfParser.on("pdfParser_dataReady", pdfData => {
        const text = pdfParser.getRawTextContent();
        console.log("----- RAW TEXT PREVIEW -----");
        // Print the first 2000 characters to see the structure
        console.log(text.substring(0, 2000));
        console.log("----------------------------");
        
        // Let's specifically look for Vale Transporte
        const vtMatch = text.match(/VALE\s+TRANSPORTE.*?\n/gi);
        console.log("VT Lines found:");
        console.log(vtMatch);
    });
    
    pdfParser.parseBuffer(buffer);
}

test();
