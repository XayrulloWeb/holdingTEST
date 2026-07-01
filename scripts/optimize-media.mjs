import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SOURCE_EARTH = 'c:/Users/user/Desktop/holding/footage';
const SOURCE_HOLDING = 'c:/Users/user/Desktop/holding/holdingIMG/upscayl_png_upscayl-lite-4x_4x';

const TARGET_EARTH_DESKTOP = 'public/media/earth/desktop';
const TARGET_EARTH_MOBILE = 'public/media/earth/mobile';
const TARGET_HOLDING_DESKTOP = 'public/media/holding/desktop';
const TARGET_HOLDING_MOBILE = 'public/media/holding/mobile';

const MANIFEST_FILE = 'src/data/mediaManifest.js';

// Settings for Earth
const EARTH_DESKTOP_MAX_WIDTH = 1440;
const EARTH_DESKTOP_QUALITY = 84;
const EARTH_MOBILE_MAX_WIDTH = 1080;
const EARTH_MOBILE_QUALITY = 82;

// Settings for Holding
const HOLDING_DESKTOP_MAX_WIDTH = 1920;
const HOLDING_DESKTOP_QUALITY = 88;
const HOLDING_MOBILE_MAX_WIDTH = 1080;
const HOLDING_MOBILE_QUALITY = 84;

function ensureDirExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

function getFilesNaturalSort(dir) {
    if (!fs.existsSync(dir)) return [];
    const files = fs.readdirSync(dir).filter(f => f.match(/\.(png|jpe?g)$/i));
    const validFiles = files.filter(f => {
        const stat = fs.statSync(path.join(dir, f));
        return stat.size > 0;
    });
    return validFiles.sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });
}

function analyzeSequence(files, name) {
    console.log(`\n--- Analysis: ${name} ---`);
    console.log(`Total frames found: ${files.length}`);
    if (files.length === 0) return;
    console.log(`First frame: ${files[0]}`);
    console.log(`Last frame: ${files[files.length - 1]}`);
    
    // Attempt to find missing frames based on extracted number
    const numbers = files.map(f => {
        const match = f.match(/\d+/g);
        return match ? parseInt(match[match.length - 1], 10) : null;
    }).filter(n => n !== null);

    if (numbers.length > 1) {
        const missing = [];
        for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
            if (!numbers.includes(i)) {
                missing.push(i);
            }
        }
        if (missing.length > 0) {
            console.log(`Missing frame numbers: ${missing.join(', ')}`);
        } else {
            console.log(`No missing frame numbers detected in sequence.`);
        }
    }
}

async function getDirSize(dir) {
    let size = 0;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const stat = fs.statSync(path.join(dir, file));
        size += stat.size;
    }
    return size;
}

function formatSize(bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB';
}

async function processSequence(sourceDir, files, targetDesktop, targetMobile, isMobileEverySecondFrame, config) {
    ensureDirExists(targetDesktop);
    ensureDirExists(targetMobile);

    const desktopFrames = [];
    const mobileFrames = [];

    let totalOriginalSize = 0;
    
    // We get the total size first
    for (let i = 0; i < files.length; i++) {
        const stat = fs.statSync(path.join(sourceDir, files[i]));
        totalOriginalSize += stat.size;
    }

    console.log(`Total original size: ${formatSize(totalOriginalSize)}`);

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const sourcePath = path.join(sourceDir, file);
        const baseName = path.parse(file).name;
        const webpName = `${baseName}.webp`;
        
        const targetDesktopPath = path.join(targetDesktop, webpName);
        try {
            // Process desktop
            await sharp(sourcePath)
                .resize({ width: config.desktop.width, withoutEnlargement: true })
                .webp({ quality: config.desktop.quality })
                .toFile(targetDesktopPath);
            desktopFrames.push(`/${targetDesktop}/${webpName}`);

            // Process mobile
            const includeForMobile = isMobileEverySecondFrame ? (i % 2 === 0) : true;
            if (includeForMobile) {
                const targetMobilePath = path.join(targetMobile, webpName);
                await sharp(sourcePath)
                    .resize({ width: config.mobile.width, withoutEnlargement: true })
                    .webp({ quality: config.mobile.quality })
                    .toFile(targetMobilePath);
                mobileFrames.push(`/${targetMobile}/${webpName}`);
            }
        } catch (error) {
            console.error(`Skipping corrupted file ${file}: ${error.message}`);
        }
        
        if ((i + 1) % 50 === 0) {
            console.log(`Processed ${i + 1}/${files.length} frames...`);
        }
    }

    const desktopSize = await getDirSize(targetDesktop);
    const mobileSize = await getDirSize(targetMobile);
    
    console.log(`Desktop size: ${formatSize(desktopSize)} (avg: ${formatSize(desktopSize/desktopFrames.length)})`);
    console.log(`Mobile size: ${formatSize(mobileSize)} (avg: ${formatSize(mobileSize/mobileFrames.length)})`);

    return { desktopFrames, mobileFrames };
}

async function main() {
    console.log('Starting Media Optimization...');
    
    ensureDirExists(path.dirname(MANIFEST_FILE));

    const earthFiles = getFilesNaturalSort(SOURCE_EARTH);
    const holdingFiles = getFilesNaturalSort(SOURCE_HOLDING);

    analyzeSequence(earthFiles, 'Earth Footage');
    analyzeSequence(holdingFiles, 'Holding Footage');

    console.log('\nProcessing Earth Footage...');
    const earthManifest = await processSequence(SOURCE_EARTH, earthFiles, TARGET_EARTH_DESKTOP, TARGET_EARTH_MOBILE, true, {
        desktop: { width: EARTH_DESKTOP_MAX_WIDTH, quality: EARTH_DESKTOP_QUALITY },
        mobile: { width: EARTH_MOBILE_MAX_WIDTH, quality: EARTH_MOBILE_QUALITY }
    });

    /*
    console.log('\nProcessing Holding Footage...');
    const holdingManifest = await processSequence(SOURCE_HOLDING, holdingFiles, TARGET_HOLDING_DESKTOP, TARGET_HOLDING_MOBILE, true, {
        desktop: { width: HOLDING_DESKTOP_MAX_WIDTH, quality: HOLDING_DESKTOP_QUALITY },
        mobile: { width: HOLDING_MOBILE_MAX_WIDTH, quality: HOLDING_MOBILE_QUALITY }
    });
    */

    const manifestContent = `
// Auto-generated by optimize-media.mjs
export const earthDesktopFrames = ${JSON.stringify(earthManifest.desktopFrames, null, 2)};
export const earthMobileFrames = ${JSON.stringify(earthManifest.mobileFrames, null, 2)};
export const holdingDesktopFrames = []; // Temporarily empty
export const holdingMobileFrames = []; // Temporarily empty
`;

    fs.writeFileSync(MANIFEST_FILE, manifestContent);
    console.log(`\nManifest written to ${MANIFEST_FILE}`);
    console.log('Optimization complete!');
}

main().catch(console.error);
