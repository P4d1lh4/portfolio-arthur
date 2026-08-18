// Non-translatable project metadata. Text (title/description/highlights/detail) lives in
// LanguageContext under projects.items[slug]. Only status === 'published' is rendered.
//
// To add a screenshot: drop the file in public/projects/<slug>/ and set `image` to the
// path relative to public/projects/ (e.g. 'portal-professor/dashboard.png').
// `image`   -> card thumbnail + hero of the detail page (16:10, 1600x1000).
// `gallery` -> the OTHER shots, shown on the detail page only. Captions are optional and
//              live in LanguageContext under projects.shots, keyed by the same path.
// Missing image -> a clean placeholder. Empty gallery -> the section isn't rendered.
// Missing repoUrl/demoUrl -> that button simply isn't rendered (never a broken link).

export const projects = [
  {
    slug: 'portal-professor',
    status: 'published',
    featured: true,
    year: '2026',
    image: 'portal-professor/notas.png',
    gallery: ['portal-professor/dashboard.png'],
    repoUrl: 'https://github.com/P4d1lh4/Portal-Professor',
    demoUrl: 'https://portalprofessor.vercel.app',
    tech: ['React', 'TypeScript', 'Vite', 'FastAPI', 'Supabase', 'JWT', 'Docker', 'GitHub Actions'],
  },
  {
    slug: 'nielsen-analytics',
    status: 'published',
    featured: true,
    year: '2026',
    image: 'nielsen-analytics/dashboard.png',
    gallery: ['nielsen-analytics/achados.png'],
    repoUrl: 'https://github.com/P4d1lh4/Nielsen-analytics',
    demoUrl: null,
    tech: ['TypeScript', 'Playwright', 'Anthropic API', 'Zod', 'Commander', 'Prisma', 'Docker'],
  },
  {
    slug: 'mirai',
    status: 'published',
    featured: false,
    year: null,
    image: 'mirai/chat.png',
    gallery: [],
    // TODO: add repo + demo when available (private for now).
    repoUrl: null,
    demoUrl: null,
    tech: ['Next.js', 'React', 'FastAPI', 'Python', 'Tailwind CSS', 'SQLite', 'Docker', 'Groq API', 'SerpApi'],
  },

  // --- Ready to publish: flip status to 'published' when you want them shown ---
  {
    slug: 'entregadores',
    status: 'draft',
    featured: false,
    year: '2025',
    image: null,
    gallery: [],
    repoUrl: 'https://github.com/P4d1lh4/Projeto-para-entregadores',
    demoUrl: null,
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Leaflet', 'OpenAI', 'Recharts'],
  },
];

export const bySlug = (slug) => projects.find((p) => p.slug === slug);
