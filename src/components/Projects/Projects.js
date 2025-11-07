import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Análise de Dados para Entregadores',
      description:
        'Desenvolvimento de uma plataforma completa para análise de dados de entregas, com foco em otimizar a eficiência e a produtividade dos entregadores. O sistema inclui um dashboard interativo para visualização de métricas em tempo real, análise de performance de motoristas e um assistente de IA para insights e recomendações.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Mapbox', 'Node.js'],
      gradient: 'var(--gradient-1)',
      codeUrl: 'https://github.com/P4d1lh4/Projeto-para-entregadores',
    },
    {
      title: 'Sistema de Gestão Acadêmica',
      description:
        'Desenvolvi uma aplicação web completa com Flask para o gerenciamento de alunos e módulos. O sistema permite cadastrar, editar, pesquisar e excluir alunos, além de criar e gerenciar módulos de ensino, com todas as informações armazenadas em um banco de dados SQLite. O projeto foi projetado para ser "deployável" com Docker e Kubernetes.',
      technologies: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Docker', 'Kubernetes'],
      gradient: 'var(--gradient-2)',
      codeUrl: 'https://github.com/P4d1lh4/Aplica-o-Professor',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="projects" className="projects" ref={ref}>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Projetos</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-gradient" style={{ background: project.gradient }}></div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> Código
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

