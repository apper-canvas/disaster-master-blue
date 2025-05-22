import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ApperIcon from '../components/ApperIcon';
import { useBackground } from '../contexts/BackgroundContext';

const QuizPage = () => {
  const navigate = useNavigate();
  const { currentBackground } = useBackground();
  
  // Get disaster type from URL params
  const params = new URLSearchParams(window.location.search);
  const disasterType = params.get('type');
  
  // If no disaster type is specified, redirect to home
  useEffect(() => {
    if (!disasterType) {
      navigate('/');
    }
  }, [disasterType, navigate]);
  
  // Format disaster name for display
  const formatDisasterName = (id) => {
    if (!id) return '';
    return id.charAt(0).toUpperCase() + id.slice(1);
  };
  
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.5,
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
      <div className="relative z-10 max-w-4xl mx-auto bg-white/90 dark:bg-surface-800/90 rounded-xl p-6 sm:p-8 shadow-lg backdrop-blur-sm">
        <div className="flex items-center mb-6">
          <motion.div 
            className={`p-3 rounded-full mr-4 disaster-${disasterType}`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
          >
            <ApperIcon name={disasterType === 'earthquake' ? 'Mountain' : 
                           disasterType === 'fire' ? 'Flame' :
                           disasterType === 'flood' ? 'Droplets' :
                           disasterType === 'zombie' ? 'Skull' : 'Rocket'} 
                      className="h-8 w-8 text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold text-surface-900 dark:text-white">
            {formatDisasterName(disasterType)} Challenge
          </h1>
        </div>
        
        <p className="text-lg mb-6">Quiz questions for {formatDisasterName(disasterType)} scenario will appear here.</p>
        
        <button 
          onClick={() => navigate('/')}
          className={`inline-flex items-center gap-2 px-4 py-2 disaster-${disasterType} rounded-lg text-white hover:opacity-90 transition-colors`}
        >
          <ApperIcon name="ArrowLeft" className="h-5 w-5" />
          Back to Home
        </button>
      </div>
    </motion.div>
  );
};

export default QuizPage;