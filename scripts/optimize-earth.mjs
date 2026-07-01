import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SOURCE_EARTH = 'c:/Users/user/Desktop/footage';
const TARGET_EARTH_DESKTOP = 'c:/Users/user/Desktop/holding/public/media/earth/desktop';
const TARGET_EARTH_MOBILE = 'c:/Users/user/Desktop/holding/public/media/earth/mobile';
const MANIFEST_FILE = 'c:/Users/user/Desktop/holding/src/data/mediaManifest.js';

const EARTH_DESKTOP_MAX_WIDTH = 1440;
const EARTH_DESKTOP_QUALITY = 84;
const EARTH_MOBILE_MAX_WIDTH = 1080;
const EARTH_MOBILE_QUALITY = 82;

function ensureDirExists(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function getFilesNaturalSort(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
        .filter(f => f.match(/\.(png|jpe?g)$/i))
        .filter(f => fs.statSync(path.join(dir, f)).size > 0)
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
}

async function run() {
    console.log('Processing Earth Footage with new lighter settings...');
    ensureDirExists(TARGET_EARTH_DESKTOP);
    ensureDirExists(TARGET_EARTH_MOBILE);

    const files = getFilesNaturalSort(SOURCE_EARTH);
    if (files.length === 0) {
        console.error('No earth files found in ' + SOURCE_EARTH);
        return;
    }

    const desktopFrames = [];
    const mobileFrames = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const sourcePath = path.join(SOURCE_EARTH, file);
        const webpName = path.parse(file).name + '.webp';

        try {
            await sharp(sourcePath)
                .resize({ width: EARTH_DESKTOP_MAX_WIDTH, withoutEnlargement: true })
                .webp({ quality: EARTH_DESKTOP_QUALITY })
                .toFile(path.join(TARGET_EARTH_DESKTOP, webpName));
            desktopFrames.push(`/public/media/earth/desktop/${webpName}`);

            if (i % 2 === 0) {
                await sharp(sourcePath)
                    .resize({ width: EARTH_MOBILE_MAX_WIDTH, withoutEnlargement: true })
                    .webp({ quality: EARTH_MOBILE_QUALITY })
                    .toFile(path.join(TARGET_EARTH_MOBILE, webpName));
                mobileFrames.push(`/public/media/earth/mobile/${webpName}`);
            }
        } catch (err) {
            console.error('Error on ' + file, err);
        }
    }

    // Now update the manifest.
    let manifestContent = fs.readFileSync(MANIFEST_FILE, 'utf8');
    
    const dRegex = /export const earthDesktopFrames = \[[\s\S]*?\];/;
    const mRegex = /export const earthMobileFrames = \[[\s\S]*?\];/;
    
    manifestContent = manifestContent.replace(dRegex, `export const earthDesktopFrames = ${JSON.stringify(desktopFrames, null, 2)};`);
    manifestContent = manifestContent.replace(mRegex, `export const earthMobileFrames = ${JSON.stringify(mobileFrames, null, 2)};`);
    
    fs.writeFileSync(MANIFEST_FILE, manifestContent);
    console.log('Done! Earth sequence is now lighter.');
}

run();
