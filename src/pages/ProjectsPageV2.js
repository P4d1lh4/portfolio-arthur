import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaFolder, FaStar } from 'react-icons/fa';
import GlitchText, { MatrixRain } from '../components/GlitchText/GlitchText';
import FooterV2 from '../components/Footer/FooterV2';
import './ProjectsPageV2.css';

const ProjectsPageV2 = () => {
  const projects = [
    {
      title: 'Análise de Dados para Entregadores',
      description: 'Plataforma completa para análise de dados de entregas com dashboard interativo e assistente de IA.',
      features: [
        'Dashboard com gráficos em tempo real',
        'Análise de performance de motoristas',
        'Assistente de IA para insights',
        'Visualização de rotas em mapas'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind', 'Recharts', 'Node.js', 'OpenAI API'],
      codeUrl: 'https://github.com/P4d1lh4/Projeto-para-entregadores',
      category: 'Full Stack',
      featured: true
    },
    {
      title: 'Sistema de Gestão Acadêmica',
      description: 'Aplicação web completa para gerenciamento de alunos e módulos de ensino em instituições educacionais.',
      features: [
        'CRUD completo de alunos e módulos',
        'Sistema de busca avançada',
        'Deploy com Docker e Kubernetes',
        'API RESTful para integração'
      ],
      technologies: ['Python', 'Flask', 'SQLite', 'Docker', 'Kubernetes', 'REST API'],
      codeUrl: 'https://github.com/P4d1lh4/Aplica-o-Professor',
      category: 'Backend',
      featured: true
    },
    {
      title: 'Portfólio Pessoal',
      description: 'Portfólio interativo com design cyberpunk, animações suaves e efeitos visuais impressionantes.',
      features: [
        'Design moderno e responsivo',
        'Animações com Framer Motion',
        'Efeitos de terminal e glitch',
        'Deploy automatizado'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Framer Motion', 'GitHub Pages'],
      codeUrl: 'https://github.com/P4d1lh4/portfolio-arthur',
      category: 'Frontend',
      featured: false
    }
  ];

  return (
    <div className="projects-page-v2">
      <MatrixRain />

      {/* Hero Section */}
      <section className="proj-hero">
        <div className="proj-hero-content">
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
            <span className="section-tag">{'<projetos>'}</span>
            <h1 className="page-title">
              <GlitchText text="Projetos" glitchOnHover intensity="low" />
            </h1>
            <p className="page-subtitle">
              Trabalhos que demonstram minhas habilidades e paixão por código
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="card-header">
                <div className="terminal-dots">
                  <span></span><span></span><span></span>
                </div>
                <span className="terminal-path">~/projetos/{project.title.toLowerCase().replace(/\s/g, '-').substring(0, 20)}</span>
              </div>

              <div className="card-content">
                <div className="card-top">
                  <div className="folder-icon">
                    <FaFolder />
                  </div>
                  <div className="card-actions">
                    {project.featured && (
                      <span className="featured-badge">
                        <FaStar /> Destaque
                      </span>
                    )}
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="action-link">
                      <FaGithub />
                    </a>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.category}</span>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <span className="features-label">Principais funcionalidades</span>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>
                        <span className="bullet">→</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <a 
                  href={project.codeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="view-code-btn"
                >
                  <FaGithub />
                  <span>Ver Código</span>
                  <FaExternalLinkAlt className="external-icon" />
                </a>
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
          <span className="section-tag">{'</projetos>'}</span>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="github-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Quer ver mais projetos?</h3>
            <p>Confira meu perfil no GitHub para mais repositórios e contribuições</p>
            <a 
              href="https://github.com/P4d1lh4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-btn"
            >
              <FaGithub />
              <span>Ver GitHub</span>
            </a>
          </div>
        </motion.div>
      </section>

      <FooterV2 />
    </div>
  );
};

export default ProjectsPageV2;
