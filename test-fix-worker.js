try {
    const pdfjs = require('pdfjs-dist');
    console.log('pdfjs loaded');
    pdfjs.GlobalWorkerOptions.workerSrc = false;
    console.log('workerSrc set to false');
    
    const { PDFParse } = require('pdf-parse');
    const parser = new PDFParse({ data: new Uint8Array([0]) }); // dummy
    console.log('PDFParse initialized');
} catch (e) {
    console.log('Error:', e.message);
}
