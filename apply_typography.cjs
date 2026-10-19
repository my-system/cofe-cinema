const fs = require('fs');
const path = require('path');

const ROOT = 'd:/VIBE CODING/PROFIL CAFE CINEMATIC';
const cssPath = path.join(ROOT, 'public/assets/lenval.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Add Plus Jakarta Sans @font-face at top
const pjsFontFace = `@font-face{font-family:'Plus Jakarta Sans';src:url('/assets/fonts/PlusJakartaSans-Regular.woff2')format('woff2');font-weight:200 800;font-style:normal;font-display:swap}\n`;
if (!css.includes("font-family:'Plus Jakarta Sans'")) {
  css = pjsFontFace + css;
}

// 2. Replace all occurrences of Helvetica Now Display and Financier Display in CSS variables
css = css.replace(/--_fonts---font-body:"Helvetica Now Display",Arial,sans-serif/g, `--_fonts---font-body:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif`);
css = css.replace(/--_fonts---font-display:"Financier Display","Times New Roman",sans-serif/g, `--_fonts---font-display:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif`);
css = css.replace(/--_fonts---h2--line-height:100%/g, `--_fonts---h2--line-height:132%`);
css = css.replace(/--_fonts---h1--line-height:80%/g, `--_fonts---h1--line-height:108%`);
css = css.replace(/--_fonts---p1--line-height:133\.333%/g, `--_fonts---p1--line-height:165%`);
css = css.replace(/--_fonts---l1--letter-spacing:-?\.008em/g, `--_fonts---l1--letter-spacing:0.08em`);

// 3. Add clean typography rules at the end of lenval.css
const typographyRules = `
/* ========================================================
   MODERN UNIFIED ARCHITECTURAL TYPOGRAPHY (Plus Jakarta Sans)
   ======================================================== */
:root, body {
  --_fonts---font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --_fonts---font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --_fonts---h1--line-height: 108% !important;
  --_fonts---h2--line-height: 132% !important;
  --_fonts---h3--line-height: 125% !important;
  --_fonts---p1--line-height: 165% !important;
  --_fonts---p1--letter-spacing: -0.005em !important;
  --_fonts---l1--letter-spacing: 0.08em !important;
}

body {
  font-family: var(--_fonts---font-body) !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, .h1 {
  font-family: var(--_fonts---font-display) !important;
  font-weight: 500 !important;
  line-height: 1.08 !important;
  letter-spacing: -0.025em !important;
}

h2, .h2 {
  font-family: var(--_fonts---font-display) !important;
  font-weight: 400 !important;
  line-height: 1.32 !important;
  letter-spacing: -0.015em !important;
}

h3, .h3 {
  font-family: var(--_fonts---font-display) !important;
  font-weight: 500 !important;
  line-height: 1.25 !important;
  letter-spacing: -0.01em !important;
}

p, .p1 {
  font-family: var(--_fonts---font-body) !important;
  font-weight: 400 !important;
  line-height: 1.65 !important;
  letter-spacing: -0.005em !important;
  color: inherit;
}

.l1 {
  font-family: var(--_fonts---font-body) !important;
  font-weight: 600 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  line-height: 1.4 !important;
}

/* About Section Typographic Balance */
.about-s_lead .red-line_title .l1 {
  font-size: 11px !important;
  letter-spacing: 0.12em !important;
  font-weight: 700 !important;
  opacity: 0.9;
}

.about-s_lead .h2 {
  font-weight: 400 !important;
  line-height: 1.34 !important;
  letter-spacing: -0.018em !important;
}

.about-s_caption .l1 {
  font-weight: 500 !important;
  letter-spacing: 0.04em !important;
  line-height: 1.55 !important;
  text-transform: none !important;
}

.about-s_desc .p1 {
  font-weight: 350 !important;
  line-height: 1.68 !important;
  letter-spacing: -0.003em !important;
}

/* Button Labels & Interactive Tracking */
.btn_label .l1,
.nav-item_label_text .l1 {
  letter-spacing: 0.06em !important;
  font-weight: 600 !important;
}

/* Tab Numbers & Labels */
.tab_label .l1 {
  letter-spacing: 0.04em !important;
  font-weight: 500 !important;
}

/* Quote Section */
.cta-s_title .h1,
.amen-s_quote_c .h2 {
  font-weight: 400 !important;
  line-height: 1.28 !important;
}
`;

fs.writeFileSync(cssPath, css + '\n' + typographyRules, 'utf8');
fs.writeFileSync(path.join(ROOT, 'src/styles/lenval.css'), css + '\n' + typographyRules, 'utf8');
console.log('Successfully updated public/assets/lenval.css and src/styles/lenval.css with unified Plus Jakarta Sans typography!');
