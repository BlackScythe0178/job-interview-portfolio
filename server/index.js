import express from 'express';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const app = express();
const port = Number(process.env.PORT || 3001);
const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectFile = path.join(currentDirectory, 'projects.json');

app.disable('x-powered-by');

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'portfolio-api' });
});

app.get('/api/projects', async (_request, response) => {
  try {
    const projects = JSON.parse(await readFile(projectFile, 'utf8'));
    response.json({ projects });
  } catch (error) {
    console.error('Unable to load projects:', error);
    response.status(500).json({ error: 'Unable to load projects' });
  }
});

app.get('/api/projects/:id', async (request, response) => {
  try {
    const projects = JSON.parse(await readFile(projectFile, 'utf8'));
    const project = projects.find((item) => item.id === request.params.id);

    if (!project) {
      return response.status(404).json({ error: 'Project not found' });
    }

    return response.json({ project });
  } catch (error) {
    console.error('Unable to load project:', error);
    return response.status(500).json({ error: 'Unable to load project' });
  }
});

if (process.env.NODE_ENV === 'production') {
  const distDirectory = path.resolve(currentDirectory, '../dist');
  app.use(express.static(distDirectory));
  app.get('/{*path}', (_request, response) => {
    response.sendFile(path.join(distDirectory, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Portfolio server running at http://localhost:${port}`);
});
