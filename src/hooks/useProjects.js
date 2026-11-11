import { useEffect, useState } from 'react';
import { fallbackProjects } from '../data/fallbackProjects';

export function useProjects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [source, setSource] = useState('fallback');

  useEffect(() => {
    const controller = new AbortController();

    async function loadProjects() {
      try {
        const response = await fetch('/api/projects', { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        if (!Array.isArray(data.projects)) throw new Error('Invalid API response');

        setProjects(data.projects);
        setSource('api');
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.warn('API unavailable; showing bundled projects.', error);
        }
      }
    }

    loadProjects();
    return () => controller.abort();
  }, []);

  return { projects, source };
}
