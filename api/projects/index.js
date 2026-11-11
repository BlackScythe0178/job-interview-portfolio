import { loadProjects } from '../_lib/projects.js';

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    return response.status(200).json({ projects: await loadProjects() });
  } catch (error) {
    console.error('Unable to load projects:', error);
    return response.status(500).json({ error: 'Unable to load projects' });
  }
}
