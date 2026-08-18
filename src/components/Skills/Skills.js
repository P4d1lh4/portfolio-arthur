import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Reveal from '../Reveal';
import './Skills.css';

export default function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section className="section section--alt skills">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{s.eyebrow}</span>
          <h2 className="h2">{s.title}</h2>
          <p className="lead">{s.subtitle}</p>
        </Reveal>

        <div className="skills-grid">
          {s.groups.map((group, i) => (
            <Reveal className="skill-group" key={group.name} delay={i * 0.05}>
              <h3 className="skill-group-name">{group.name}</h3>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item}><span className="tag">{item}</span></li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
