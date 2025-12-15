import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaBriefcase, FaChalkboardTeacher, FaArrowLeft, FaCalendar, FaMapMarkerAlt, FaRobot, FaUsers } from 'react-icons/fa';
import Footer from '../components/Footer/Footer';
import './ExperiencePage.css';

const ExperiencePage = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      icon: <FaBriefcase />,
      title: 'Desenvolvedor Front-end',
      company: 'Seaway',
      location: 'Recife, PE',
      period: 'Atual',
      startDate: '2025',
      description:
        'Desenvolvimento na aplicação web com React, ajustando layouts, corrigindo erros e otimizando rotas do usuário. Trabalho focado em melhorar a experiência do usuário e performance da aplicação.',
      responsibilities: [
        'Desenvolvimento e manutenção de interfaces responsivas com React',
        'Otimização de performance e carregamento de páginas',
        'Implementação de melhorias de UI/UX baseadas em feedback',
        'Correção de bugs e refatoração de código legado',
        'Colaboração com equipe de design para implementação de layouts'
      ],
      skills: ['React', 'JavaScript', 'CSS3', 'HTML5', 'UI/UX', 'Git', 'Responsive Design'],
      achievements: [
        'Melhorou a performance da aplicação em 30%',
        'Implementou novos componentes reutilizáveis',
        'Reduziu o tempo de carregamento das páginas'
      ]
    },
    {
      icon: <FaBriefcase />,
      title: 'Desenvolvedor Full Stack',
      company: 'Estágio',
      location: 'Recife, PE',
      period: '05/25 - 07/25',
      startDate: '2025',
      description:
        'Desenvolvimento de aplicações web com Node.js e React, criando APIs, interfaces responsivas e integrando com bancos de dados. Atuação em time ágil e manutenção de sistemas existentes.',
      responsibilities: [
        'Desenvolvimento de APIs RESTful com Node.js e Express',
        'Criação de interfaces interativas com React',
        'Integração com bancos de dados SQL e NoSQL',
        'Participação em cerimônias ágeis (daily, sprint planning, retrospectiva)',
        'Testes unitários e de integração',
        'Deploy e monitoramento de aplicações'
      ],
      skills: ['Node.js', 'React', 'Express', 'MongoDB', 'PostgreSQL', 'APIs RESTful', 'Docker', 'Metodologias Ágeis', 'Jest'],
      achievements: [
        'Desenvolveu 3 projetos completos do zero',
        'Implementou sistema de autenticação seguro',
        'Participou ativamente das decisões técnicas da equipe'
      ]
    },
    {
      icon: <FaChalkboardTeacher />,
      title: 'Monitor em Fundamentos de Programação',
      company: 'CESAR School',
      location: 'Cesar School, Recife',
      period: '1º Período',
      startDate: '2022',
      description:
        'Participei como facilitador da matéria de programação do 1º período envolvendo as linguagens Portugol e Python, auxiliando em dúvidas e passando exercícios para melhor aprendizagem.',
      responsibilities: [
        'Auxílio aos alunos durante as aulas práticas de Portugol e Python',
        'Correção de exercícios e trabalhos',
        'Suporte no desenvolvimento de projetos iniciais',
        'Preparação de exercícios complementares',
        'Mentoria individual para alunos com dificuldades'
      ],
      skills: ['Python', 'Portugol', 'Ensino', 'Mentoria', 'Comunicação', 'Resolução de Problemas'],
      achievements: [
        'Ajudou alunos iniciantes a desenvolverem suas primeiras habilidades de programação',
        'Criou exercícios complementares para facilitar o aprendizado',
        'Recebeu feedback positivo dos alunos e professores'
      ]
    },
    {
      icon: <FaChalkboardTeacher />,
      title: 'Auxiliar de Professor',
      company: 'NExt - Núcleo de Extensão',
      location: 'Cesar School, Recife',
      period: '2022 - 2023',
      startDate: '2022',
      description:
        'Participei do processo de ensino dos fundamentos de programação na linguagem Python, com o objetivo de introduzir conceitos básicos da lógica computacional e de algoritmos.',
      responsibilities: [
        'Auxílio aos alunos durante as aulas práticas',
        'Correção de exercícios e trabalhos',
        'Suporte no desenvolvimento de projetos em Python',
        'Preparação de materiais didáticos complementares',
        'Mentoria individual para alunos com dificuldades',
        'Introdução de conceitos de lógica computacional e algoritmos'
      ],
      skills: ['Python', 'Ensino', 'Mentoria', 'Comunicação', 'Algoritmos', 'Lógica Computacional'],
      achievements: [
        'Ajudou mais de 50 alunos a desenvolverem suas habilidades',
        'Criou materiais complementares para facilitar o aprendizado',
        'Recebeu feedback positivo dos alunos e professores'
      ]
    },
    {
      icon: <FaRobot />,
      title: 'Palestrante e Oficineiro',
      company: 'Olimpíada Brasileira de Robótica',
      location: 'Recife, PE',
      period: '2022',
      startDate: '2022',
      description:
        'Ministrei uma palestra com a temática de introdução ao Python, buscando facilitar o entendimento e o primeiro contato com a programação de pessoas de idades diversas.',
      responsibilities: [
        'Preparação e apresentação de palestra sobre Python',
        'Criação de oficina prática para crianças presentes na OBR',
        'Desenvolvimento de conteúdo didático adaptado para diferentes faixas etárias',
        'Demonstração de modelo Lego voltado para robótica',
        'Incentivo ao interesse em programação e robótica'
      ],
      skills: ['Python', 'Robótica', 'Palestras', 'Ensino', 'Comunicação', 'Lego'],
      achievements: [
        'Criou uma oficina para crianças que estavam presentes na OBR',
        'Ensinou conceitos básicos de programação de forma lúdica',
        'Despertou interesse em programação em pessoas de diversas idades',
        'Demonstrou aplicações práticas de robótica com Lego'
      ]
    },
    {
      icon: <FaUsers />,
      title: 'Semana de Imersão',
      company: 'CESAR School',
      location: 'Cesar School, Recife',
      period: '2022',
      startDate: '2022',
      description:
        'Ajudei na organização e monitoramento das atividades de imersão para novos alunos da faculdade CESAR School.',
      responsibilities: [
        'Organização de atividades de integração',
        'Monitoramento das atividades de imersão',
        'Suporte aos novos alunos durante a semana',
        'Auxílio na adaptação dos calouros ao ambiente universitário',
        'Coordenação de dinâmicas e eventos'
      ],
      skills: ['Organização', 'Liderança', 'Comunicação', 'Trabalho em Equipe', 'Gestão de Eventos'],
      achievements: [
        'Contribuiu para uma melhor integração dos novos alunos',
        'Organizou atividades que facilitaram a adaptação dos calouros',
        'Recebeu reconhecimento pela dedicação e organização'
      ]
    },
    {
      icon: <FaChalkboardTeacher />,
      title: 'Maratona de Inovação',
      company: 'CESAR School',
      location: 'Cesar School, Recife',
      period: '2022',
      startDate: '2022',
      description:
        'Ministrei uma palestra dinâmica e informativa sobre Frameworks durante um evento universitário aberto.',
      responsibilities: [
        'Preparação de apresentação sobre Frameworks',
        'Compartilhamento de conhecimento e insights com público diversificado',
        'Abordagem de conceitos fundamentais de frameworks na tecnologia atual',
        'Apresentação de exemplos práticos e casos de uso',
        'Destaque da importância dos frameworks no desenvolvimento moderno'
      ],
      skills: ['Frameworks', 'Palestras', 'Comunicação', 'Apresentação', 'Tecnologia'],
      achievements: [
        'Apresentou conceitos complexos de forma acessível',
        'Compartilhou exemplos práticos e casos reais',
        'Contribuiu para o conhecimento da comunidade universitária',
        'Despertou interesse em frameworks modernos'
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduzido de 0.2 para carregar mais rápido
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 }, // Reduzido de 50 para animação mais leve
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4, // Reduzido de 0.6 para animação mais rápida
      },
    },
  };

  return (
    <div className="experience-page">
      <div className="experience-hero">
        <div className="experience-hero-background"></div>
        <motion.div
          className="experience-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button onClick={() => navigate('/')} className="back-button">
            <FaArrowLeft /> Voltar
          </button>
          <h1 className="experience-hero-title">Experiências Profissionais</h1>
          <p className="experience-hero-subtitle">
            Minha jornada no desenvolvimento de software e educação
          </p>
        </motion.div>
      </div>

      <section className="experience-content">
        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              variants={itemVariants}
            >
              <div className="experience-timeline-line"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-icon-wrapper">
                    {exp.icon}
                  </div>
                  <div className="experience-header-text">
                    <h2 className="experience-title">{exp.title}</h2>
                    <h3 className="experience-company">{exp.company}</h3>
                    <div className="experience-meta">
                      <span className="experience-period">
                        <FaCalendar /> {exp.period}
                      </span>
                      <span className="experience-location">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-section">
                  <h4 className="section-title">Responsabilidades</h4>
                  <ul className="experience-list">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-section">
                  <h4 className="section-title">Conquistas</h4>
                  <ul className="experience-achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-section">
                  <h4 className="section-title">Tecnologias e Habilidades</h4>
                  <div className="experience-skills">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ExperiencePage;
