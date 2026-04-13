import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    navbar: {
      items: [
        { name: 'Home', path: '/', icon: '~' },
        { name: 'About', path: '/sobre', icon: '/about' },
        { name: 'Experience', path: '/experiencias', icon: '/exp' },
        { name: 'Projects', path: '/projetos', icon: '/projects' },
        { name: 'Contact', path: '/contato', icon: '/contact' },
      ],
      online: 'online',
      navigation: 'Navigation',
      theme: 'Theme:',
      language: 'Language:',
    },
    home: {
      badge: 'Available for opportunities',
      greeting: "Hi, I'm",
      roles: [
        'Full Stack Developer',
        'Data Science',
        'Data Enthusiast',
        'Problem Solver',
      ],
      descriptionParts: ['Turning ', 'data', ' into ', 'insights', ' and ', 'code', ' into ', 'solutions', '.'],
      code: {
        role: 'Full Stack Developer',
        focus: 'Business Intelligence',
        passion: 'Turning data into value',
      },
      openTerminal: 'Open Terminal',
      viewProjects: 'View Projects',
      scrollHint: 'Scroll to explore',
      skillsTitle: 'Technical Skills',
      skillsSubtitle: 'Technologies I use to build innovative solutions',
      skillDbName: 'Databases',
      exploreTitle: 'Explore',
      navCards: [
        { path: '/sobre', title: 'About', icon: '👨‍💻', desc: 'Learn my story' },
        { path: '/experiencias', title: 'Experience', icon: '💼', desc: 'Professional journey' },
        { path: '/projetos', title: 'Projects', icon: '🚀', desc: 'Work I have done' },
        { path: '/contato', title: 'Contact', icon: '📧', desc: "Let's talk" },
      ],
      welcomeTitle: 'Welcome to my Portfolio',
      welcomeSubtitle: 'Explore interactively through the terminal or navigate directly',
      closeTerminal: 'Close Terminal ×',
    },
    about: {
      tag: '<about>',
      closeTag: '</about>',
      title: 'About Me',
      subtitle: 'Discover my journey and passions in technology',
      role: 'Full Stack Developer & Data Science',
      bioLines: [
        'Computer Science student at CESAR School, passionate about technology and solving complex problems.',
        'Experience in full stack web development, data analysis and Business Intelligence.',
        'Always looking to learn new technologies and contribute to innovative projects.',
      ],
      interestsTag: '<interests>',
      interestsCloseTag: '</interests>',
      interestsTitle: 'Areas of Interest',
      interests: [
        {
          title: 'Data Analysis',
          description: 'I turn raw data into valuable insights using PowerBI, Python and data visualization.',
          tags: ['Data Science', 'BI', 'Machine Learning'],
        },
        {
          title: 'Full Stack Development',
          description: 'Complete web applications, from React front-end to robust Node.js APIs.',
          tags: ['React', 'Node.js', 'RESTful APIs'],
        },
        {
          title: 'Artificial Intelligence',
          description: 'Studying ML and Deep Learning to solve complex problems with innovative solutions.',
          tags: ['Machine Learning', 'NLP', 'Deep Learning'],
        },
        {
          title: 'Optimization & Performance',
          description: 'Focused on optimizing applications for better performance and user experience.',
          tags: ['Performance', 'Caching', 'SEO'],
        },
      ],
      softTag: '<soft-skills>',
      softCloseTag: '</soft-skills>',
      softTitle: 'Soft Skills',
      softSkills: [
        'Communicative',
        'Organization',
        'Adaptability',
        'Teamwork',
        'Proactive',
        'Problem Solving',
      ],
    },
    experience: {
      tag: '<experience>',
      closeTag: '</experience>',
      title: 'Experience',
      subtitle: 'My professional and academic journey',
      current: 'Current',
      items: [
        {
          title: 'Front-end Developer',
          company: 'Seaway',
          location: 'Recife, PE',
          period: 'Current',
          description: 'Development of the web application with React, adjusting layouts, fixing bugs and optimizing user flows.',
          responsibilities: [
            'Development and maintenance of responsive interfaces with React',
            'Performance optimization and page loading',
            'Implementation of UI/UX improvements based on feedback',
            'Bug fixes and refactoring of legacy code',
          ],
        },
        {
          title: 'Full Stack Developer',
          company: 'Internship',
          location: 'Recife, PE',
          period: '05/25 - 07/25',
          description: 'Development of web applications with Node.js and React, building APIs, responsive interfaces and database integrations.',
          responsibilities: [
            'Development of RESTful APIs with Node.js and Express',
            'Creation of interactive interfaces with React',
            'Integration with SQL and NoSQL databases',
            'Participation in agile ceremonies',
          ],
        },
        {
          title: 'Programming Fundamentals Teaching Assistant',
          company: 'CESAR School',
          location: 'Recife, PE',
          period: '1st Semester',
          description: 'Teaching assistant for the first semester programming class, helping with doubts and providing exercises in Portugol and Python.',
          responsibilities: [
            'Assistance to students during practical classes',
            'Correction of exercises and assignments',
            'One-on-one mentoring for students with difficulties',
            'Preparation of complementary exercises',
          ],
        },
        {
          title: 'Teacher Assistant',
          company: 'NExt - Extension Center',
          location: 'CESAR School',
          period: '2022 - 2023',
          description: 'Teaching programming fundamentals in Python, introducing basic concepts of computational logic and algorithms.',
          responsibilities: [
            'Assistance during practical Python classes',
            'Preparation of teaching materials',
            'Introduction to computational logic',
            'Support on initial projects',
          ],
        },
        {
          title: 'Speaker and Workshop Instructor',
          company: 'Brazilian Robotics Olympiad',
          location: 'Recife, PE',
          period: '2022',
          description: 'Delivered a talk introducing Python, aiming to make programming accessible for people of all ages.',
          responsibilities: [
            'Preparation and delivery of the Python talk',
            'Creation of a hands-on workshop for children attending OBR',
            'Development of didactic content adapted for different age groups',
            'Demonstration of Lego models focused on robotics',
            'Encouragement of interest in programming and robotics',
          ],
        },
        {
          title: 'Immersion Week',
          company: 'CESAR School',
          location: 'Recife, PE',
          period: '2022',
          description: 'Helped organizing and monitoring immersion activities for new students at CESAR School.',
          responsibilities: [
            'Organization of integration activities',
            'Monitoring of immersion activities',
            'Support to new students during the week',
            'Assistance in freshmen adaptation to the university environment',
            'Coordination of dynamics and events',
          ],
        },
        {
          title: 'Innovation Marathon',
          company: 'CESAR School',
          location: 'Recife, PE',
          period: '2022',
          description: 'Delivered a dynamic and informative talk about Frameworks during an open university event.',
          responsibilities: [
            'Preparation of the Frameworks presentation',
            'Sharing of knowledge and insights with a diverse audience',
            'Coverage of fundamental framework concepts in current technology',
            'Presentation of practical examples and use cases',
            'Highlighting the importance of frameworks in modern development',
          ],
        },
      ],
    },
    projects: {
      tag: '<projects>',
      closeTag: '</projects>',
      title: 'Projects',
      subtitle: 'Work that shows my skills and passion for code',
      featured: 'Featured',
      featuresLabel: 'Main features',
      viewCode: 'View Code',
      ctaTitle: 'Want to see more projects?',
      ctaText: 'Check out my GitHub profile for more repositories and contributions',
      ctaBtn: 'View GitHub',
      items: [
        {
          title: 'Delivery Data Analytics',
          description: 'Complete platform for delivery data analysis with interactive dashboard and AI assistant.',
          features: [
            'Dashboard with real-time charts',
            'Driver performance analysis',
            'AI assistant for insights',
            'Route visualization on maps',
          ],
          category: 'Full Stack',
        },
        {
          title: 'Academic Management System',
          description: 'Complete web application to manage students and teaching modules in educational institutions.',
          features: [
            'Full CRUD for students and modules',
            'Advanced search system',
            'Deployment with Docker and Kubernetes',
            'RESTful API for integration',
          ],
          category: 'Backend',
        },
        {
          title: 'Personal Portfolio',
          description: 'Interactive portfolio with cyberpunk design, smooth animations and impressive visual effects.',
          features: [
            'Modern and responsive design',
            'Animations with Framer Motion',
            'Terminal and glitch effects',
            'Automated deployment',
          ],
          category: 'Frontend',
        },
      ],
    },
    contact: {
      tag: '<contact>',
      closeTag: '</contact>',
      title: 'Contact',
      subtitle: 'Let\'s talk about how I can contribute to your projects',
      heading: "Let's Talk",
      intro: "I'm always open to new opportunities and interesting projects.",
      emailTitle: 'Email',
      whatsappTitle: 'WhatsApp',
      locationTitle: 'Location',
      locationValue: 'Recife, PE - Brazil',
      social: 'Social Networks',
    },
    footer: {
      tagline: 'Full Stack Developer & Data Science',
      description: 'Turning data into insights and code into solutions.',
      navigation: 'Navigation',
      contact: 'Contact',
      connect: 'Connect',
      location: '📍 Recife, PE - Brazil',
      madeWith: 'Made with',
      and: 'and',
      thanks: 'Thanks for visiting!',
      echoCmd: 'echo "Thanks for visiting!"',
    },
    backLink: 'cd ..',
  },
  pt: {
    navbar: {
      items: [
        { name: 'Home', path: '/', icon: '~' },
        { name: 'Sobre', path: '/sobre', icon: '/about' },
        { name: 'Experiência', path: '/experiencias', icon: '/exp' },
        { name: 'Projetos', path: '/projetos', icon: '/projects' },
        { name: 'Contato', path: '/contato', icon: '/contact' },
      ],
      online: 'online',
      navigation: 'Navegação',
      theme: 'Tema:',
      language: 'Idioma:',
    },
    home: {
      badge: 'Disponível para oportunidades',
      greeting: 'Olá, eu sou',
      roles: [
        'Full Stack Developer',
        'Data Science',
        'Data Enthusiast',
        'Problem Solver',
      ],
      descriptionParts: ['Transformando ', 'dados', ' em ', 'insights', ' e ', 'código', ' em ', 'soluções', '.'],
      code: {
        role: 'Full Stack Developer',
        focus: 'Business Intelligence',
        passion: 'Transformar dados em valor',
      },
      openTerminal: 'Abrir Terminal',
      viewProjects: 'Ver Projetos',
      scrollHint: 'Scroll para explorar',
      skillsTitle: 'Habilidades Técnicas',
      skillsSubtitle: 'Tecnologias que utilizo para criar soluções inovadoras',
      skillDbName: 'Banco de Dados',
      exploreTitle: 'Explore',
      navCards: [
        { path: '/sobre', title: 'Sobre', icon: '👨‍💻', desc: 'Conheça minha história' },
        { path: '/experiencias', title: 'Experiência', icon: '💼', desc: 'Trajetória profissional' },
        { path: '/projetos', title: 'Projetos', icon: '🚀', desc: 'Trabalhos realizados' },
        { path: '/contato', title: 'Contato', icon: '📧', desc: 'Vamos conversar' },
      ],
      welcomeTitle: 'Bem-vindo ao meu Portfólio',
      welcomeSubtitle: 'Explore interativamente através do terminal ou navegue diretamente',
      closeTerminal: 'Fechar Terminal ×',
    },
    about: {
      tag: '<sobre>',
      closeTag: '</sobre>',
      title: 'Sobre Mim',
      subtitle: 'Conheça minha trajetória e paixões na tecnologia',
      role: 'Full Stack Developer & Data Science',
      bioLines: [
        'Estudante de Ciência da Computação na CESAR School, apaixonado por tecnologia e resolução de problemas complexos.',
        'Experiência em desenvolvimento web full stack, análise de dados e Business Intelligence.',
        'Sempre buscando aprender novas tecnologias e contribuir com projetos inovadores.',
      ],
      interestsTag: '<interesses>',
      interestsCloseTag: '</interesses>',
      interestsTitle: 'Áreas de Interesse',
      interests: [
        {
          title: 'Análise de Dados',
          description: 'Transformo dados brutos em insights valiosos com PowerBI, Python e visualização de dados.',
          tags: ['Data Science', 'BI', 'Machine Learning'],
        },
        {
          title: 'Desenvolvimento Full Stack',
          description: 'Aplicações web completas, do front-end com React até APIs robustas com Node.js.',
          tags: ['React', 'Node.js', 'APIs RESTful'],
        },
        {
          title: 'Inteligência Artificial',
          description: 'Estudando ML e Deep Learning para resolver problemas complexos com soluções inovadoras.',
          tags: ['Machine Learning', 'NLP', 'Deep Learning'],
        },
        {
          title: 'Otimização & Performance',
          description: 'Focado em otimizar aplicações para melhor performance e experiência do usuário.',
          tags: ['Performance', 'Caching', 'SEO'],
        },
      ],
      softTag: '<soft-skills>',
      softCloseTag: '</soft-skills>',
      softTitle: 'Soft Skills',
      softSkills: [
        'Comunicativo',
        'Organização',
        'Adaptabilidade',
        'Trabalho em Equipe',
        'Proativo',
        'Resolução de Problemas',
      ],
    },
    experience: {
      tag: '<experiência>',
      closeTag: '</experiência>',
      title: 'Experiência',
      subtitle: 'Minha trajetória profissional e acadêmica',
      current: 'Atual',
      items: [
        {
          title: 'Desenvolvedor Front-end',
          company: 'Seaway',
          location: 'Recife, PE',
          period: 'Atual',
          description: 'Desenvolvimento na aplicação web com React, ajustando layouts, corrigindo erros e otimizando rotas do usuário.',
          responsibilities: [
            'Desenvolvimento e manutenção de interfaces responsivas com React',
            'Otimização de performance e carregamento de páginas',
            'Implementação de melhorias de UI/UX baseadas em feedback',
            'Correção de bugs e refatoração de código legado',
          ],
        },
        {
          title: 'Desenvolvedor Full Stack',
          company: 'Estágio',
          location: 'Recife, PE',
          period: '05/25 - 07/25',
          description: 'Desenvolvimento de aplicações web com Node.js e React, criando APIs, interfaces responsivas e integrando com bancos de dados.',
          responsibilities: [
            'Desenvolvimento de APIs RESTful com Node.js e Express',
            'Criação de interfaces interativas com React',
            'Integração com bancos de dados SQL e NoSQL',
            'Participação em cerimônias ágeis',
          ],
        },
        {
          title: 'Monitor em Fundamentos de Programação',
          company: 'CESAR School',
          location: 'Recife, PE',
          period: '1º Período',
          description: 'Facilitador da matéria de programação do 1º período, auxiliando em dúvidas e passando exercícios em Portugol e Python.',
          responsibilities: [
            'Auxílio aos alunos durante as aulas práticas',
            'Correção de exercícios e trabalhos',
            'Mentoria individual para alunos com dificuldades',
            'Preparação de exercícios complementares',
          ],
        },
        {
          title: 'Auxiliar de Professor',
          company: 'NExt - Núcleo de Extensão',
          location: 'CESAR School',
          period: '2022 - 2023',
          description: 'Ensino dos fundamentos de programação em Python, introduzindo conceitos básicos de lógica computacional e algoritmos.',
          responsibilities: [
            'Auxílio durante aulas práticas de Python',
            'Preparação de materiais didáticos',
            'Introdução de lógica computacional',
            'Suporte em projetos iniciais',
          ],
        },
        {
          title: 'Palestrante e Oficineiro',
          company: 'Olimpíada Brasileira de Robótica',
          location: 'Recife, PE',
          period: '2022',
          description: 'Ministrei uma palestra com a temática de Introdução ao Python, buscando facilitar o entendimento e o primeiro contato com a programação de pessoas de todas as idades.',
          responsibilities: [
            'Preparação e apresentação da palestra sobre Python',
            'Criação de oficina prática para crianças presentes na OBR',
            'Desenvolvimento de conteúdo didático adaptado para diferentes faixas etárias',
            'Demonstração de modelos Lego voltados para robótica',
            'Incentivo ao interesse em programação e robótica',
          ],
        },
        {
          title: 'Semana de Imersão',
          company: 'CESAR School',
          location: 'Recife, PE',
          period: '2022',
          description: 'Ajudei na organização e monitoramento das atividades de imersão para novos alunos da faculdade CESAR School.',
          responsibilities: [
            'Organização de atividades de Integração',
            'Monitoramento das atividades de Imersão',
            'Suporte aos novos alunos durante a semana',
            'Auxílio na adaptação dos calouros ao ambiente universitário',
            'Coordenação de dinâmicas e eventos',
          ],
        },
        {
          title: 'Maratona de Inovação',
          company: 'CESAR School',
          location: 'Recife, PE',
          period: '2022',
          description: 'Ministrei uma palestra dinâmica e informativa sobre Frameworks durante um evento universitário aberto.',
          responsibilities: [
            'Preparação da apresentação sobre Frameworks',
            'Compartilhamento de conhecimento e insights com público diversificado',
            'Abordagem de conceitos fundamentais de frameworks na tecnologia atual',
            'Apresentação de exemplos práticos e casos de uso',
            'Destaque da importância dos frameworks no desenvolvimento moderno',
          ],
        },
      ],
    },
    projects: {
      tag: '<projetos>',
      closeTag: '</projetos>',
      title: 'Projetos',
      subtitle: 'Trabalhos que demonstram minhas habilidades e paixão por código',
      featured: 'Destaque',
      featuresLabel: 'Principais funcionalidades',
      viewCode: 'Ver Código',
      ctaTitle: 'Quer ver mais projetos?',
      ctaText: 'Confira meu perfil no GitHub para mais repositórios e contribuições',
      ctaBtn: 'Ver GitHub',
      items: [
        {
          title: 'Análise de Dados para Entregadores',
          description: 'Plataforma completa para análise de dados de entregas com dashboard interativo e assistente de IA.',
          features: [
            'Dashboard com gráficos em tempo real',
            'Análise de performance de motoristas',
            'Assistente de IA para insights',
            'Visualização de rotas em mapas',
          ],
          category: 'Full Stack',
        },
        {
          title: 'Sistema de Gestão Acadêmica',
          description: 'Aplicação web completa para gerenciamento de alunos e módulos de ensino em instituições educacionais.',
          features: [
            'CRUD completo de alunos e módulos',
            'Sistema de busca avançada',
            'Deploy com Docker e Kubernetes',
            'API RESTful para integração',
          ],
          category: 'Backend',
        },
        {
          title: 'Portfólio Pessoal',
          description: 'Portfólio interativo com design cyberpunk, animações suaves e efeitos visuais impressionantes.',
          features: [
            'Design moderno e responsivo',
            'Animações com Framer Motion',
            'Efeitos de terminal e glitch',
            'Deploy automatizado',
          ],
          category: 'Frontend',
        },
      ],
    },
    contact: {
      tag: '<contato>',
      closeTag: '</contato>',
      title: 'Contato',
      subtitle: 'Vamos conversar sobre como posso contribuir com seus projetos',
      heading: 'Vamos Conversar',
      intro: 'Estou sempre aberto a novas oportunidades e projetos interessantes.',
      emailTitle: 'Email',
      whatsappTitle: 'WhatsApp',
      locationTitle: 'Localização',
      locationValue: 'Recife, PE - Brasil',
      social: 'Redes Sociais',
    },
    footer: {
      tagline: 'Desenvolvedor Full Stack & Data Science',
      description: 'Transformando dados em insights e código em soluções.',
      navigation: 'Navegação',
      contact: 'Contato',
      connect: 'Conecte-se',
      location: '📍 Recife, PE - Brasil',
      madeWith: 'Feito com',
      and: 'e',
      thanks: 'Obrigado por visitar!',
      echoCmd: 'echo "Obrigado por visitar!"',
    },
    backLink: 'cd ..',
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('portfolio-language');
    return saved === 'pt' || saved === 'en' ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => (prev === 'en' ? 'pt' : 'en'));
  }, []);

  const setLang = useCallback((lang) => {
    if (lang === 'en' || lang === 'pt') setLanguage(lang);
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        t: translations[language],
        toggleLanguage,
        setLanguage: setLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
