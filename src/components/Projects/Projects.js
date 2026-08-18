import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { projects as projectData } from '../../data/projects';
import Reveal from '../Reveal';
import './Projects.css';

const published = projectData.filter((p) => p.status === 'published');

function ProjectShot({ image, title, shotSoon }) {
  if (image) {
    return (
      <img
        className="project-shot-img"
        src={`${process.env.PUBLIC_URL}/projects/${image}`}
        alt={`Screenshot — ${title}`}
        loading="lazy"
      />
    );
  }
  return (
    <div className="project-shot-ph" aria-hidden="true">
      <span className="project-shot-ph-title">{title}</span>
      <span className="project-shot-ph-note mono">{shotSoon}</span>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="projetos" className="section projects">
      <div className="container container--wide">
        <Reveal className="section-head">
          <span className="eyebrow">{p.eyebrow}</span>
          <h2 className="h2">{p.title}</h2>
          <p className="lead">{p.subtitle}</p>
        </Reveal>

        <div className="projects-list">
          {published.map((proj, i) => {
            const c = p.items[proj.slug];
            if (!c) return null;
            return (
              <Reveal
                as="article"
                className={`project ${i % 2 === 1 ? 'project--rev' : ''}`}
                key={proj.slug}
              >
                {/* Decorative duplicate of the title link: kept out of the tab order
                    so the card exposes one target, not three. */}
                <Link
                  className="project-media"
                  to={`/projetos/${proj.slug}`}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <ProjectShot image={proj.image} title={c.title} shotSoon={p.shotSoon} />
                </Link>

                <div className="project-body">
                  <div className="project-top">
                    <span className="project-index mono">{String(i + 1).padStart(2, '0')}</span>
                    <span className="project-cat mono">{c.category}</span>
                    {proj.featured && (
                      <span className="tag tag--accent project-featured">{p.featured}</span>
                    )}
                  </div>

                  <h3 className="project-title">
                    <Link className="project-title-link" to={`/projetos/${proj.slug}`}>{c.title}</Link>
                  </h3>
                  <p className="lead project-desc">{c.description}</p>

                  <ul className="project-highlights">
                    {c.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>

                  <div className="project-tags">
                    {proj.tech.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>

                  <div className="project-actions">
                    <Link className="link-arrow project-details" to={`/projetos/${proj.slug}`}>
                      {p.viewDetails}
                    </Link>
                    {proj.repoUrl && (
                      <a className="btn btn--ghost btn--sm" href={proj.repoUrl} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> {p.viewCode}
                      </a>
                    )}
                    {proj.demoUrl && (
                      <a className="btn btn--primary btn--sm" href={proj.demoUrl} target="_blank" rel="noopener noreferrer">
                        {p.viewDemo} <FaExternalLinkAlt />
                      </a>
                    )}
                    {!proj.repoUrl && !proj.demoUrl && (
                      <span className="project-private mono">{p.privateNote}</span>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="projects-more">
          <h3 className="h2 projects-more-title">{p.moreTitle}</h3>
          <p className="lead">{p.moreText}</p>
          <a className="btn btn--primary" href="https://github.com/P4d1lh4" target="_blank" rel="noopener noreferrer">
            <FaGithub /> {p.moreBtn}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
