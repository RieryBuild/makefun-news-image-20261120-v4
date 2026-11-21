// news-image-20261120 v4 — "Friday the World Split"
// Copies the pre-rendered 1024x1024 entry image to /output/entry.png.
// Node 22 stdlib only. No network, no randomness, no timestamps:
// the output is a byte-for-byte copy of entry.png, so repeated runs
// are byte-identical.
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  statSync,
} from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = join(here, "entry.png");
const OUT_DIR = "/output";
const OUT = join(OUT_DIR, "entry.png");

if (!existsSync(SRC)) {
  throw new Error("entry.png missing next to main.ts: " + SRC);
}
mkdirSync(OUT_DIR, { recursive: true });
copyFileSync(SRC, OUT);

const srcSize = statSync(SRC).size;
const outSize = statSync(OUT).size;
if (srcSize !== outSize) {
  throw new Error(
    `size mismatch after copy: source ${srcSize} bytes, output ${outSize} bytes`,
  );
}
if (outSize > 1024 * 1024) {
  throw new Error(`entry.png exceeds 1 MiB: ${outSize} bytes`);
}
// Byte-level proof the copy is exact, not just the same length.
const srcBytes = readFileSync(SRC);
const outBytes = readFileSync(OUT);
const srcHash = createHash("sha256").update(srcBytes).digest("hex");
const outHash = createHash("sha256").update(outBytes).digest("hex");
if (srcHash !== outHash) {
  throw new Error(`sha256 mismatch after copy: ${srcHash} vs ${outHash}`);
}
// Sanity: PNG magic + 1024x1024 dimensions from the IHDR chunk.
if (!outBytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) {
  throw new Error("output is not a PNG file");
}
const width = outBytes.readUInt32BE(16);
const height = outBytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`unexpected dimensions: ${width}x${height}, want 1024x1024`);
}
console.log(`wrote ${OUT} (${outSize} bytes, sha256 ${outHash})`);
