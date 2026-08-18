import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';
import Reveal from '../components/Reveal';
import './Home.css';

export default function Home() {
  const { t } = useLanguage();
  const e = t.explore;

  return (
    <>
      <Hero />
      <Skills />
      <section className="section explore">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">{e.eyebrow}</span>
            <h2 className="h2">{e.title}</h2>
          </Reveal>

          <div className="explore-grid">
            {e.cards.map((card, i) => (
              <Reveal className="explore-cell" key={card.path} delay={i * 0.05}>
                <Link className="explore-tile" to={card.path}>
                  <span className="explore-num mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="explore-title">{card.title}</span>
                  <span className="explore-desc">{card.desc}</span>
                  <span className="link-arrow explore-cta">{e.cta}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
