const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\quazi\\Downloads\\Block-3-Portable';
const imagesDir = path.join(rootDir, 'images');

// Get all Test files
const files = fs.readdirSync(rootDir).filter(f => f.startsWith('Test') && f.endsWith('.js'));

let missingImages = [];
let totalImages = 0;

files.forEach(file => {
    const content = fs.readFileSync(path.join(rootDir, file), 'utf8');
    // Regex to find slideImagePath: "images/..."
    const regex = /"slideImagePath":\s*"([^"]+)"/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
        totalImages++;
        const relativePath = match[1];
        // The path in JS is "images/filename.jpg", so we need to join with rootDir, not imagesDir again if it includes "images/"
        // But wait, the path in JS is "images/...", so path.join(rootDir, relativePath) should work.
        const fullPath = path.join(rootDir, relativePath);

        if (!fs.existsSync(fullPath)) {
            missingImages.push({
                file: file,
                imagePath: relativePath
            });
        }
    }
});

console.log(`Checked ${totalImages} image references.`);
if (missingImages.length > 0) {
    console.log('Found missing images:');
    missingImages.forEach(m => console.log(`- ${m.file}: ${m.imagePath}`));
} else {
    console.log('All image references are valid!');
}
