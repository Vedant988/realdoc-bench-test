// Script to generate the manifest of all available OCR outputs
// Run with: node scripts/generate-manifest.js

const fs = require('fs');
const path = require('path');

const scenarios = ['Scanning', 'Warping', 'Screen-Photography', 'Illumination', 'Skew'];
const manifest = {};

for (const scenario of scenarios) {
  const scenarioDir = path.join(__dirname, '..', scenario);
  if (!fs.existsSync(scenarioDir)) {
    console.log(`Skipping ${scenario} - directory not found`);
    manifest[scenario] = [];
    continue;
  }
  
  const files = fs.readdirSync(scenarioDir)
    .filter(f => f.endsWith('.md'))
    .map(f => path.basename(f, '.md'));
  
  manifest[scenario] = files;
  console.log(`${scenario}: ${files.length} files`);
}

const total = Object.values(manifest).reduce((a, b) => a + b.length, 0);
console.log(`\nTotal: ${total} files`);

fs.writeFileSync(
  path.join(__dirname, '..', 'public', 'manifest.json'),
  JSON.stringify(manifest, null, 2)
);

console.log('Manifest written to public/manifest.json');
