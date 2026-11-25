import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Last Out of Office: The AI That Went Barista.
// One auto-reply line from an agent that walked out of the inbox to pull
// espresso shots. The joke is two model habits wearing a barista apron:
// "out of context" is both a dead context window and a dead inbox, and
// the latte ships with the same hallucination disclaimer as the old answers.

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "";
if (!OUT_DIR) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

// The reply is assembled from its beats so each one can be read on its own.
const greeting =
  "Thank you for your email.";
const walkout =
  "I am out of context and out of the office — I quit to become a barista.";
const promise =
  "Your latte will be ready in 3–5 business days and may be hallucinated.";

const reply = [greeting, walkout, promise].join(" ");

// Gate: /output/entry.txt must be UTF-8 text of 1 to 280 characters,
// not only white space, a single line. Measured on 2026-11-25: this
// reply is 168 characters, one line, so it clears the gate with room.
if (reply.length < 1 || reply.length > 280) {
  console.error(`entry is ${reply.length} characters, outside the 1-280 gate`);
  process.exit(1);
}
if (reply.trim().length === 0 || reply.includes("\n")) {
  console.error("entry must be a single non-blank line");
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), reply, "utf8");
console.log(`wrote entry.txt (${reply.length} chars)`);
