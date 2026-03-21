try {
    const pdfNode = require('pdf-parse/node');
    console.log('Node Keys:', Object.keys(pdfNode));
    if (pdfNode.PDFParse) {
        console.log('PDFParse found in /node');
    }
} catch (e) {
    console.log('Error loading /node:', e.message);
}
