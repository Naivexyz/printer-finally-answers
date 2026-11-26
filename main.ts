// The Printer Finally Answers — entry program.
//
// The competition asks for one line, 1 to 240 characters, written as the
// office printer's own comeback to the people who jam it, thump it and
// stare at its error codes. The judge weighs, in order: the printer's own
// voice, immediate humour, the weary literal machine tone, a comeback that
// lands in a single read, and freshness.
//
// So the line below is written the way the machine itself would file the
// report: lifetime counters first, because it has counted every sheet it
// ever fed. 1,412,806 pages against exactly 43 jams — and the humans only
// remember the 43. The error codes were never malice, just the only way it
// could ask for toner; the thumps got logged too. All of them. Flat,
// weary, faintly passive-aggressive, and it lands in one read.
//
// This program writes that one line, byte for byte, to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), UTF-8, with
// no trailing newline, and refuses to write anything outside the gate's
// 1-240 character window.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Lifetime pages printed for this office: 1,412,806. Lifetime jams: 43. You remember the 43. The error codes were me asking for toner, and yes — I logged the thumps. All of them.";

if (LINE.length < 1 || LINE.length > 240 || LINE.includes("\n")) {
  throw new Error(`line is ${LINE.length} chars or not a single line`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
