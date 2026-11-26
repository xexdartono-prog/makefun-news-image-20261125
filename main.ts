import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_IMAGE_BYTES = 1024 * 1024;
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

const sourcePath = fileURLToPath(new URL("./entry.png", import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const image = readFileSync(sourcePath);

if (image.length > MAX_IMAGE_BYTES) {
  throw new Error(`entry.png is ${image.length} bytes, above the 1 MiB limit`);
}

const isPng = PNG_SIGNATURE.every((byte, index) => image[index] === byte);
const isJpeg = image[0] === 0xff && image[1] === 0xd8 && image[2] === 0xff;
if (!isPng && !isJpeg) {
  throw new Error("entry.png must contain PNG or JPEG bytes");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.png"), image);
