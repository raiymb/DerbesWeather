const express = require('express');
const { generatePDF } = require('../utils/pdfService');
const router = express.Router();

router.get('/download-pdf', (req, res) => {
  const data = {
    title: req.t('welcome'),
    content: req.t('download')
  };

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="download.pdf"');

  generatePDF(res, data);
});

module.exports = router;
