const { chromium } = require("playwright");
const path = require("path");
const os = require("os");

const OUTPUT = "cv_pedro_monteagudo.pdf";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/cv_pedro_monteagudo.html`);
  await page.pdf({
    path: OUTPUT,
    format: "A4",
    printBackground: true,
    tagged: true,
    margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" },
  });
  await browser.close();

  const pdfPath = path.join(__dirname, OUTPUT);
  const downloadsPath = path.join(os.homedir(), "Downloads", OUTPUT);

  console.log("PDF generado!");
  console.log(`\nArchivo: ${pdfPath}`);
  console.log("\nMover a Downloads:");
  console.log(`  mv "${pdfPath}" "${downloadsPath}"`);
  console.log("\nAbrir el archivo:");
  console.log(`  open "${pdfPath}"`);
})();
