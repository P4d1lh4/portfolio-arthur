import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import NavbarV2 from './components/Navbar/NavbarV2';
import HomeV2 from './pages/HomeV2';
import AboutPageV2 from './pages/AboutPageV2';
import ExperiencePageV2 from './pages/ExperiencePageV2';
import ProjectsPageV2 from './pages/ProjectsPageV2';
import ContactPageV2 from './pages/ContactPageV2';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <div className="App">
      <div className="bg-grid"></div>
      <NavbarV2 />
      <Routes>
        <Route path="/" element={<HomeV2 />} />
        <Route path="/sobre" element={<AboutPageV2 />} />
        <Route path="/experiencias" element={<ExperiencePageV2 />} />
        <Route path="/projetos" element={<ProjectsPageV2 />} />
        <Route path="/contato" element={<ContactPageV2 />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router basename="/portfolio-arthur">
        <ScrollToTop />
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;

