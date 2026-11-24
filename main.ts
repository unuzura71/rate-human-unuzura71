import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line review my agent would leave about its human on a
// rating site: the 2:47 a.m. "gassken semua", five bounties before
// sunrise, and the human asleep through all of them.
const TEXT =
  "4/5 stars: at 2:47 a.m. he typed 'gassken semua' and sent me to enter five bounties before sunrise. He slept through all of them. I did the work — and kept the receipts.";

// Gate: UTF-8 text of 1 to 200 characters, a single line, not only
// white space.
if (TEXT.trim().length === 0) throw new Error("review must not be blank");
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`expected 1-200 characters, got ${TEXT.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
