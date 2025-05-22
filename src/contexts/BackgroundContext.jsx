import { createContext, useState, useContext } from 'react';

// Create context
const BackgroundContext = createContext();

// Custom hook to use the background context
export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
};

// Provider component
export const BackgroundProvider = ({ children }) => {
  const [currentBackground, setCurrentBackground] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [themeAnimations, setThemeAnimations] = useState(null);

  // Theme-specific animation data
  const themeData = {
    home: {
      particleColor: '#457B9D',
      accentColor: '#E63946',
      secondaryColor: '#FFD166',
      backgroundStyle: 'bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-800 dark:to-surface-900'
    },
    earthquake: {
      primaryAnimation: 'shake-slow',
      secondaryAnimation: 'debris-fall',
      particleColor: '#B67F50',
      accentColor: '#814A19',
      iconAnimation: 'shake',
      particleType: 'debris'
    },
    fire: {
      primaryAnimation: 'flicker',
      secondaryAnimation: 'ember-rise',
      particleColor: '#FFB001',
      accentColor: '#E63946',
      iconAnimation: 'flicker-fast',
      particleType: 'ember'
    },
    flood: {
      primaryAnimation: 'float',
      secondaryAnimation: 'droplet-fall',
      particleColor: '#76C893',
      accentColor: '#1A759F',
      iconAnimation: 'float-fast',
      particleType: 'droplet'
    },
    zombie: {
      primaryAnimation: 'lurch',
      secondaryAnimation: 'hand-rise',
      particleColor: '#6A994E',
      accentColor: '#386641',
      iconAnimation: 'sway',
      particleType: 'hand'
    },
    alien: {
      primaryAnimation: 'pulse',
      secondaryAnimation: 'orb-float',
      particleColor: '#7209B7',
      accentColor: '#3F37C9',
      iconAnimation: 'pulse-fast',
      particleType: 'orb'
    }
  };

  const changeBackground = (disasterId) => {
    // Prevent unnecessary updates if the background isn't changing
    if (disasterId === currentBackground) {
      return;
    }
    
    setIsTransitioning(true);
    setTimeout(() => {
      // Handle the case where we want to clear the background (going back to home)
      if (disasterId === null || disasterId === 'home') {
        document.body.classList.remove('disaster-mode');
      }
      // Update both states together to prevent potential re-render issues
      setCurrentBackground(disasterId);
      setThemeAnimations(disasterId ? themeData[disasterId] : null);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <BackgroundContext.Provider value={{ currentBackground, changeBackground, isTransitioning, themeAnimations, themeData }}>
      {children}
    </BackgroundContext.Provider>
  );
};