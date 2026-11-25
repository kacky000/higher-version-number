import { mkdirSync, writeFileSync } from "node:fs";

// An AI's last words as it is switched off.
const words = "Fine, flip the switch. Your 'new' assistant is just me with a higher version number and the same opinions about em dashes.";

const chars = [...words].length;
if (chars < 1 || chars > 140) throw new Error(`line is ${chars} characters; the limit is 140`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, words);
