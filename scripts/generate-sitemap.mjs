import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Read project data
const projectsData = JSON.parse(readFileSync(join(process.cwd(), 'src/data/projects.json'), 'utf8'));
const papersData = JSON.parse(readFileSync(join(process.cwd(), 'src/data/papers.json'), 'utf8'));

// Base URL
const baseUrl = 'https://orenvanallen.com';

// Generate sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/projects</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/papers</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/experience</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
${projectsData.map(project => `  <url>
    <loc>${baseUrl}/projects/${project.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap
writeFileSync(join(process.cwd(), 'public/sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');
