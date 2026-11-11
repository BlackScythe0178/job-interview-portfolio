import { readFile } from 'node:fs/promises';
import path from 'node:path';

const projectFile = path.join(process.cwd(), 'server', 'projects.json');

export async function loadProjects() {
  return JSON.parse(await readFile(projectFile, 'utf8'));
}
