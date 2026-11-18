import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiGithub, FiArrowUpRight, FiArrowLeft } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { projects as projectData } from '../data/projects';
import Reveal from '../components/Reveal';
import './ProjectDetail.css';

const published = projectData.filter((p) => p.status === 'published');
const shotSrc = (file) => `${process.env.PUBLIC_URL}/projects/${file}`;

function Shot({ file, alt, caption, priority = false }) {
  return (
    <figure className="pd-figure">
      <img
        className="pd-shot"
        src={shotSrc(file)}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        width="1600"
        height="1000"
      />
      {caption && <figcaption className="pd-caption">{caption}</figcaption>}
    </figure>
  );
}

function NotFound({ d }) {
  return (
    <section className="pd">
      <div className="column pd-empty">
        <h1 className="pd-title">{d.notFoundTitle}</h1>
        <p className="pd-lead">{d.notFoundText}</p>
        <Link className="pill pill--solid" to="/" state={{ section: 'projetos' }}>{d.notFoundCta}</Link>
      </div>
    </section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const d = t.projectDetail;

  const index = published.findIndex((p) => p.slug === slug);
  const project = index === -1 ? null : published[index];
  const copy = project ? t.projects.items[project.slug] : null;
  const detail = copy?.detail;

  // Runs after App's TitleUpdater (child effects fire last), so this title wins.
  useEffect(() => {
    if (copy) document.title = `${copy.title} — ${t.docTitle}`;
  }, [copy, t.docTitle]);

  if (!project || !copy || !detail) return <NotFound d={d} />;

  const next = published[(index + 1) % published.length];
  const nextCopy = t.projects.items[next.slug];
  const captions = t.projects.shots || {};

  return (
    <article className="pd">
      <div className="column">
        <Link className="pd-back" to="/" state={{ section: 'projetos' }}>
          <FiArrowLeft /> {d.back}
        </Link>

        <Reveal className="pd-head">
          <div className="pd-head-main">
            <span className="pd-eyebrow mono">{copy.category}</span>
            <h1 className="pd-title">{copy.title}</h1>
            <p className="pd-lead">{detail.tagline}</p>
          </div>

          <aside className="pd-meta">
            {project.year && (
              <div className="pd-meta-row">
                <span className="pd-meta-k mono">{d.yearLabel}</span>
                <span className="pd-meta-v mono">{project.year}</span>
              </div>
            )}
            <div className="pd-meta-links">
              {project.repoUrl && (
                <a className="pill pill--ghost" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <FiGithub /> {t.projects.viewCode}
                </a>
              )}
              {project.demoUrl && (
                <a className="pill pill--solid" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  {t.projects.viewDemo} <FiArrowUpRight />
                </a>
              )}
              {!project.repoUrl && !project.demoUrl && (
                <span className="pd-private mono">{t.projects.privateNote}</span>
              )}
            </div>
          </aside>
        </Reveal>

        {project.image && (
          <Reveal className="pd-hero-shot">
            <Shot file={project.image} alt={copy.title} caption={captions[project.image]} priority />
          </Reveal>
        )}

        <Reveal as="section" className="pd-block pd-prose">
          <h2 className="block-title">{d.summaryTitle}</h2>
          {detail.summary.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
        </Reveal>

        <section className="pd-block">
          <Reveal><h2 className="block-title">{d.howTitle}</h2></Reveal>
          <ol className="pd-flow">
            {detail.how.map((step, i) => (
              <Reveal as="li" className="pd-step" key={step.t} delay={i * 0.04}>
                <span className="pd-step-num mono">{String(i + 1).padStart(2, '0')}</span>
                <div className="pd-step-body">
                  <h3 className="pd-step-title">{step.t}</h3>
                  <p className="pd-step-desc">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="pd-block">
          <Reveal><h2 className="block-title">{d.stackTitle}</h2></Reveal>
          <div className="pd-stack">
            {detail.stack.map((group, i) => (
              <Reveal className="pd-stack-group" key={group.g} delay={i * 0.04}>
                <h3 className="pd-stack-label mono">{group.g}</h3>
                <dl className="pd-stack-list">
                  {group.items.map((item) => (
                    <div className="pd-stack-item" key={item.n}>
                      <dt className="pd-stack-name">{item.n}</dt>
                      <dd className="pd-stack-desc">{item.d}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="pd-block">
          <Reveal><h2 className="block-title">{d.buildTitle}</h2></Reveal>
          <div className="pd-build">
            {detail.build.map((item, i) => (
              <Reveal className="pd-build-item" key={item.t} delay={i * 0.04}>
                <h3 className="pd-build-title">{item.t}</h3>
                <p className="pd-build-desc">{item.d}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {project.gallery.length > 0 && (
          <section className="pd-block">
            <Reveal><h2 className="block-title">{d.galleryTitle}</h2></Reveal>
            <div className="pd-gallery">
              {project.gallery.map((file, i) => (
                <Reveal key={file} delay={i * 0.04}>
                  <Shot file={file} alt={captions[file] || `${copy.title} ${i + 2}`} caption={captions[file]} />
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <Reveal as="section" className="pd-block pd-tech">
          <h2 className="pd-tech-label mono">{d.techLabel}</h2>
          <div className="pd-tech-tags">
            {project.tech.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
          </div>
        </Reveal>

        {next.slug !== project.slug && (
          <Reveal as="nav" className="pd-next" aria-label={d.nextLabel}>
            <Link className="pd-next-link" to={`/projetos/${next.slug}`}>
              <span className="pd-next-label mono">{d.nextLabel}</span>
              <span className="pd-next-title">{nextCopy.title}</span>
              <span className="pd-next-arrow" aria-hidden="true">→</span>
            </Link>
          </Reveal>
        )}
      </div>
    </article>
  );
}
