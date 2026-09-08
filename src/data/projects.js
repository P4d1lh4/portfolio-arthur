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
    slug: 'e-do',
    status: 'published',
    featured: true,
    year: '2026',
    image: null,
    gallery: [],
    repoUrl: null, // repositório privado da equipe (TeleClinic)
    demoUrl: null,
    tech: ['Python', 'FastAPI', 'Pydantic', 'RapidFuzz', 'Google Gemini API', 'Docker', 'pytest'],
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
    repoUrl: 'https://github.com/P4d1lh4/Mirai-Compra-Inteligente',
    demoUrl: null,
    tech: ['Next.js', 'React', 'FastAPI', 'Python', 'Tailwind CSS', 'SQLite', 'Docker', 'Groq API', 'SerpApi'],
  },

  {
    slug: 'entregadores',
    status: 'published',
    featured: false,
    year: '2025',
    image: 'entregadores/dashboard.png',
    gallery: ['entregadores/mapa.png'],
    repoUrl: 'https://github.com/P4d1lh4/Projeto-para-entregadores',
    demoUrl: null,
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Leaflet', 'OpenAI', 'Recharts'],
  },
];

export const bySlug = (slug) => projects.find((p) => p.slug === slug);
