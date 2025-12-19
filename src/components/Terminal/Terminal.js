import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Terminal.css';

const COMMANDS = {
  help: {
    description: 'Lista todos os comandos disponíveis',
    action: () => `
╔══════════════════════════════════════════════════════════════╗
║                    📚 COMANDOS DISPONÍVEIS                   ║
╠══════════════════════════════════════════════════════════════╣
║  about      → Saiba mais sobre mim                          ║
║  projects   → Explore meus projetos                         ║
║  experience → Minha trajetória profissional                 ║
║  contact    → Entre em contato comigo                       ║
║  social     → Links das redes sociais                       ║
║  theme      → Mude o tema (cyberpunk/matrix/synthwave)      ║
║  clear      → Limpa o terminal                              ║
║  whoami     → Quem é Arthur Padilha?                        ║
║  neofetch   → Informações do sistema                        ║
╚══════════════════════════════════════════════════════════════╝
    `,
  },
  whoami: {
    description: 'Quem é Arthur Padilha?',
    action: () => `
┌──────────────────────────────────────────────────────────────┐
│  👨‍💻 ARTHUR PADILHA                                           │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  🎯 Desenvolvedor Full Stack               │
│  📍 Recife, PE - Brasil                                     │
│  🎓 Ciência da Computação @ CESAR School (2022-2025)       │
│                                                              │
│  💼 Atualmente: Junior Developer @ Seaway                    │
│                                                              │
│  🔥 Paixão: Transformar dados em insights estratégicos      │
│                                                              │
│  🛠️  Stack Principal:                                        │
│     → Python, JavaScript, TypeScript                        │
│     → React, Node.js, Flask                                 │
│     → Power BI, SQL, Docker                                 │
│                                                              │
└──────────────────────────────────────────────────────────────┘
    `,
  },
  neofetch: {
    description: 'Informações do sistema',
    action: () => `
         ████████╗██████╗ 
         ╚══██╔══╝██╔══██╗
            ██║   ██████╔╝         arthur@portfolio
            ██║   ██╔═══╝          ─────────────────
            ██║   ██║              OS: Human v24.0
         ╚═╝   ╚═╝              Host: Recife, BR
                                    Kernel: Developer
         ╔═════════════╗           Uptime: 22 years
         ║   ARTHUR    ║           Shell: JavaScript
         ║   PADILHA   ║           Terminal: React
         ╚═════════════╝           CPU: Full Stack @ 100%
                                    Memory: Coffee / 1L
                                    
         ████████████████████████████
         ████████████████████████████
    `,
  },
  social: {
    description: 'Links das redes sociais',
    action: () => `
┌──────────────────────────────────────────────────────────────┐
│                      🌐 REDES SOCIAIS                        │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  🐙 GitHub    → https://github.com/P4d1lh4                  │
│  💼 LinkedIn  → linkedin.com/in/arthurpadilha               │
│  📧 Email     → arthur.ppadilha09@gmail.com                 │
│                                                              │
│  Dica: Use 'contact' para ver mais formas de contato!       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
    `,
  },
  about: {
    description: 'Sobre mim',
    navigate: '/sobre',
    action: () => `
⏳ Redirecionando para a página Sobre...
    `,
  },
  projects: {
    description: 'Meus projetos',
    navigate: '/projetos',
    action: () => `
⏳ Redirecionando para a página de Projetos...
    `,
  },
  experience: {
    description: 'Experiência profissional',
    navigate: '/experiencias',
    action: () => `
⏳ Redirecionando para a página de Experiências...
    `,
  },
  contact: {
    description: 'Contato',
    navigate: '/contato',
    action: () => `
⏳ Redirecionando para a página de Contato...
    `,
  },
  clear: {
    description: 'Limpar terminal',
    action: 'CLEAR',
  },
  theme: {
    description: 'Mudar tema',
    action: 'THEME',
  },
};

const TerminalLine = ({ type, content, isNew }) => {
  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={`terminal-line ${type}`}
      initial={isNew ? 'hidden' : 'visible'}
      animate="visible"
      variants={lineVariants}
      transition={{ duration: 0.2 }}
    >
      {type === 'input' && (
        <span className="terminal-prompt">
          <span className="prompt-user">arthur</span>
          <span className="prompt-at">@</span>
          <span className="prompt-host">portfolio</span>
          <span className="prompt-colon">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-symbol">$</span>
        </span>
      )}
      <pre className="terminal-content">{content}</pre>
    </motion.div>
  );
};

const Terminal = ({ onNavigate, className = '' }) => {
  const [history, setHistory] = useState([
    {
      type: 'output',
      content: `
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║    █████╗ ██████╗ ████████╗██╗  ██╗██╗   ██╗██████╗         ║
║   ██╔══██╗██╔══██╗╚══██╔══╝██║  ██║██║   ██║██╔══██╗        ║
║   ███████║██████╔╝   ██║   ███████║██║   ██║██████╔╝        ║
║   ██╔══██║██╔══██╗   ██║   ██╔══██║██║   ██║██╔══██╗        ║
║   ██║  ██║██║  ██║   ██║   ██║  ██║╚██████╔╝██║  ██║        ║
║   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝        ║
║                                                              ║
║           💻 Full Stack Developer & Data Science             ║
║                                                              ║
║   Bem-vindo ao meu portfólio interativo!                    ║
║   Digite 'help' para ver os comandos disponíveis.           ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
      `,
    },
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  // Future: typing animation state
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const navigate = useNavigate();
  const { toggleTheme, availableThemes } = useTheme();

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const executeCommand = useCallback((cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const parts = trimmedCmd.split(' ');
    const mainCmd = parts[0];
    const args = parts.slice(1);

    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    // Adiciona o comando ao histórico
    setHistory(prev => [...prev, { type: 'input', content: cmd, isNew: true }]);

    if (!mainCmd) return;

    const command = COMMANDS[mainCmd];

    if (!command) {
      setHistory(prev => [
        ...prev,
        {
          type: 'error',
          content: `bash: ${mainCmd}: comando não encontrado. Digite 'help' para ver os comandos disponíveis.`,
          isNew: true,
        },
      ]);
      return;
    }

    if (command.action === 'CLEAR') {
      setHistory([]);
      return;
    }

    if (command.action === 'THEME') {
      if (args[0] && availableThemes.includes(args[0])) {
        toggleTheme(args[0]);
        setHistory(prev => [
          ...prev,
          { type: 'output', content: `🎨 Tema alterado para: ${args[0]}`, isNew: true },
        ]);
      } else {
        setHistory(prev => [
          ...prev,
          {
            type: 'output',
            content: `Uso: theme <nome>\nTemas disponíveis: ${availableThemes.join(', ')}`,
            isNew: true,
          },
        ]);
      }
      return;
    }

    const output = command.action();
    setHistory(prev => [...prev, { type: 'output', content: output, isNew: true }]);

    if (command.navigate) {
      setTimeout(() => {
        navigate(command.navigate);
        onNavigate?.(command.navigate);
      }, 1000);
    }
  }, [navigate, onNavigate, toggleTheme, availableThemes]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(currentInput);
      setCurrentInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = Object.keys(COMMANDS);
      const matches = commands.filter(c => c.startsWith(currentInput.toLowerCase()));
      if (matches.length === 1) {
        setCurrentInput(matches[0]);
      } else if (matches.length > 1) {
        setHistory(prev => [
          ...prev,
          { type: 'output', content: `Sugestões: ${matches.join('  ')}`, isNew: true },
        ]);
      }
    } else if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      setHistory([]);
    }
  }, [currentInput, executeCommand, commandHistory, historyIndex]);

  return (
    <div className={`terminal-container ${className}`} onClick={focusInput}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-btn close"></span>
          <span className="terminal-btn minimize"></span>
          <span className="terminal-btn maximize"></span>
        </div>
        <div className="terminal-title">arthur@portfolio: ~</div>
        <div className="terminal-actions"></div>
      </div>
      
      <div className="terminal-body" ref={terminalRef}>
        <AnimatePresence>
          {history.map((line, index) => (
            <TerminalLine key={index} {...line} />
          ))}
        </AnimatePresence>
        
        <div className="terminal-input-line">
          <span className="terminal-prompt">
            <span className="prompt-user">arthur</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">portfolio</span>
            <span className="prompt-colon">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-symbol">$</span>
          </span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
          <span className="terminal-cursor"></span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
