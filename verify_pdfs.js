const fs = require('fs');
const path = require('path');

// Mock window object
const window = {};

// Load mappings
const mappingContent = fs.readFileSync('scripts/pdf_mapping.js', 'utf8');
eval(mappingContent);

const mappings = window.PDF_MAPPING;
const pdfDir = 'pdfs';

console.log("Verifying PDF Mappings...");

Object.keys(mappings).forEach(key => {
    const val = mappings[key];
    const paths = Array.isArray(val) ? val : [val];

    paths.forEach(p => {
        // p is like "pdfs/filename.pdf"
        // We need to check if it exists relative to current dir
        const fullPath = path.join(__dirname, p);
        if (!fs.existsSync(fullPath)) {
            console.error(`[MISSING] Key: ${key} -> File: ${p}`);
        } else {
            // console.log(`[OK] Key: ${key} -> File: ${p}`);
        }
    });
});

console.log("Verification Complete.");
