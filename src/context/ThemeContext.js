import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  cyberpunk: {
    name: 'Cyberpunk',
    primary: '#00ff9f',
    secondary: '#ff00ff',
    accent: '#00ffff',
    background: '#0a0a0f',
    surface: '#12121a',
    text: '#ffffff',
    textMuted: '#888888',
    gradient: 'linear-gradient(135deg, #00ff9f 0%, #00ffff 50%, #ff00ff 100%)',
  },
  matrix: {
    name: 'Matrix',
    primary: '#00ff00',
    secondary: '#003300',
    accent: '#00ff00',
    background: '#000000',
    surface: '#0a0f0a',
    text: '#00ff00',
    textMuted: '#006600',
    gradient: 'linear-gradient(135deg, #00ff00 0%, #003300 100%)',
  },
  synthwave: {
    name: 'Synthwave',
    primary: '#ff6ec7',
    secondary: '#7b2cbf',
    accent: '#ffd700',
    background: '#1a0033',
    surface: '#2d004d',
    text: '#ffffff',
    textMuted: '#b380b3',
    gradient: 'linear-gradient(135deg, #ff6ec7 0%, #7b2cbf 50%, #ffd700 100%)',
  },
  minimal: {
    name: 'Minimal',
    primary: '#ffffff',
    secondary: '#cccccc',
    accent: '#ffffff',
    background: '#000000',
    surface: '#111111',
    text: '#ffffff',
    textMuted: '#777777',
    gradient: 'linear-gradient(135deg, #ffffff 0%, #888888 100%)',
  },
};

const applyTheme = (themeName) => {
  const theme = themes[themeName];
  if (theme) {
    document.documentElement.style.setProperty('--theme-primary', theme.primary);
    document.documentElement.style.setProperty('--theme-secondary', theme.secondary);
    document.documentElement.style.setProperty('--theme-accent', theme.accent);
    document.documentElement.style.setProperty('--theme-bg', theme.background);
    document.documentElement.style.setProperty('--theme-background', theme.background);
    document.documentElement.style.setProperty('--theme-surface', theme.surface);
    document.documentElement.style.setProperty('--theme-text', theme.text);
    document.documentElement.style.setProperty('--theme-text-muted', theme.textMuted);
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('cyberpunk');
  const [isTerminalMode, setIsTerminalMode] = useState(true);

  // Apply theme on mount
  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  const toggleTheme = useCallback((themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      applyTheme(themeName);
    }
  }, []);

  const toggleTerminalMode = useCallback(() => {
    setIsTerminalMode(prev => !prev);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: themes[currentTheme],
        themeName: currentTheme,
        toggleTheme,
        isTerminalMode,
        toggleTerminalMode,
        availableThemes: Object.keys(themes),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
