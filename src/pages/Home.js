import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaProjectDiagram, FaEnvelope, FaUser } from 'react-icons/fa';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Footer from '../components/Footer/Footer';
import './Home.css';

const Home = () => {
  const cards = [
    {
      icon: <FaUser />,
      title: 'Sobre Mim',
      description: 'Saiba mais sobre minha história, interesses e habilidades',
      link: '/sobre',
      color: '#4facfe'
    },
    {
      icon: <FaBriefcase />,
      title: 'Experiências',
      description: 'Conheça minha trajetória profissional e experiências de trabalho',
      link: '/experiencias',
      color: '#667eea'
    },
    {
      icon: <FaProjectDiagram />,
      title: 'Projetos',
      description: 'Explore os projetos que desenvolvi e as tecnologias utilizadas',
      link: '/projetos',
      color: '#764ba2'
    },
    {
      icon: <FaEnvelope />,
      title: 'Contato',
      description: 'Entre em contato comigo para conversarmos sobre oportunidades',
      link: '/contato',
      color: '#f093fb'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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
    <div className="home-page">
      <Hero />
      <About />
      
      <section className="navigation-cards">
        <motion.div
          className="navigation-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="section-header" variants={cardVariants}>
            <h2 className="section-title">Explore Mais</h2>
            <div className="section-line"></div>
            <p className="section-subtitle">Navegue pelas diferentes seções do meu portfólio</p>
          </motion.div>

          <div className="cards-grid">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={card.link} className="nav-card" style={{ '--card-color': card.color }}>
                  <div className="card-icon" style={{ color: card.color }}>
                    {card.icon}
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <div className="card-arrow">→</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
