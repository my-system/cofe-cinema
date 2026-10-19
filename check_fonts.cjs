const fs = require('fs');
const css = fs.readFileSync('public/assets/lenval.css', 'utf8');

const h2Matches = css.match(/\.h2\{[^}]+\}/g);
console.log('=== .h2 ===');
console.log(h2Matches);

const p1Matches = css.match(/\.p1\{[^}]+\}/g);
console.log('=== .p1 ===');
console.log(p1Matches);

const l1Matches = css.match(/\.l1\{[^}]+\}/g);
console.log('=== .l1 ===');
console.log(l1Matches);

const bodyMatches = css.match(/body\{[^}]+\}/g);
console.log('=== body ===');
console.log(bodyMatches);
