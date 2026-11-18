import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Intro from '../components/home/Intro';
import { Work, ProjectGrid, Stack, Education, Contact } from '../components/home/Sections';
import '../components/home/home.css';

// The v2 site had one page per section; those URLs still land on the right section.
const LEGACY_PATHS = {
  '/sobre': 'inicio',
  '/experiencias': 'experiencia',
  '/projetos': 'projetos',
  '/contato': 'contato',
};

export default function Home() {
  const { pathname, state } = useLocation();
  const target = state?.section || LEGACY_PATHS[pathname];

  useEffect(() => {
    if (!target) return;
    const id = requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView());
    return () => cancelAnimationFrame(id);
  }, [target]);

  return (
    <div className="column home">
      <Intro />
      <Work />
      <ProjectGrid />
      <Stack />
      <Education />
      <Contact />
    </div>
  );
}
