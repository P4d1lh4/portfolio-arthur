import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaBriefcase, 
  FaChalkboardTeacher, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle
} from 'react-icons/fa';
import GlitchText, { MatrixRain } from '../components/GlitchText/GlitchText';
import FooterV2 from '../components/Footer/FooterV2';
import './ExperiencePageV2.css';

const ExperiencePageV2 = () => {
  const experiences = [
    {
      icon: FaBriefcase,
      title: 'Desenvolvedor Front-end',
      company: 'Seaway',
      location: 'Recife, PE',
      period: 'Atual',
      type: 'current',
      description: 'Desenvolvimento na aplicação web com React, ajustando layouts, corrigindo erros e otimizando rotas do usuário.',
      responsibilities: [
        'Desenvolvimento e manutenção de interfaces responsivas com React',
        'Otimização de performance e carregamento de páginas',
        'Implementação de melhorias de UI/UX baseadas em feedback',
        'Correção de bugs e refatoração de código legado'
      ],
      skills: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Git']
    },
    {
      icon: FaBriefcase,
      title: 'Desenvolvedor Full Stack',
      company: 'Estágio',
      location: 'Recife, PE',
      period: '05/25 - 07/25',
      type: 'past',
      description: 'Desenvolvimento de aplicações web com Node.js e React, criando APIs, interfaces responsivas e integrando com bancos de dados.',
      responsibilities: [
        'Desenvolvimento de APIs RESTful com Node.js e Express',
        'Criação de interfaces interativas com React',
        'Integração com bancos de dados SQL e NoSQL',
        'Participação em cerimônias ágeis'
      ],
      skills: ['Node.js', 'React', 'Express', 'MongoDB', 'PostgreSQL', 'Docker']
    },
    {
      icon: FaChalkboardTeacher,
      title: 'Monitor em Fundamentos de Programação',
      company: 'CESAR School',
      location: 'Recife, PE',
      period: '1º Período',
      type: 'education',
      description: 'Facilitador da matéria de programação do 1º período, auxiliando em dúvidas e passando exercícios em Portugol e Python.',
      responsibilities: [
        'Auxílio aos alunos durante as aulas práticas',
        'Correção de exercícios e trabalhos',
        'Mentoria individual para alunos com dificuldades',
        'Preparação de exercícios complementares'
      ],
      skills: ['Python', 'Portugol', 'Ensino', 'Mentoria']
    },
    {
      icon: FaChalkboardTeacher,
      title: 'Auxiliar de Professor',
      company: 'NExt - Núcleo de Extensão',
      location: 'CESAR School',
      period: '2022 - 2023',
      type: 'education',
      description: 'Ensino dos fundamentos de programação em Python, introduzindo conceitos básicos de lógica computacional e algoritmos.',
      responsibilities: [
        'Auxílio durante aulas práticas de Python',
        'Preparação de materiais didáticos',
        'Introdução de lógica computacional',
        'Suporte em projetos iniciais'
      ],
      skills: ['Python', 'Algoritmos', 'Lógica', 'Comunicação']
    },
    {
      icon: FaChalkboardTeacher,
      title: 'Palestrante e Oficineiro',
      company: 'Olimpíada Brasileira de Robótica',
      location: 'Recife, PE',
      period: '2022',
      type: 'education',
      description: 'Ministrei uma palestra com a temática de Introdução ao Python, buscando facilitar o entendimento e o primeiro contato com a programação de pessoas de todas as idades.',
      responsibilities: [
        'Preparação e apresentação da palestra sobre Python',
        'Criação de oficina prática para crianças presentes na OBR',
        'Desenvolvimento de conteúdo didático adaptado para diferentes faixas etárias',
        'Demonstração de modelos Lego voltados para robótica',
        'Incentivo ao interesse em programação e robótica'
      ],
      achievements: [
        'Criei uma oficina para crianças que estavam presentes na OBR',
        'Ensinei conceitos básicos de programação de forma lúdica',
        'Despertei interesse em programação em pessoas de diversas idades',
        'Demonstrei aplicações práticas de robótica com Lego'
      ],
      skills: ['Python', 'Robótica', 'Palestras', 'Ensino', 'Comunicação', 'Lego']
    },
    {
      icon: FaChalkboardTeacher,
      title: 'Semana de Imersão',
      company: 'CESAR School',
      location: 'Recife, PE',
      period: '2022',
      type: 'education',
      description: 'Ajudei na organização e monitoramento das atividades de imersão para novos alunos da faculdade CESAR School.',
      responsibilities: [
        'Organização de atividades de Integração',
        'Monitoramento das atividades de Imersão',
        'Suporte aos novos alunos durante a semana',
        'Auxílio na adaptação dos calouros ao ambiente universitário',
        'Coordenação de dinâmicas e eventos'
      ],
      achievements: [
        'Contribuí para uma melhor integração dos novos alunos',
        'Organizei atividades que facilitaram a adaptação dos calouros',
        'Recebi reconhecimento pela dedicação e organização'
      ],
      skills: ['Organização', 'Liderança', 'Comunicação', 'Trabalho em Equipe', 'Gestão de Eventos']
    },
    {
      icon: FaChalkboardTeacher,
      title: 'Maratona de Inovação',
      company: 'CESAR School',
      location: 'Recife, PE',
      period: '2022',
      type: 'education',
      description: 'Ministrei uma palestra dinâmica e informativa sobre Frameworks durante um evento universitário aberto.',
      responsibilities: [
        'Preparação da apresentação sobre Frameworks',
        'Compartilhamento de conhecimento e insights com público diversificado',
        'Abordagem de conceitos fundamentais de frameworks na tecnologia atual',
        'Apresentação de exemplos práticos e casos de uso',
        'Destaque da importância dos frameworks no desenvolvimento moderno'
      ],
      skills: ['Frameworks', 'Palestras', 'Comunicação', 'Apresentação']
    }
  ];

  return (
    <div className="experience-page-v2">
      <MatrixRain />

      {/* Hero Section */}
      <section className="exp-hero">
        <div className="exp-hero-content">
          <Link to="/" className="back-link">
            <FaArrowLeft />
            <span>cd ..</span>
          </Link>

          <motion.div
            className="hero-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">{'<experiência>'}</span>
            <h1 className="page-title">
              <GlitchText text="Experiência" glitchOnHover intensity="low" />
            </h1>
            <p className="page-subtitle">
              Minha trajetória profissional e acadêmica
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${exp.type}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="timeline-dot">
                <exp.icon />
              </div>
              
              <div className="timeline-card">
                <div className="card-header">
                  <div className="terminal-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <span className="terminal-path">~/experiencia/{exp.company.toLowerCase().replace(/\s/g, '-')}</span>
                </div>
                
                <div className="card-content">
                  <div className="card-meta">
                    <span className="period">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                    <span className="location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>
                  
                  <h3 className="card-title">{exp.title}</h3>
                  <p className="card-company">{exp.company}</p>
                  <p className="card-description">{exp.description}</p>
                  
                  <div className="responsibilities">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="responsibility-item">
                        <FaCheckCircle className="check-icon" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="card-skills">
                    {exp.skills.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="section-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">{'</experiência>'}</span>
        </motion.div>
      </section>

      <FooterV2 />
    </div>
  );
};

export default ExperiencePageV2;
