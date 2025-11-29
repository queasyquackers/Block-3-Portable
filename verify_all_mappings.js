// Verification script to check if all tests have valid PDF mappings
// Run this to verify it's safe to delete the images folder

const fs = require('fs');
const path = require('path');

// Load PDF mapping
const mappingContent = fs.readFileSync('scripts/pdf_mapping.js', 'utf8');
eval(mappingContent);
const PDF_MAPPING = window.PDF_MAPPING;

// Load config to get all tests
const configContent = fs.readFileSync('config.js', 'utf8');
eval(configContent);

console.log("=== PDF Mapping Verification ===\n");

let allTestsHaveMapping = true;
let missingMappings = [];
let successCount = 0;
let totalTests = testsToLoad.length;

testsToLoad.forEach((test, index) => {
    const testName = test.name;
    let lectureId = testName.replace(/^(\d+-)/, ''); // Remove week prefix

    // For tests that use window.TestXX format, need to extract from data
    if (typeof test.data === 'undefined' || test.data === null) {
        console.log(`⚠️  ${index + 1}. ${testName} - Test data not loaded (window.${test.data})`);
        return;
    }

    // Check if this lecture has a PDF mapping
    if (PDF_MAPPING[lectureId]) {
        console.log(`✅ ${index + 1}. ${testName} → ${lectureId} - MAPPED`);
        successCount++;
    } else {
        console.log(`❌ ${index + 1}. ${testName} → ${lectureId} - MISSING MAPPING`);
        allTestsHaveMapping = false;
        missingMappings.push({ testName, lectureId });
    }
});

console.log("\n=== Summary ===");
console.log(`Total Tests: ${totalTests}`);
console.log(`Tests with PDF Mapping: ${successCount}`);
console.log(`Tests without PDF Mapping: ${missingMappings.length}`);

if (allTestsHaveMapping) {
    console.log("\n✅ ALL TESTS HAVE PDF MAPPINGS!");
    console.log("✅ Safe to delete the images folder.");
} else {
    console.log("\n⚠️  Some tests are missing PDF mappings:");
    missingMappings.forEach(item => {
        console.log(`   - ${item.testName} (${item.lectureId})`);
    });
    console.log("\n⚠️  You may want to add these mappings before deleting images.");
}

// Also check if PDF files actually exist
console.log("\n=== Checking if PDF files exist ===");
let missingFiles = [];
Object.keys(PDF_MAPPING).forEach(key => {
    const mapping = PDF_MAPPING[key];
    const paths = Array.isArray(mapping) ? mapping : [mapping];

    paths.forEach(pdfPath => {
        const fullPath = path.join(__dirname, pdfPath);
        if (!fs.existsSync(fullPath)) {
            console.log(`❌ Missing file for ${key}: ${pdfPath}`);
            missingFiles.push({ key, path: pdfPath });
        }
    });
});

if (missingFiles.length === 0) {
    console.log("✅ All PDF files exist!");
} else {
    console.log(`⚠️  ${missingFiles.length} PDF files are missing.`);
}

console.log("\n=== Final Recommendation ===");
if (allTestsHaveMapping && missingFiles.length === 0) {
    console.log("✅ SAFE TO DELETE IMAGES FOLDER");
    console.log("   All tests have valid PDF mappings and all PDF files exist.");
} else {
    console.log("⚠️  WAIT - Fix issues first:");
    if (!allTestsHaveMapping) console.log("   - Add missing PDF mappings");
    if (missingFiles.length > 0) console.log("   - Add missing PDF files");
}
