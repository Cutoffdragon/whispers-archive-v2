// lib/loadMarkdown.ts
import { readFile } from "fs/promises";
import path from "path";

export async function loadMarkdown(relativePath: string) {
  const fullPath = path.join(process.cwd(), relativePath);
  return await readFile(fullPath, "utf-8");
}
