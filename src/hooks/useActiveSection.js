import { useEffect, useState } from 'react';

/**
 * Tracks which section is under the top third of the viewport and how far the page is scrolled.
 * @param {string[]} ids section element ids, in page order
 * @param {boolean} enabled false on pages that don't render those sections
 * @returns {{ active: string, progress: number }} progress is 0–100
 */
export default function useActiveSection(ids, enabled) {
  const [active, setActive] = useState(ids[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0);

      if (!enabled) return;
      const probe = window.innerHeight / 3;
      const current = ids.reduce((found, id) => {
        const el = document.getElementById(id);
        return el && el.getBoundingClientRect().top <= probe ? id : found;
      }, ids[0]);
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids, enabled]);

  return { active, progress };
}
