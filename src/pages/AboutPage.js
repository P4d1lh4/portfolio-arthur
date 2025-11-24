import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCode, 
  FaChartLine, 
  FaRobot, 
  FaLightbulb,
  FaUsers,
  FaComments,
  FaTasks,
  FaBrain,
  FaHandshake,
  FaSearch
} from 'react-icons/fa';
import Footer from '../components/Footer/Footer';
import './AboutPage.css';

const AboutPage = () => {
  const navigate = useNavigate();

  const interests = [
    {
      icon: <FaChartLine />,
      title: 'Análise de Dados',
      description: 'Apaixonado por transformar dados brutos em insights valiosos. Trabalho com PowerBI, Python (Pandas, NumPy), e visualização de dados para auxiliar na tomada de decisões estratégicas.',
      topics: ['Data Science', 'Business Intelligence', 'Machine Learning', 'Dashboards Interativos']
    },
    {
      icon: <FaCode />,
      title: 'Desenvolvimento Full Stack',
      description: 'Experiência no desenvolvimento de aplicações web completas, desde o front-end com React até APIs robustas com Node.js, sempre buscando as melhores práticas e arquiteturas.',
      topics: ['React', 'Node.js', 'APIs RESTful', 'Arquitetura de Software']
    },
    {
      icon: <FaRobot />,
      title: 'Inteligência Artificial',
      description: 'Interesse crescente em IA e suas aplicações práticas. Estudando técnicas de Machine Learning e Deep Learning para resolver problemas complexos e criar soluções inovadoras.',
      topics: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision']
    },
    {
      icon: <FaSearch />,
      title: 'Otimização e Performance',
      description: 'Focado em otimizar aplicações para melhor performance, desde queries de banco de dados até carregamento de páginas, sempre buscando a melhor experiência para o usuário.',
      topics: ['Performance Web', 'Otimização de Queries', 'Caching', 'SEO']
    }
  ];

  const softSkills = [
    {
      icon: <FaUsers />,
      title: 'Comunicativo',
      description: 'Facilidade para me comunicar com equipes multidisciplinares e stakeholders, transmitindo ideias técnicas de forma clara e acessível.'
    },
    {
      icon: <FaTasks />,
      title: 'Organização',
      description: 'Capacidade de gerenciar múltiplas tarefas e prioridades, mantendo a qualidade do trabalho e cumprindo prazos estabelecidos.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Adaptabilidade',
      description: 'Rápida adaptação a novas tecnologias, metodologias e ambientes de trabalho, sempre aberto a aprender e evoluir.'
    },
    {
      icon: <FaHandshake />,
      title: 'Trabalho em Equipe',
      description: 'Experiência colaborando em times ágeis, compartilhando conhecimento e contribuindo para um ambiente de trabalho positivo.'
    },
    {
      icon: <FaBrain />,
      title: 'Proativo',
      description: 'Iniciativa para identificar problemas e propor soluções antes que se tornem críticos, sempre buscando melhorias contínuas.'
    },
    {
      icon: <FaComments />,
      title: 'Resolução de Problemas',
      description: 'Habilidade analítica para decompor problemas complexos em partes menores e desenvolver soluções eficientes e criativas.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="about-page">
      <div className="about-page-hero">
        <div className="about-page-hero-background"></div>
        <motion.div
          className="about-page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button onClick={() => navigate('/')} className="back-button">
            <FaArrowLeft /> Voltar
          </button>
          <h1 className="about-page-hero-title">Sobre Mim</h1>
          <p className="about-page-hero-subtitle">
            Conheça mais sobre minha trajetória, interesses e habilidades
          </p>
        </motion.div>
      </div>

      <section className="about-page-content">
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="intro-text">
            <h2 className="intro-title">Olá! Sou Arthur Padilha</h2>
            <p className="intro-paragraph">
              Sou estudante de <strong>Ciência da Computação</strong> na CESAR School, atualmente no 8º período, 
              e desenvolvedor apaixonado por tecnologia e inovação. Minha jornada na programação começou com a 
              curiosidade de entender como as coisas funcionam e evoluiu para uma paixão por criar soluções que 
              fazem a diferença.
            </p>
            <p className="intro-paragraph">
              Com experiência em <strong>desenvolvimento full stack</strong>, tenho trabalhado com tecnologias 
              como React, Node.js, Python e diversas ferramentas de análise de dados. Atualmente, atuo como 
              <strong> Desenvolvedor Front-end na Seaway</strong>, onde aplico minhas habilidades para criar 
              interfaces intuitivas e performáticas.
            </p>
            <p className="intro-paragraph">
              Além do desenvolvimento, tenho uma paixão especial por <strong>ensinar e compartilhar conhecimento</strong>. 
              Já atuei como monitor, auxiliar de professor e palestrante, ajudando pessoas de diferentes idades e 
              níveis a darem seus primeiros passos na programação. Acredito que a tecnologia deve ser acessível a 
              todos e me motivo em contribuir para isso.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="interests-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Áreas de Interesse</h2>
            <div className="section-line"></div>
            <p className="section-description">
              Tecnologias e áreas da programação que me fascinam e nas quais busco constantemente me aprimorar
            </p>
          </motion.div>

          <div className="interests-grid">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="interest-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="interest-icon">{interest.icon}</div>
                <h3 className="interest-title">{interest.title}</h3>
                <p className="interest-description">{interest.description}</p>
                <div className="interest-topics">
                  {interest.topics.map((topic, i) => (
                    <span key={i} className="topic-tag">{topic}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="soft-skills-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Soft Skills</h2>
            <div className="section-line"></div>
            <p className="section-description">
              Habilidades interpessoais que complementam minha expertise técnica e contribuem para o sucesso dos projetos
            </p>
          </motion.div>

          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="soft-skill-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="soft-skill-icon">{skill.icon}</div>
                <div className="soft-skill-content">
                  <h4 className="soft-skill-title">{skill.title}</h4>
                  <p className="soft-skill-description">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="closing-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="closing-content">
            <h2 className="closing-title">Sempre Aprendendo</h2>
            <p className="closing-text">
              Acredito que a tecnologia está em constante evolução e, por isso, mantenho-me sempre atualizado 
              com as últimas tendências e melhores práticas. Estou sempre em busca de novos desafios que me 
              permitam crescer profissionalmente e contribuir com soluções inovadoras.
            </p>
            <p className="closing-text">
              Se você tem um projeto interessante ou gostaria de trocar ideias sobre tecnologia, ficarei feliz 
              em conversar!
            </p>
            <motion.button
              className="cta-button"
              onClick={() => navigate('/contato')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Entre em Contato
            </motion.button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
