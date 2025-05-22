import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HomeAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [shapes, setShapes] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  
  // Handle mouse movement for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Generate shapes based on window size
  useEffect(() => {
    // Responsive number of shapes based on screen size
    const baseCount = 10;
    const count = windowSize.width < 640 ? baseCount - 3 : 
                 windowSize.width < 1024 ? baseCount : 
                 baseCount + 5;
    
    const newShapes = Array.from({ length: count }, (_, i) => ({
      id: `shape-${i}`,
      type: Math.random() > 0.6 ? 'circle' : Math.random() > 0.5 ? 'square' : 'triangle',
      x: Math.random() * 100, // percentage position
      y: Math.random() * 100,
      size: Math.random() * 60 + 20, // between 20-80px
      opacity: Math.random() * 0.2 + 0.1, // between 0.1-0.3
      delay: Math.random() * 2,
      duration: Math.random() * 5 + 6, // between 6-11s
      rotation: Math.random() * 360,
    }));
    
    setShapes(newShapes);
  }, [windowSize]);
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Main floating shapes */}
      {shapes.map((shape) => {
        const commonProps = {
          key: shape.id,
          className: "absolute",
          style: {
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: shape.opacity,
            zIndex: 0,
          },
          animate: {
            x: [0, (Math.random() - 0.5) * 80],
            y: [0, (Math.random() - 0.5) * 80],
            rotate: [0, shape.rotation],
          },
          transition: {
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        };
        
        // Choose shape based on type
        if (shape.type === 'circle') {
          return (
            <motion.div
              {...commonProps}
              className="absolute rounded-full dark:bg-secondary-dark/30 bg-primary-light/20"
              style={{
                ...commonProps.style,
                width: `${shape.size}px`,
                height: `${shape.size}px`,
              }}
            />
          );
        } else if (shape.type === 'square') {
          return (
            <motion.div
              {...commonProps}
              className="absolute rounded-md dark:bg-primary-dark/20 bg-secondary/20"
              style={{
                ...commonProps.style,
                width: `${shape.size}px`,
                height: `${shape.size}px`,
              }}
            />
          );
        } else {
          // Triangle (using CSS border trick)
          return (
            <motion.div
              {...commonProps}
              className="absolute"
              style={{
                ...commonProps.style,
                width: 0,
                height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid`,
                borderBottomColor: 'rgba(255, 209, 102, 0.2)', // accent color with opacity
              }}
            />
          );
        }
      })}
      
      {/* Interactive pulse rings that follow mouse position */}
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full border-2 border-primary/20 dark:border-primary-light/20 hidden md:block"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          pointerEvents: 'none',
        }}
        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
      
      {/* Foreground animated elements */}
      <div className="absolute top-20 right-10 w-24 h-24 rounded-full bg-primary-light/10 dark:bg-primary/10 animate-float-bounce hidden lg:block" />
      <div className="absolute bottom-40 left-10 w-32 h-32 rounded-md bg-secondary/10 dark:bg-secondary-light/10 animate-drift hidden lg:block" />
      <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-md bg-accent/10 animate-sway-slow hidden md:block" />
      
      {/* Light sparkles/accents */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-primary-light dark:bg-accent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
        />
      ))}
    </div>
  );
};

export default HomeAnimation;