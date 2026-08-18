import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Reveal from '../Reveal';
import './Experience.css';

export default function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experiencia" className="section section--alt experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{e.eyebrow}</span>
          <h2 className="h2">{e.title}</h2>
        </Reveal>

        <div className="exp-timeline">
          {e.items.map((item, i) => (
            <Reveal className="exp-item" key={`${item.company}-${i}`} delay={i * 0.04}>
              <div className="exp-period mono">{item.period}</div>
              <div className="exp-content">
                <div className="exp-role">{item.role}</div>
                <div className="exp-company mono">{item.company}</div>
                <p className="exp-desc">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="exp-extra">
          <Reveal className="exp-block">
            <div className="exp-block-label">{e.eduLabel}</div>
            {e.education.map((ed) => (
              <div className="exp-edu-item" key={ed.course}>
                <div className="exp-edu-course">{ed.course}</div>
                <div className="exp-edu-place mono">{ed.place}</div>
                <div className="exp-edu-period">{ed.period}</div>
              </div>
            ))}
          </Reveal>

          <Reveal className="exp-block" delay={0.06}>
            <div className="exp-block-label">{e.talksLabel}</div>
            <ul className="exp-talks">
              {e.talks.map((talk) => <li key={talk}>{talk}</li>)}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
