# CV Repository

Single-source CV in HTML with PDF export using Playwright.

## Requirements

- Node.js 18+ (recommended)
- npm

## Setup

```bash
npm install
```

## Generate PDF

```bash
npm run pdf
```

This command generates `cv_pedro_monteagudo.pdf` in the project root.

## Smoke Check

```bash
npm test
```

`npm test` runs a basic guardrail:
- Generates the PDF
- Verifies the output file exists
- Verifies the output is not empty

## Main Files

- `cv_pedro_monteagudo.html`: CV content and styles
- `generate-pdf.js`: Playwright export script
- `package.json`: scripts and dependencies
