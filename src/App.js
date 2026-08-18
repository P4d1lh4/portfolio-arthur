import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './components/Contact/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function TitleUpdater() {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  useEffect(() => {
    // Project detail pages set their own title (they know the project name).
    if (pathname.startsWith('/projetos/')) return;
    const link = t.nav.links.find((l) => l.path !== '/' && pathname === l.path);
    document.title = link ? `${link.label} — ${t.docTitle}` : t.docTitle;
  }, [t, pathname]);
  return null;
}

function AppContent() {
  const { t } = useLanguage();
  return (
    <div className="app">
      <a className="skip-link" href="#conteudo">{t.nav.skip}</a>
      <Nav />
      <main id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/experiencias" element={<Experience />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/projetos/:slug" element={<ProjectDetail />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router basename="/portfolio-arthur">
        <ScrollToTop />
        <TitleUpdater />
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}
