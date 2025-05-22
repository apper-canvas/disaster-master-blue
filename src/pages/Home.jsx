import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ApperIcon from '../components/ApperIcon';
import MainFeature from '../components/MainFeature';
import HomeTheme from '../components/HomeTheme';
import { useBackground } from '../contexts/BackgroundContext';

const Home = () => {
  const { changeBackground } = useBackground();
  
  // Page transition animations
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  
  // Set home theme when component mounts
  useEffect(() => {
    // Set the background to the home theme
    changeBackground('home');
    
  }, [changeBackground]);
  
  return (
    <motion.div
      className="min-h-screen relative z-10 py-8 px-4 sm:px-6 lg:px-8"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <HomeTheme />
      
      <div className="relative z-10">
        <header className="text-center mb-8 sm:mb-12">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-light mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Disaster Readiness Quiz Game
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-surface-600 dark:text-surface-300 max-w-2xl mx-auto backdrop-blur-sm bg-white/30 dark:bg-black/30 px-4 py-2 rounded-full inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Test your knowledge and preparedness for various disaster scenarios
          </motion.p>
          
          <motion.div
            className="flex justify-center mt-4 space-x-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary-dark dark:bg-primary/20 dark:text-primary-light">
              <ApperIcon name="Info" className="w-3 h-3 mr-1" />
              Educational
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary-dark dark:bg-secondary/20 dark:text-secondary-light">
              <ApperIcon name="GameController" className="w-3 h-3 mr-1" />
              Fun Quizzes
            </span>
          </motion.div>
        </header>
        
        <MainFeature />
        
        <footer className="mt-12 text-center text-surface-500 dark:text-surface-400 backdrop-blur-sm bg-white/30 dark:bg-black/30 py-2 rounded-lg max-w-md mx-auto">
          <p className="text-sm">© {new Date().getFullYear()} DisasterMaster | Educational Quiz Game</p>
        </footer>
        
      </div>
    </motion.div>
  );
};

export default Home;