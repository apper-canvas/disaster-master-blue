import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useBackground } from '../contexts/BackgroundContext';
import { toast } from 'react-toastify';
import ApperIcon from './ApperIcon';

const disasterTypes = [
  {
    id: 'earthquake',
    name: 'Earthquake',
    icon: 'Mountain',
    description: 'Test your knowledge about earthquake safety and preparedness.',
    className: 'disaster-earthquake',
    bgClass: 'bg-disaster-earthquake'
  },
  {
    id: 'fire',
    name: 'Fire',
    icon: 'Flame',
    description: 'Learn how to prevent and respond to fires in various settings.',
    className: 'disaster-fire',
    bgClass: 'bg-disaster-fire'
  },
  {
    id: 'flood',
    name: 'Flood',
    icon: 'Droplets',
    description: 'Discover critical flood safety measures and evacuation procedures.',
    className: 'disaster-flood',
    bgClass: 'bg-disaster-flood'
  },
  {
    id: 'zombie',
    name: 'Zombie Outbreak',
    icon: 'Skull',
    description: 'A fun yet educational take on survival and emergency preparedness.',
    className: 'disaster-zombie',
    bgClass: 'bg-disaster-zombie'
  },
  {
    id: 'alien',
    name: 'Alien Invasion',
    icon: 'Zap',
    description: 'Prepare for the unexpected with this cosmic disaster scenario.',
    className: 'disaster-alien',
    bgClass: 'bg-disaster-alien'
  }
];

const MainFeature = () => {
  const [hoveredDisaster, setHoveredDisaster] = useState(null);
  const { changeBackground } = useBackground();
  const navigate = useNavigate();
  
  const handleDisasterClick = (disasterId, disasterName) => {
    // Change the background based on the selected disaster
    changeBackground(disasterId);
    
    toast.info(`Starting ${disasterName} challenge!`);
    
    // Navigate to quiz page with the selected disaster type after a short delay
    setTimeout(() => {
      navigate(`/quiz?type=${encodeURIComponent(disasterId)}`);
    }, 300);
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
        {/* AnimatePresence not needed here as we're not animating components in/out of existence */}
          {disasterTypes.map((disaster, index) => (
            <motion.div
              key={disaster.id}
              className={`disaster-card ${disaster.className} cursor-pointer p-6 sm:p-8 text-white relative`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleDisasterClick(disaster.id, disaster.name)}
              onMouseEnter={() => setHoveredDisaster(disaster.id)}
              onMouseLeave={() => setHoveredDisaster(null)}
              style={{
                backgroundImage: `url('/images/${disaster.id}-card.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Semi-transparent overlay for better text readability */}
              <div className={`absolute inset-0 ${disaster.className} opacity-70 rounded-2xl`}></div>
              
              <div className="relative z-10">
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
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default MainFeature;