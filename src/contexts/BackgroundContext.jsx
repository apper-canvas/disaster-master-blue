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

  const changeBackground = (disasterId) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentBackground(disasterId);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <BackgroundContext.Provider value={{ currentBackground, changeBackground, isTransitioning }}>
      {children}
    </BackgroundContext.Provider>
  );
};