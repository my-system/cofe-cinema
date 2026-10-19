const fs = require('fs');
const { execSync } = require('child_process');

let code = fs.readFileSync('build_pages.cjs', 'utf8');

const oldHead = '<link href="/assets/lenval.css" rel="stylesheet" type="text/css"/>';
const newHead = `<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
  <link href="/assets/lenval.css" rel="stylesheet" type="text/css"/>`;

if (!code.includes('Plus+Jakarta+Sans')) {
  code = code.replace(oldHead, newHead);
  fs.writeFileSync('build_pages.cjs', code, 'utf8');
  console.log('Updated build_pages.cjs with Plus Jakarta Sans');
}

execSync('node build_pages.cjs', { stdio: 'inherit' });
execSync('npm run build', { stdio: 'inherit' });
console.log('All done!');
