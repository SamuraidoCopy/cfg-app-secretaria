const fs = require('fs');

const text = fs.readFileSync('C:\\Users\\vitor\\Projects\\Colégio Frei Galvão\\Folha de Pagamento\\app-folha\\pdf_parse_raw.txt', 'utf8');

const parseCurrency = (str) => parseFloat(str.replace(/\./g, "").replace(",", "."));

function testWorker() {
    const periodMatch = text.match(/(JAN|FEV|MAR[ÇC]O|ABR|MAI|JUN|JUL|AGO|SET|OUT|NOV|DEZ|\d{2})[/\s-]?(\d{4})/i);
    console.log("Period Match:", periodMatch ? periodMatch[0] : "None");
    
    const blocks = text.split("Empr.:");
    console.log("Blocks found:", blocks.length);
    
    for (let i = 0; i < blocks.length - 1; i++) {
        const headerPart = blocks[i];
        const dataPart = blocks[i+1];
        
        const nameMatch = headerPart.match(/(\d+)([A-Z\s]+)\s*$/);
        if (!nameMatch) continue;
        
        const id = nameMatch[1].trim();
        const name = nameMatch[2].trim();
        
        const dataLimit = dataPart.split(/ND:/i)[0];
        const proventosMatch = dataPart.match(/Proventos:\s*([\d.]+,\d{2})/i);

        console.log(`ID: "${id}" Name: "${name}" Proventos: ${proventosMatch ? proventosMatch[1] : "NOT FOUND"}`);
    }
}

testWorker();
