import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import ApperIcon from './ApperIcon';

const disasterTypes = [
  {
    id: 'earthquake',
    name: 'Earthquake',
    icon: 'Mountain',
    description: 'Test your knowledge about earthquake safety and preparedness.',
    className: 'disaster-earthquake'
  },
  {
    id: 'fire',
    name: 'Fire',
    icon: 'Flame',
    description: 'Learn how to prevent and respond to fires in various settings.',
    className: 'disaster-fire'
  },
  {
    id: 'flood',
    name: 'Flood',
    icon: 'Droplets',
    description: 'Discover critical flood safety measures and evacuation procedures.',
    className: 'disaster-flood'
  },
  {
    id: 'zombie',
    name: 'Zombie Outbreak',
    icon: 'Skull',
    description: 'A fun yet educational take on survival and emergency preparedness.',
    className: 'disaster-zombie'
  },
  {
    id: 'alien',
    name: 'Alien Invasion',
    icon: 'Rocket',
    description: 'Creative scenario teaching adaptability and resource management.',
    className: 'disaster-alien'
  }
];

const MainFeature = ({ onDisasterSelected }) => {
  const [hoveredDisaster, setHoveredDisaster] = useState(null);
  const [selectedDisaster, setSelectedDisaster] = useState(null);
  const [username, setUsername] = useState('');
  const [showNamePrompt, setShowNamePrompt] = useState(false);
  const [isStarting, setIsStarting] = useState(false);
  
  const handleDisasterClick = (disaster) => {
    setSelectedDisaster(disaster);
    setShowNamePrompt(true);
  };

  const handleStartQuiz = (e) => {
    e.preventDefault();
    
    if (!username.trim()) {
      toast.error("Please enter your name before starting");
      return;
    }
    
    setIsStarting(true);
    
    // Store the username in localStorage
    localStorage.setItem('disastermaster_username', username);
    
    // Show success toast
    toast.success(`${username}, get ready for the ${selectedDisaster.name} scenario!`);
    
    // Small delay before navigation for animation
    setTimeout(() => {
      onDisasterSelected(selectedDisaster.id);
    }, 800);
  };
  
  return (
    <div className="max-w-6xl mx-auto">
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold text-center mb-8 text-secondary-dark dark:text-secondary-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Choose Your Disaster
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <AnimatePresence>
          {disasterTypes.map((disaster, index) => (
            <motion.div
              key={disaster.id}
              className={`disaster-card ${disaster.className} cursor-pointer p-6 sm:p-8 text-white`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleDisasterClick(disaster)}
              onMouseEnter={() => setHoveredDisaster(disaster.id)}
              onMouseLeave={() => setHoveredDisaster(null)}
            >
              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <ApperIcon name={disaster.icon} className="h-8 w-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">{disaster.name}</h3>
              </div>
              
              <AnimatePresence>
                {hoveredDisaster === disaster.id && (
                  <motion.p 
                    className="text-white/90 text-sm sm:text-base"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {disaster.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <AnimatePresence>
        {showNamePrompt && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white dark:bg-surface-800 p-6 sm:p-8 rounded-xl w-full max-w-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <div className="text-center mb-6">
                <div className={`inline-block p-3 rounded-full mb-4 ${selectedDisaster.className}`}>
                  <ApperIcon name={selectedDisaster.icon} className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-surface-900 dark:text-white mb-2">
                  {selectedDisaster.name} Challenge
                </h3>
                <p className="text-surface-600 dark:text-surface-300">
                  Enter your name to start the quiz
                </p>
              </div>
              
              <form onSubmit={handleStartQuiz}>
                <div className="mb-4">
                  <label htmlFor="username" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="w-full px-4 py-3 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={isStarting}
                    autoFocus
                  />
                </div>
                
                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    className="flex-1 px-4 py-3 bg-surface-200 dark:bg-surface-700 rounded-lg text-surface-700 dark:text-surface-300 font-medium hover:bg-surface-300 dark:hover:bg-surface-600 transition-colors"
                    onClick={() => setShowNamePrompt(false)}
                    disabled={isStarting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`flex-1 px-4 py-3 ${selectedDisaster.className} rounded-lg text-white font-medium hover:opacity-90 transition-colors flex items-center justify-center gap-2`}
                    disabled={isStarting}
                  >
                    {isStarting ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Preparing...</span>
                      </>
                    ) : (
                      <>
                        <span>Start Quiz</span>
                        <ApperIcon name="ArrowRight" className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainFeature;