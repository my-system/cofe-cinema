const fs = require('fs');

const css = fs.readFileSync('public/assets/lenval.css', 'utf8');

// Find all occurrences of font-body and font-display
const lines = css.split(';');
const fontLines = lines.filter(l => l.includes('--_fonts---font-body') || l.includes('--_fonts---font-display') || l.includes('--_fonts---h2--line-height'));
console.log('Font lines found:', fontLines.length);
fontLines.forEach(l => console.log(l.trim()));
