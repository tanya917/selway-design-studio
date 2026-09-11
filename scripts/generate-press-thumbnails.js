const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const pressFolder = path.join(__dirname, '../public/press');
const thumbFolder = path.join(__dirname, '../public/press-thumbnails');

// Create thumbnails folder if it doesn't exist
if (!fs.existsSync(thumbFolder)) {
  fs.mkdirSync(thumbFolder, { recursive: true });
}

// Get all PDF files from press folder
const pdfFiles = fs.readdirSync(pressFolder).filter(file => file.endsWith('.pdf'));

console.log(`Found ${pdfFiles.length} PDF files. Generating thumbnails...\n`);

let completed = 0;
let failed = 0;

pdfFiles.forEach((file) => {
  const pdfPath = path.join(pressFolder, file);
  const thumbName = file.replace('.pdf', '.jpg');
  const thumbPath = path.join(thumbFolder, thumbName);

  // Skip if thumbnail already exists
  if (fs.existsSync(thumbPath)) {
    console.log(`✓ ${thumbName} (already exists)`);
    completed++;
    return;
  }

  try {
    // Use convert command to extract first page and convert to JPG
    const command = `convert -density 150 "${pdfPath}[0]" -resize 600x800 -quality 75 "${thumbPath}"`;
    execSync(command, { stdio: 'pipe' });
    console.log(`✓ ${thumbName}`);
    completed++;
  } catch (error) {
    console.error(`✗ Failed to generate ${thumbName}: ${error.message.split('\n')[0]}`);
    failed++;
  }
});

console.log(`\nGeneration complete! ${completed} succeeded, ${failed} failed.`);
