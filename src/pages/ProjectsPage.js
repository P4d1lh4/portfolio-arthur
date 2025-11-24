import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaArrowLeft, FaExternalLinkAlt, FaCode, FaStar } from 'react-icons/fa';
import Footer from '../components/Footer/Footer';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Análise de Dados para Entregadores',
      description:
        'Desenvolvimento de uma plataforma completa para análise de dados de entregas, com foco em otimizar a eficiência e a produtividade dos entregadores.',
      fullDescription:
        'O sistema inclui um dashboard interativo para visualização de métricas em tempo real, análise de performance de motoristas e um assistente de IA para insights e recomendações. A plataforma permite aos gestores monitorarem entregas, identificarem padrões e tomarem decisões baseadas em dados.',
      features: [
        'Dashboard interativo com gráficos em tempo real',
        'Análise de performance de motoristas',
        'Assistente de IA para insights e recomendações',
        'Visualização de rotas em mapas',
        'Relatórios exportáveis',
        'Interface responsiva e intuitiva'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Mapbox', 'Node.js', 'OpenAI API'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      codeUrl: 'https://github.com/P4d1lh4/Projeto-para-entregadores',
      category: 'Web Development',
      status: 'Completo'
    },
    {
      title: 'Sistema de Gestão Acadêmica',
      description:
        'Aplicação web completa para gerenciamento de alunos e módulos de ensino em instituições educacionais.',
      fullDescription:
        'Desenvolvi uma aplicação web completa com Flask para o gerenciamento de alunos e módulos. O sistema permite cadastrar, editar, pesquisar e excluir alunos, além de criar e gerenciar módulos de ensino. Todas as informações são armazenadas em um banco de dados SQLite, com interface amigável e responsiva.',
      features: [
        'CRUD completo de alunos e módulos',
        'Sistema de busca avançada',
        'Interface responsiva e intuitiva',
        'Banco de dados SQLite',
        'Deploy com Docker e Kubernetes',
        'API RESTful para integração'
      ],
      technologies: ['Python', 'Flask', 'SQLite', 'HTML5', 'CSS3', 'JavaScript', 'Docker', 'Kubernetes', 'REST API'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      codeUrl: 'https://github.com/P4d1lh4/Aplica-o-Professor',
      category: 'Full Stack',
      status: 'Completo'
    },
    {
      title: 'Portfólio Pessoal',
      description:
        'Portfólio interativo e responsivo desenvolvido com React, apresentando projetos e experiências profissionais.',
      fullDescription:
        'Este portfólio foi desenvolvido com foco em design moderno e experiência do usuário. Utiliza animações suaves com Framer Motion, partículas interativas no background e um sistema de navegação entre páginas para melhor organização do conteúdo.',
      features: [
        'Design moderno e responsivo',
        'Animações suaves com Framer Motion',
        'Background com partículas interativas',
        'Sistema de navegação entre páginas',
        'Otimizado para performance',
        'Deploy automatizado no GitHub Pages'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Framer Motion', 'React Router', 'GitHub Pages'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      codeUrl: 'https://github.com/P4d1lh4/portfolio-arthur',
      category: 'Web Development',
      status: 'Completo'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="projects-hero-background"></div>
        <motion.div
          className="projects-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button onClick={() => navigate('/')} className="back-button">
            <FaArrowLeft /> Voltar
          </button>
          <h1 className="projects-hero-title">Meus Projetos</h1>
          <p className="projects-hero-subtitle">
            Uma coleção dos meus projetos e trabalhos desenvolvidos
          </p>
        </motion.div>
      </div>

      <section className="projects-content">
        <motion.div
          className="projects-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-item"
              variants={itemVariants}
            >
              <div className="project-card-full">
                <div className="project-header" style={{ background: project.gradient }}>
                  <div className="project-header-content">
                    <div className="project-category">
                      <FaCode /> {project.category}
                    </div>
                    <h2 className="project-title-full">{project.title}</h2>
                    <p className="project-description-short">{project.description}</p>
                    <div className="project-status">
                      <FaStar /> {project.status}
                    </div>
                  </div>
                </div>

                <div className="project-body">
                  <div className="project-section">
                    <h3 className="section-title">Sobre o Projeto</h3>
                    <p className="project-full-description">{project.fullDescription}</p>
                  </div>

                  <div className="project-section">
                    <h3 className="section-title">Principais Funcionalidades</h3>
                    <ul className="project-features">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-section">
                    <h3 className="section-title">Tecnologias Utilizadas</h3>
                    <div className="project-technologies">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-links">
                    <motion.a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub /> Ver Código no GitHub
                    </motion.a>
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

export default ProjectsPage;
