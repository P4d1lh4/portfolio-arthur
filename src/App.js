import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import useTheme from './hooks/useTheme';
import Island from './components/Island/Island';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (!state?.section) window.scrollTo(0, 0);
  }, [pathname, state]);
  return null;
}

function AppContent() {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Project pages set their own title (they know the project name).
    if (!pathname.startsWith('/projetos/')) document.title = t.docTitle;
  }, [t.docTitle, pathname]);

  return (
    <>
      <a className="skip-link" href="#conteudo">{t.nav.skip}</a>
      <Island theme={theme} toggleTheme={toggleTheme} />
      <main id="conteudo">
        <Routes>
          <Route path="/projetos/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router basename="/portfolio-arthur">
        <ScrollToTop />
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}
