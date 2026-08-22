const Puppeteer = require('puppeteer');

module.exports = async function buildPdf(inputFile, outputFile) {
  // --no-sandbox is required on CI (Ubuntu blocks Chrome's sandbox in
  // unprivileged user namespaces); harmless for local builds of our own page.
  const browser = await Puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  // Load the page in print media so print-only fonts (Roboto) are
  // fetched before rendering the PDF.
  await page.emulateMediaType('print');
  await page.goto(`file://${inputFile}`, {
    waitUntil: 'networkidle0'
  });
  await page.pdf({
    path: outputFile,
    format: 'A4',
    margin: {
      top: '2.54cm',
      right: '2.54cm',
      bottom: '2.54cm',
      left: '2.54cm',
    },
  });
  await browser.close();
};
