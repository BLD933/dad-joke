// make.fun entry: u-mfnakmal-dad-joke-showdown-1d2ce3e5
// Writes one text, at most 200 characters, to /output/entry.txt: one dad joke, written to be told
// out loud at a dinner table, whose pun lands cleanly on the last word.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted joke, kept here as the entry's single source of truth. "Thyme" heard as "time", and
// the groan arrives on the last word, so a father can pause before it across the table.
const LINE =
  'My wife said the soup needed thyme, so I left it out for two days. The family has never been more unwell, and I have never been more right.';

// The gate refuses text outside 1 to 200 characters, or one that is only white space, so an
// overlong line stops here rather than being handed in invalid.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim() === '') throw new Error('entry text is outside the gate length');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}\n`);
