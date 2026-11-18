import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import { projects } from '../../data/projects';
import { contactInfo } from '../../data/ui';
import Reveal from '../Reveal';
import CopyEmail from './CopyEmail';

const published = projects.filter((p) => p.status === 'published');
const shotSrc = (file) => `${process.env.PUBLIC_URL}/projects/${file}`;

function Block({ id, title, aside, children }) {
  return (
    <Reveal as="section" id={id} className="block" aria-labelledby={`${id}-title`}>
      <div className="block-head">
        <h2 id={`${id}-title`} className="block-title">{title}</h2>
        {aside}
      </div>
      {children}
    </Reveal>
  );
}

export function Work() {
  const { t } = useLanguage();
  return (
    <Block id="experiencia" title={t.ui.sections.experiencia}>
      <ol className="rows">
        {t.experience.items.map((job, i) => (
          <li className="row" key={job.company}>
            <div className="row-line">
              <span className="row-title">
                {job.company}
                {i === 0 && <span className="row-badge mono">{t.experience.current}</span>}
              </span>
              <span className="row-meta">{job.role} · {job.period}</span>
            </div>
            <p className="row-desc">{job.description}</p>
          </li>
        ))}
      </ol>
    </Block>
  );
}

function ProjectCard({ project }) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.slug];
  return (
    <li>
      <Link className="card" to={`/projetos/${project.slug}`}>
        <div className="card-media">
          {project.image ? (
            <img src={shotSrc(project.image)} alt="" loading="lazy" width="1600" height="1000" />
          ) : (
            <div className="card-placeholder">
              <span className="card-placeholder-title">{copy.title.split(' — ')[0]}</span>
              <span className="card-placeholder-sub mono">{project.tech.slice(0, 3).join(' · ')}</span>
            </div>
          )}
          <span className="card-open" aria-hidden="true"><FiArrowUpRight /></span>
        </div>
        <div className="card-line">
          <span className="card-title">{copy.title.split(' — ')[0]}</span>
          <span className="card-meta">{copy.category}</span>
        </div>
      </Link>
    </li>
  );
}

export function ProjectGrid() {
  const { t } = useLanguage();
  return (
    <Block
      id="projetos"
      title={t.ui.sections.projetos}
      aside={
        <a className="block-link" href={contactInfo.github.url} target="_blank" rel="noopener noreferrer">
          GitHub <FiArrowUpRight />
        </a>
      }
    >
      <ul className="cards">
        {published.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </ul>
    </Block>
  );
}

export function Stack() {
  const { t } = useLanguage();
  return (
    <Block id="stack" title={t.ui.sections.stack}>
      <dl className="stack">
        {t.skills.groups.map((g) => (
          <div className="stack-row" key={g.name}>
            <dt className="stack-label mono">{g.name}</dt>
            <dd className="stack-items">
              {g.items.map((item) => <span className="tag" key={item}>{item}</span>)}
            </dd>
          </div>
        ))}
      </dl>
    </Block>
  );
}

export function Education() {
  const { t } = useLanguage();
  const e = t.experience;
  return (
    <Block id="formacao" title={t.ui.sections.formacao}>
      <ul className="rows">
        {e.education.map((ed) => (
          <li className="row" key={ed.course}>
            <div className="row-line">
              <span className="row-title">{ed.course}</span>
              <span className="row-meta">{ed.place} · {ed.period}</span>
            </div>
          </li>
        ))}
      </ul>
      <h3 className="sub-title mono">{t.ui.talks}</h3>
      <ul className="talks">
        {e.talks.map((talk) => <li key={talk}>{talk}</li>)}
      </ul>
    </Block>
  );
}

export function Contact() {
  const { t } = useLanguage();
  const links = [
    { name: t.contact.whatsapp, value: contactInfo.whatsappLabel, href: contactInfo.whatsappUrl },
    { name: 'GitHub', value: contactInfo.github.handle, href: contactInfo.github.url },
    { name: 'LinkedIn', value: contactInfo.linkedin.handle, href: contactInfo.linkedin.url },
  ];
  return (
    <Block id="contato" title={t.ui.sections.contato}>
      <div className="contact-card">
        <p className="contact-title">{t.ui.contactTitle}</p>
        <p className="contact-text">{t.contact.subtitle}</p>
        <div className="contact-email">
          <a className="contact-address" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <CopyEmail className="pill pill--solid" />
        </div>
      </div>
      <ul className="link-rows">
        {links.map((l) => (
          <li key={l.name}>
            <a className="link-row" href={l.href} target="_blank" rel="noopener noreferrer">
              <span className="link-row-name">{l.name}</span>
              <span className="link-row-value mono">{l.value}</span>
              <FiArrowRight className="link-row-arrow" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </Block>
  );
}
