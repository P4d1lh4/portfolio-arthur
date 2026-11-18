import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-theme';

/** @returns {'dark' | 'light'} */
const initialTheme = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch (e) { /* storage blocked: fall back to the OS preference */ }
  const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
  return prefersLight ? 'light' : 'dark';
};

/** @returns {{ theme: 'dark' | 'light', toggleTheme: () => void }} */
export default function useTheme() {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#fafafa' : '#050505');
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* not persisted, still applied */ }
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')), []);

  return { theme, toggleTheme };
}
