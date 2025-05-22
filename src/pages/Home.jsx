import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ApperIcon from '../components/ApperIcon';
import MainFeature from '../components/MainFeature';
import { useBackground } from '../contexts/BackgroundContext';

const Home = () => {
  const [selectedDisaster, setSelectedDisaster] = useState(null);
  const navigate = useNavigate();
  const { changeBackground } = useBackground();
  
  const handleDisasterSelected = (disasterType) => {
    setSelectedDisaster(disasterType);
    
    // Change the background based on the selected disaster
    changeBackground(disasterType);
    
    
    // Navigate to quiz page with the selected disaster type
    setTimeout(() => {
      navigate(`/quiz?type=${encodeURIComponent(disasterType)}`, { replace: true });
    }, 300);
  };
  
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
  
  return (
    <motion.div
      className="min-h-screen relative z-10 py-8 px-4 sm:px-6 lg:px-8"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
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
            className="text-lg sm:text-xl text-surface-600 dark:text-surface-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Test your knowledge and preparedness for various disaster scenarios
          </motion.p>
        </header>
        
        <MainFeature onDisasterSelected={handleDisasterSelected} />
        
        <footer className="mt-12 text-center text-surface-500 dark:text-surface-400">
          <p className="text-sm">© {new Date().getFullYear()} DisasterMaster | Educational Quiz Game</p>
        </footer>
      </div>
    </motion.div>
  );
};

export default Home;