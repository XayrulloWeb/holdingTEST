import fs from 'fs';

const file = 'src/data/mediaManifest.js';
let content = fs.readFileSync(file, 'utf8');

const before = (content.match(/\/public\//g) || []).length;

// Strip /public/ prefix from all paths
content = content.replaceAll('"/public/', '"/');

fs.writeFileSync(file, content);

const after = (content.match(/\/public\//g) || []).length;
console.log(`Fixed ${before - after} paths. Remaining /public/ refs: ${after}`);

// Show sample
const lines = content.split('\n').filter(l => l.includes('.webp'));
console.log('\nSample paths after fix:');
lines.slice(0, 3).forEach(l => console.log(l.trim()));
