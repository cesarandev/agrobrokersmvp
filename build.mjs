import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { transformAsync } from '@babel/core';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(projectRoot, 'dist');

const pages = [
  'index.html',
  'Blog.html',
  'Calculadora.html',
  'Contacto.html',
  'FAQ.html',
  'Marketplace.html',
  'Nosotros.html',
  'Producto.html',
  'Productos.html',
  'SAGRILAFT.html'
];

const htmlForProduction = (source) => source
  .replace(
    /^\s*<script src="https:\/\/unpkg\.com\/react@[^\n]+$/m,
    '  <script src="/vendor/react.production.min.js"></script>'
  )
  .replace(
    /^\s*<script src="https:\/\/unpkg\.com\/react-dom@[^\n]+$/m,
    '  <script src="/vendor/react-dom.production.min.js"></script>'
  )
  .replace(/^\s*<script src="https:\/\/unpkg\.com\/@babel\/standalone@[^\n]+\r?\n?/m, '')
  .replace(
    /<script type="text\/babel" src="\/?([^"]+)\.jsx"><\/script>/g,
    '<script src="/$1.js"></script>'
  );

await fs.rm(outputDir, { recursive: true, force: true });
await fs.mkdir(path.join(outputDir, 'vendor'), { recursive: true });

for (const page of pages) {
  const source = await fs.readFile(path.join(projectRoot, page), 'utf8');
  await fs.writeFile(path.join(outputDir, page), htmlForProduction(source), 'utf8');
}

for (const entry of await fs.readdir(projectRoot, { withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith('.css')) continue;
  await fs.copyFile(path.join(projectRoot, entry.name), path.join(outputDir, entry.name));
}

for (const entry of await fs.readdir(projectRoot, { withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith('.jsx')) continue;
  const sourcePath = path.join(projectRoot, entry.name);
  const source = await fs.readFile(sourcePath, 'utf8');
  const result = await transformAsync(source, {
    filename: sourcePath,
    presets: [['@babel/preset-react', { runtime: 'classic' }]],
    plugins: ['@babel/plugin-transform-block-scoping'],
    sourceType: 'script',
    comments: false,
    compact: false
  });
  const outputName = entry.name.replace(/\.jsx$/, '.js');
  await fs.writeFile(path.join(outputDir, outputName), result.code, 'utf8');
}

await fs.cp(path.join(projectRoot, 'assets'), path.join(outputDir, 'assets'), { recursive: true });
await fs.copyFile(
  path.join(projectRoot, 'node_modules', 'react', 'umd', 'react.production.min.js'),
  path.join(outputDir, 'vendor', 'react.production.min.js')
);
await fs.copyFile(
  path.join(projectRoot, 'node_modules', 'react-dom', 'umd', 'react-dom.production.min.js'),
  path.join(outputDir, 'vendor', 'react-dom.production.min.js')
);

console.log(`Build listo: ${pages.length} páginas generadas en ${outputDir}`);
