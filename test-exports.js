const pdf = require('pdf-parse');
console.log('Keys:', Object.keys(pdf));
console.log('Type of module:', typeof pdf);
if (pdf.default) {
    console.log('Type of default:', typeof pdf.default);
    console.log('Default keys:', Object.keys(pdf.default));
}
