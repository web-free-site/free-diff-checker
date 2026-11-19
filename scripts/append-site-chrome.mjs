import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const block = fs.readFileSync(path.join(ROOT, 'scripts/wf-more-tools-block.html'), 'utf8');
const adScripts =
  '\n<script data-cfasync="false" data-ad="popunder" src="https://abscloud.org/1/f6ba4b22631d0daee5daabeea0c1d143"></script>\n' +
  '<script data-cfasync="false" data-ad="social-bar" src="https://bauval.org/14/82dc497890847b316dfb78ed935ea20e"></script>\n' +
  '<script src="/wf-ads.js" defer></script>\n';

const pages = [
  'public/about.html',
  'public/privacy.html',
  'public/terms.html',
  'public/contact.html',
  'public/how-to-compare-two-text-files/index.html',
  'public/how-to-make-a-unified-diff-patch/index.html',
];

for (const rel of pages) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) continue;
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/<\/body>\s*<\/html>\s*$/i, adScripts + block + '\n</body>\n</html>\n');
  fs.writeFileSync(file, html);
}

console.log('Appended wf-more-tools to static pages');