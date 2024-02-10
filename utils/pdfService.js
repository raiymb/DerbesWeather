const PDFDocument = require('pdfkit');

function generatePDF(res, data) {
  const doc = new PDFDocument();
  doc.pipe(res);

  doc.fontSize(25).text(data.title, 100, 100);
  doc.text(data.content, 100, 150);

  doc.end();
}

module.exports = { generatePDF };
