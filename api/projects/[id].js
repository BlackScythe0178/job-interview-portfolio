import { loadProjects } from '../_lib/projects.js';

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const projects = await loadProjects();
    const project = projects.find((item) => item.id === request.query.id);

    if (!project) {
      return response.status(404).json({ error: 'Project not found' });
    }

    return response.status(200).json({ project });
  } catch (error) {
    console.error('Unable to load project:', error);
    return response.status(500).json({ error: 'Unable to load project' });
  }
}
