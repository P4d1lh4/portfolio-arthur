import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import CopyEmail from './CopyEmail';

const CLOCK_TICK_MS = 15000;

const formatRecifeTime = (locale) =>
  new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit', timeZone: 'America/Recife' }).format(new Date());

function useRecifeTime(language) {
  const locale = language === 'pt' ? 'pt-BR' : 'en-US';
  const [time, setTime] = useState(() => formatRecifeTime(locale));
  useEffect(() => {
    setTime(formatRecifeTime(locale));
    const id = setInterval(() => setTime(formatRecifeTime(locale)), CLOCK_TICK_MS);
    return () => clearInterval(id);
  }, [locale]);
  return time;
}

export default function Intro() {
  const { t, language } = useLanguage();
  const time = useRecifeTime(language);

  return (
    <section id="inicio" className="intro" aria-labelledby="intro-title">
      <div className="intro-top">
        <div>
          <h1 id="intro-title" className="intro-title">
            <span className="muted">{t.ui.greeting} </span>Arthur Padilha
          </h1>
          <p className="intro-role">{t.ui.role}</p>
        </div>
        <div className="intro-avatar" aria-hidden="true">
          <span>AP</span>
        </div>
      </div>

      <p className="intro-bio">
        {t.ui.bio.map((part) =>
          part.slug ? (
            <Link key={part.slug} className="text-link" to={`/projetos/${part.slug}`}>{part.t}</Link>
          ) : (
            <React.Fragment key={part.t}>{part.t}</React.Fragment>
          ),
        )}
      </p>

      <div className="intro-meta mono">
        <span className="intro-live"><span className="intro-dot" />{t.ui.available}</span>
        <span className="intro-time">{time} {t.ui.clockSuffix}</span>
      </div>

      <div className="intro-actions">
        <a className="pill pill--solid" href={`${process.env.PUBLIC_URL}/Arthur-Padilha-CV.pdf`} download>
          <FiDownload /> {t.ui.cv}
        </a>
        <CopyEmail />
      </div>
    </section>
  );
}
