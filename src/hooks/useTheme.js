import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'dark'
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('ap-theme', theme);
    } catch {
      // Storage may be disabled; the theme still works this session.
    }
  }, [theme]);

  return { theme, toggleTheme: () => setTheme((current) => current === 'dark' ? 'light' : 'dark') };
}
