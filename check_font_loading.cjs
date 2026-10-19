const fs = require('fs');

const css = fs.readFileSync('public/assets/lenval.css', 'utf8');
const ff = css.match(/@font-face\{[^}]+\}/g);
console.log('=== @font-face rules ===');
console.log(ff);

const fontFiles = fs.readdirSync('public/assets/fonts');
console.log('=== font files in public/assets/fonts ===');
console.log(fontFiles);
