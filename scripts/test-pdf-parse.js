const fs = require('fs');
const pdfParse = require('pdf-parse');

async function test() {
    try {
        const buffer = fs.readFileSync('C:\\Users\\vitor\\Projects\\Colégio Frei Galvão\\Folha de Pagamento\\CLT\\Folha de Pagamento.pdf');
        const data = await pdfParse(buffer);
        fs.writeFileSync('C:\\Users\\vitor\\Projects\\Colégio Frei Galvão\\Folha de Pagamento\\app-folha\\pdf_parse_raw.txt', data.text);
        console.log("Done. Length:", data.text.length);
    } catch (e) {
        console.error(e);
    }
}

test();
