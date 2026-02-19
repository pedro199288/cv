const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/cv_pedro_monteagudo.html`);
  await page.pdf({
    path: "cv_pedro_monteagudo.pdf",
    format: "A4",
    printBackground: true,
    margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" },
  });
  await browser.close();
  console.log("PDF generado!");
})();
