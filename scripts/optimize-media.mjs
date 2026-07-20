import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ROOT = process.cwd();

const SOURCE_EARTH = path.resolve(ROOT, 'footage');
const SOURCE_HOLDING = path.resolve(ROOT, 'holdingIMG/upscayl_png_upscayl-lite-4x_4x');

const TARGETS = {
  earth: {
    desktop: path.resolve(ROOT, 'public/media/earth/desktop'),
    mobile: path.resolve(ROOT, 'public/media/earth/mobile'),
  },
  holding: {
    desktop: path.resolve(ROOT, 'public/media/holding/desktop'),
    mobile: path.resolve(ROOT, 'public/media/holding/mobile'),
  },
};

const MANIFEST_FILE = path.resolve(ROOT, 'src/data/mediaManifest.js');
const FORMAT = getArgValue('--format') || process.env.IMAGE_FORMAT || 'webp';

const FORMAT_OPTIONS = {
  webp: {
    extension: 'webp',
    desktop: { quality: 84 },
    mobile: { quality: 82 },
  },
  avif: {
    extension: 'avif',
    desktop: { quality: 52, effort: 6 },
    mobile: { quality: 48, effort: 6 },
  },
};

const SEQUENCES = [
  {
    key: 'earth',
    label: 'Earth footage',
    source: SOURCE_EARTH,
    desktopWidth: 1440,
    mobileWidth: 1080,
    mobileEverySecondFrame: true,
  },
  {
    key: 'holding',
    label: 'Holding footage',
    source: SOURCE_HOLDING,
    desktopWidth: 1920,
    mobileWidth: 1080,
    mobileEverySecondFrame: true,
  },
];

function getArgValue(name) {
  const arg = process.argv.find((item) => item.startsWith(`${name}=`));
  return arg ? arg.split('=').slice(1).join('=').trim() : null;
}

function ensureDirExists(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function getFilesNaturalSort(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir)
    .filter((file) => /\.(png|jpe?g|tiff?)$/i.test(file))
    .filter((file) => fs.statSync(path.join(dir, file)).size > 0)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
}

function analyzeSequence(files, name) {
  console.log(`\n--- Analysis: ${name} ---`);
  console.log(`Total source frames: ${files.length}`);
  if (!files.length) return;

  console.log(`First frame: ${files[0]}`);
  console.log(`Last frame: ${files[files.length - 1]}`);

  const numbers = files
    .map((file) => {
      const match = file.match(/\d+/g);
      return match ? Number.parseInt(match.at(-1), 10) : null;
    })
    .filter((value) => value !== null);

  if (numbers.length <= 1) return;

  const existing = new Set(numbers);
  const missing = [];
  for (let i = numbers[0]; i <= numbers.at(-1); i += 1) {
    if (!existing.has(i)) missing.push(i);
  }

  console.log(missing.length ? `Missing frame numbers: ${missing.join(', ')}` : 'No missing frame numbers detected.');
}

async function getDirSize(dir, extension) {
  if (!fs.existsSync(dir)) return 0;

  let size = 0;
  for (const file of fs.readdirSync(dir)) {
    if (extension && !file.endsWith(`.${extension}`)) continue;
    const target = path.join(dir, file);
    if (fs.statSync(target).isFile()) size += fs.statSync(target).size;
  }
  return size;
}

function formatSize(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function toPublicPath(absolutePath) {
  return absolutePath
    .replace(path.resolve(ROOT, 'public'), '')
    .replaceAll(path.sep, '/');
}

async function writeOptimizedFrame(sourcePath, targetPath, width, formatConfig) {
  const pipeline = sharp(sourcePath).resize({ width, withoutEnlargement: true });

  if (FORMAT === 'avif') {
    await pipeline.avif(formatConfig).toFile(targetPath);
    return;
  }

  await pipeline.webp(formatConfig).toFile(targetPath);
}

async function processSequence(sequence, files, formatConfig) {
  const targets = TARGETS[sequence.key];
  ensureDirExists(targets.desktop);
  ensureDirExists(targets.mobile);

  const desktopFrames = [];
  const mobileFrames = [];
  const extension = formatConfig.extension;

  const originalSize = files.reduce((total, file) => {
    return total + fs.statSync(path.join(sequence.source, file)).size;
  }, 0);

  console.log(`Original size: ${formatSize(originalSize)}`);

  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];
    const sourcePath = path.join(sequence.source, file);
    const baseName = path.parse(file).name;
    const outputName = `${baseName}.${extension}`;

    try {
      const desktopTarget = path.join(targets.desktop, outputName);
      await writeOptimizedFrame(
        sourcePath,
        desktopTarget,
        sequence.desktopWidth,
        formatConfig.desktop,
      );
      desktopFrames.push(toPublicPath(desktopTarget));

      const includeMobile = sequence.mobileEverySecondFrame ? i % 2 === 0 : true;
      if (includeMobile) {
        const mobileTarget = path.join(targets.mobile, outputName);
        await writeOptimizedFrame(
          sourcePath,
          mobileTarget,
          sequence.mobileWidth,
          formatConfig.mobile,
        );
        mobileFrames.push(toPublicPath(mobileTarget));
      }
    } catch (error) {
      console.error(`Skipping ${file}: ${error.message}`);
    }

    if ((i + 1) % 50 === 0) {
      console.log(`Processed ${i + 1}/${files.length} frames...`);
    }
  }

  const desktopSize = await getDirSize(targets.desktop, extension);
  const mobileSize = await getDirSize(targets.mobile, extension);

  console.log(`Desktop optimized size: ${formatSize(desktopSize)} (${desktopFrames.length} frames)`);
  console.log(`Mobile optimized size: ${formatSize(mobileSize)} (${mobileFrames.length} frames)`);

  return { desktopFrames, mobileFrames };
}

function writeManifest(results) {
  const manifestContent = `// Auto-generated by scripts/optimize-media.mjs
export const earthDesktopFrames = ${JSON.stringify(results.earth.desktopFrames, null, 2)};
export const earthMobileFrames = ${JSON.stringify(results.earth.mobileFrames, null, 2)};
export const holdingDesktopFrames = ${JSON.stringify(results.holding.desktopFrames, null, 2)};
export const holdingMobileFrames = ${JSON.stringify(results.holding.mobileFrames, null, 2)};
`;

  fs.writeFileSync(MANIFEST_FILE, manifestContent);
}

async function main() {
  const formatConfig = FORMAT_OPTIONS[FORMAT];
  if (!formatConfig) {
    throw new Error(`Unsupported format "${FORMAT}". Use --format=webp or --format=avif.`);
  }

  console.log(`Starting media optimization. Output format: ${FORMAT}`);
  ensureDirExists(path.dirname(MANIFEST_FILE));

  const results = {};

  for (const sequence of SEQUENCES) {
    const files = getFilesNaturalSort(sequence.source);
    analyzeSequence(files, sequence.label);

    if (!files.length) {
      results[sequence.key] = { desktopFrames: [], mobileFrames: [] };
      continue;
    }

    results[sequence.key] = await processSequence(sequence, files, formatConfig);
  }

  writeManifest(results);
  console.log(`\nManifest written to ${MANIFEST_FILE}`);
  console.log('Optimization complete.');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
