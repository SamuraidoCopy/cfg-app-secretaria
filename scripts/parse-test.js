const fs = require('fs');
const PDFParser = require('pdf2json');

const pdfParser = new PDFParser(null, 1);
pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", () => {
    fs.writeFileSync('C:\\Users\\vitor\\Projects\\Colégio Frei Galvão\\Folha de Pagamento\\app-folha\\raw_test.txt', pdfParser.getRawTextContent());
    console.log("Done");
});
pdfParser.parseBuffer(fs.readFileSync('C:\\Users\\vitor\\Projects\\Colégio Frei Galvão\\Folha de Pagamento\\CLT\\Folha de Pagamento.pdf'));
