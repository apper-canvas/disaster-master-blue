import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useBackground } from '../contexts/BackgroundContext';

const ThemeParticles = ({ themeType }) => {
  const { themeData } = useBackground();
  const [particles, setParticles] = useState([]);
  
  // Generate random particles based on theme
  useEffect(() => {
    if (!themeType || !themeData[themeType]) return;
    
    const theme = themeData[themeType];
    const count = themeType === 'earthquake' ? 6 :
                  themeType === 'fire' ? 12 :
                  themeType === 'flood' ? 15 :
                  themeType === 'zombie' ? 5 :
                  themeType === 'alien' ? 8 : 0;
                  
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: `particle-${i}`,
      x: Math.random() * 100, // percentage across screen
      size: Math.random() * 20 + 5, // random size between 5-25px
      delay: Math.random() * 5, // random delay for animation
      duration: Math.random() * 3 + 2, // random duration between 2-5s
      opacity: Math.random() * 0.5 + 0.3, // random opacity between 0.3-0.8
      rotation: Math.random() * 360, // random rotation
    }));
    
    setParticles(newParticles);
  }, [themeType]);
  
  // Return null if no theme or invalid theme
  if (!themeType || !themeData[themeType]) return null;
  
  const theme = themeData[themeType];
  
  // Render different particle types based on disaster theme
  const renderParticle = (particle) => {
    switch (theme.particleType) {
      case 'debris':
        return (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: '-50px',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: theme.particleColor,
              opacity: particle.opacity,
              borderRadius: '2px',
              zIndex: 5,
            }}
            animate={{
              y: ['0vh', '100vh'],
              rotate: [0, particle.rotation],
              opacity: [particle.opacity, 0]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              ease: 'linear',
              repeat: Infinity,
              repeatDelay: Math.random() * 3
            }}
          />
        );
        
      case 'ember':
        return (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              bottom: '-20px',
              width: `${particle.size/2}px`,
              height: `${particle.size/2}px`,
              background: `radial-gradient(circle at center, ${theme.accentColor}, ${theme.particleColor})`,
              borderRadius: '50%',
              filter: 'blur(1px)',
              zIndex: 5,
            }}
            animate={{
              y: ['0vh', '-100vh'],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [particle.opacity, 0]
            }}
            transition={{
              duration: particle.duration + 2,
              delay: particle.delay,
              ease: 'easeOut',
              repeat: Infinity,
              repeatDelay: Math.random() * 2
            }}
          />
        );
        
      case 'droplet':
        return (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: '-50px',
              width: `${particle.size/3}px`,
              height: `${particle.size}px`,
              background: `linear-gradient(to bottom, ${theme.particleColor}AA, ${theme.accentColor}AA)`,
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              zIndex: 5,
            }}
            animate={{
              y: ['0vh', '100vh'],
              opacity: [particle.opacity, 0.7, 0]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              ease: 'easeIn',
              repeat: Infinity,
              repeatDelay: Math.random() * 2
            }}
          />
        );
        
      case 'orb':
        return (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${Math.random() * 80 + 10}vh`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle at 30%, white, ${theme.particleColor})`,
              boxShadow: `0 0 ${particle.size/2}px ${theme.particleColor}`,
              borderRadius: '50%',
              zIndex: 5,
            }}
            animate={{
              x: [(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50],
              y: [(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50],
              scale: [1, 1.2, 1],
              opacity: [particle.opacity, particle.opacity * 1.2, particle.opacity]
            }}
            transition={{
              duration: particle.duration + 3,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        );
        
      // For zombie theme - rising hands
      case 'hand':
        return (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              bottom: '-50px',
              width: `${particle.size * 0.8}px`,
              height: `${particle.size * 2}px`,
              background: theme.particleColor,
              borderRadius: '5px 5px 0 0',
              zIndex: 5,
              transformOrigin: 'bottom center'
            }}
            animate={{
              y: [0, -100, -80, -100, -70, -100],
              rotate: [0, -5, 5, -5, 0],
              opacity: [particle.opacity, particle.opacity, 0]
            }}
            transition={{
              duration: particle.duration + 5,
              delay: particle.delay,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: Math.random() * 10 + 5
            }}
          />
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map(renderParticle)}
    </div>
  );
};

export default ThemeParticles;