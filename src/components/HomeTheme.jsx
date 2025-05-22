import React from 'react';
import { useBackground } from '../contexts/BackgroundContext';

const HomeTheme = () => {
  const { themeData } = useBackground();
  const homeTheme = themeData.home;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Static background gradient */}
      <div className={`absolute inset-0 ${homeTheme.backgroundStyle} opacity-50`}></div>
      
      {/* Decorative elements - top section */}
      <div className="absolute top-0 right-0 w-full h-24 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary-light/10 dark:bg-primary/10"></div>
      <div className="absolute top-20 right-20 w-24 h-24 rounded-md bg-secondary/10 dark:bg-secondary-light/10 rotate-12"></div>
      
      {/* Geometric patterns */}
      <div className="absolute left-1/4 top-1/3 w-16 h-16 rounded-md bg-accent/10 rotate-45"></div>
      <div className="absolute right-1/4 top-2/3 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary-light/10"></div>
      <div className="absolute left-1/3 bottom-1/4 w-20 h-20 rounded-md bg-secondary/10 dark:bg-secondary-light/10 -rotate-12"></div>
      
      {/* Bottom section decorations */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary/10 to-transparent"></div>
      
      {/* Circles in corners */}
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full border-2 border-primary/5 dark:border-primary-light/5"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full border-2 border-secondary/5 dark:border-secondary-light/5"></div>
      
      {/* Static shapes */}
      {generateStaticShapes()}
    </div>
  );
};

// Generate static decorative shapes positioned throughout the page
const generateStaticShapes = () => {
  const shapes = [];
  const shapeCount = 15;
  
  for (let i = 0; i < shapeCount; i++) {
    const type = i % 3 === 0 ? 'circle' : i % 3 === 1 ? 'square' : 'triangle';
    const size = 20 + (i % 4) * 15; // Sizes between 20-65px
    const opacity = 0.05 + (i % 5) * 0.02; // Opacity between 0.05-0.15
    
    // Distribute shapes across the screen in a more deliberate pattern
    const xPos = (i % 5) * 20;
    const yPos = Math.floor(i / 5) * 30;
    
    if (type === 'circle') {
      shapes.push(
        <div key={`shape-${i}`} className="absolute rounded-full dark:bg-secondary-dark/30 bg-primary-light/20" 
             style={{left: `${xPos}%`, top: `${yPos}%`, width: `${size}px`, height: `${size}px`, opacity}}></div>
      );
    } else if (type === 'square') {
      shapes.push(
        <div key={`shape-${i}`} className="absolute rounded-md dark:bg-primary-dark/20 bg-secondary/20" 
             style={{left: `${xPos + 5}%`, top: `${yPos + 5}%`, width: `${size}px`, height: `${size}px`, opacity, transform: `rotate(${i * 5}deg)`}}></div>
      );
    } else {
      shapes.push(
        <div key={`shape-${i}`} className="absolute" style={{left: `${xPos + 10}%`, top: `${yPos + 10}%`, width: 0, height: 0, opacity,
          borderLeft: `${size / 2}px solid transparent`, borderRight: `${size / 2}px solid transparent`, 
          borderBottom: `${size}px solid rgba(255, 209, 102, 0.2)`}}></div>
      );
    }
  }
  return shapes;
};

export default HomeTheme;