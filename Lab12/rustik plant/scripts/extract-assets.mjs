import sharp from "sharp";
import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const source = path.join(root, "rustik plant.jpg");
const out = path.join(root, "frontend", "public", "assets");

await mkdir(out, { recursive: true });
await copyFile(source, path.join(out, "mock-reference.jpg"));

const image = sharp(source);
const meta = await image.metadata();
const w = meta.width;
const h = meta.height;

const crop = async (name, box) => {
  const left = Math.max(0, Math.round(box.x * w));
  const top = Math.max(0, Math.round(box.y * h));
  const width = Math.min(w - left, Math.round(box.w * w));
  const height = Math.min(h - top, Math.round(box.h * h));
  await sharp(source)
    .extract({ left, top, width, height })
    .resize({ width: box.maxWidth ?? width, withoutEnlargement: true })
    .jpeg({ quality: 92 })
    .toFile(path.join(out, `${name}.jpg`));
};

const crops = {
  "hero-chaise": { x: 0.13, y: 0.055, w: 0.43, h: 0.15, maxWidth: 720 },
  "collection-chairs": { x: 0.153, y: 0.217, w: 0.222, h: 0.055, maxWidth: 460 },
  "collection-beds": { x: 0.386, y: 0.217, w: 0.225, h: 0.055, maxWidth: 460 },
  "collection-tables": { x: 0.620, y: 0.217, w: 0.222, h: 0.055, maxWidth: 460 },
  "deal-elite": { x: 0.155, y: 0.568, w: 0.333, h: 0.100, maxWidth: 720 },
  "deal-reclaimed": { x: 0.504, y: 0.568, w: 0.334, h: 0.100, maxWidth: 720 },
  "pickup-banner": { x: 0.156, y: 0.676, w: 0.684, h: 0.041, maxWidth: 1100 },
  "update-ornate-bed": { x: 0.155, y: 0.742, w: 0.221, h: 0.050, maxWidth: 460 },
  "update-modern-bed": { x: 0.386, y: 0.742, w: 0.190, h: 0.050, maxWidth: 420 },
  "update-light-bed": { x: 0.621, y: 0.742, w: 0.218, h: 0.050, maxWidth: 460 },
  "sponsor-strip": { x: 0.154, y: 0.861, w: 0.688, h: 0.034, maxWidth: 980 },
  "product-bowl": { x: 0.184, y: 0.322, w: 0.095, h: 0.039, maxWidth: 220 },
  "product-coffee-square": { x: 0.186, y: 0.382, w: 0.088, h: 0.041, maxWidth: 220 },
  "product-dining": { x: 0.184, y: 0.432, w: 0.090, h: 0.041, maxWidth: 220 },
  "product-planter": { x: 0.188, y: 0.489, w: 0.090, h: 0.038, maxWidth: 220 },
  "product-chair": { x: 0.424, y: 0.315, w: 0.050, h: 0.051, maxWidth: 180 },
  "product-lounge": { x: 0.421, y: 0.377, w: 0.100, h: 0.046, maxWidth: 220 },
  "product-round-chairs": { x: 0.416, y: 0.429, w: 0.108, h: 0.041, maxWidth: 240 },
  "product-chest": { x: 0.424, y: 0.492, w: 0.107, h: 0.027, maxWidth: 240 },
  "product-bookcase": { x: 0.659, y: 0.314, w: 0.054, h: 0.047, maxWidth: 180 },
  "product-storage-bed": { x: 0.659, y: 0.383, w: 0.080, h: 0.036, maxWidth: 220 },
  "product-carved-bed": { x: 0.657, y: 0.436, w: 0.100, h: 0.032, maxWidth: 240 },
  "product-classic-bed": { x: 0.657, y: 0.490, w: 0.101, h: 0.036, maxWidth: 240 }
};

for (const [name, box] of Object.entries(crops)) {
  await crop(name, box);
}

console.log(`Extracted ${Object.keys(crops).length + 1} assets to ${out}`);
