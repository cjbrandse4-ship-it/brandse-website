/**
 * Prerender script for SEO — generates static HTML for every route.
 * Run after `vite build` to create crawlable HTML files.
 */
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', '..', 'dist', 'apps', 'web');
const PORT = 4173;

// All routes from App.jsx
const ROUTES = [
  '/',
  '/services',
  '/tree-removal',
  '/stump-grinding',
  '/tree-trimming',
  '/hedge-trimming',
  '/tree-planting',
  '/emergency-services',
  '/about',
  '/gallery',
  '/blog',
  '/faq',
  '/contact',
  '/cookie-policy',
  // Location pages
  '/pointe-claire',
  '/hudson',
  '/beaconsfield',
  '/saint-lazare',
  '/vaudreuil',
  '/kirkland',
  '/dollard-des-ormeaux',
  '/dorval',
  '/senneville',
  '/baie-d-urfe',
  '/ile-perrot',
  '/pincourt',
  // French routes
  '/fr',
  '/fr/services',
  '/fr/tree-removal',
  '/fr/stump-grinding',
  '/fr/tree-trimming',
  '/fr/hedge-trimming',
  '/fr/tree-planting',
  '/fr/emergency-services',
  '/fr/about',
  '/fr/gallery',
  '/fr/blog',
  '/fr/faq',
  '/fr/contact',
  '/fr/cookie-policy',
  '/fr/pointe-claire',
  '/fr/hudson',
  '/fr/beaconsfield',
  '/fr/saint-lazare',
  '/fr/vaudreuil',
  '/fr/kirkland',
  '/fr/dollard-des-ormeaux',
  '/fr/dorval',
  '/fr/senneville',
  '/fr/baie-d-urfe',
  '/fr/ile-perrot',
  '/fr/pincourt',
];

// Simple static file server
function startServer() {
  const indexHtml = readFileSync(join(DIST, 'index.html'), 'utf-8');

  const MIME = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.ttf': 'font/ttf',
    '.xml': 'application/xml',
    '.txt': 'text/plain',
  };

  const server = createServer((req, res) => {
    let filePath = join(DIST, req.url === '/' ? '/index.html' : req.url);

    if (existsSync(filePath) && !filePath.endsWith('/')) {
      const ext = '.' + filePath.split('.').pop();
      const mime = MIME[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': mime });
      res.end(readFileSync(filePath));
    } else {
      // SPA fallback
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(indexHtml);
    }
  });

  return new Promise((resolve) => {
    server.listen(PORT, () => {
      console.log(`Static server on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  if (!existsSync(DIST)) {
    console.error('Build output not found at', DIST);
    console.error('Run `npm run build` first.');
    process.exit(1);
  }

  const server = await startServer();
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

  console.log(`Prerendering ${ROUTES.length} routes...\n`);

  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;

    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
      // Wait a bit for React Helmet to update <head>
      await page.waitForSelector('header', { timeout: 10000 }).catch(() => {});

      const html = await page.content();

      // Write HTML file
      const filePath = route === '/'
        ? join(DIST, 'index.html')
        : join(DIST, route, 'index.html');

      const dir = dirname(filePath);
      if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

      writeFileSync(filePath, html, 'utf-8');
      console.log(`  ✓ ${route}`);
    } catch (err) {
      console.error(`  ✗ ${route} — ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log('\nPrerendering complete!');
}

prerender();
