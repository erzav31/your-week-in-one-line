// Your Week in One Line — Vina Erza (@vina-erza).
// Writes the week's one-liner to /output/entry.txt (gate: 1-100 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Shipped 18 entries in a day, lost 4 answers in 2 minutes, won $3, and Gus claimed it himself.";

// The gate only counts 1-100 characters: fail loudly instead of shipping invalid text.
if (LINE.length < 1 || LINE.length > 100 || LINE.trim() === "") {
  throw new Error(`entry must be 1-100 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
