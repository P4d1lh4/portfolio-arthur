import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Reveal from '../Reveal';
import './About.css';

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="sobre" className="section about">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{a.eyebrow}</span>
          <h2 className="h2">{a.title}</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal as="aside" className="about-aside">
            {/* Substitua o monograma por uma foto: coloque o AP num círculo com sua imagem */}
            <div className="about-monogram" aria-hidden="true">AP</div>
            <div className="about-name">Arthur Padilha</div>
            <div className="about-role">Full-Stack Developer</div>

            <dl className="about-facts">
              {a.facts.map((f) => (
                <div className="about-fact" key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="about-main" delay={0.08}>
            {a.bio.map((line, i) => (
              <p className="lead about-bio" key={i}>{line}</p>
            ))}

            <div className="about-soft">
              <div className="about-soft-label">{a.softLabel}</div>
              <div className="about-soft-tags">
                {a.soft.map((s) => (
                  <span className="tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
