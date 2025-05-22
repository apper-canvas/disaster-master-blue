import { motion } from 'framer-motion';
import { useBackground } from '../contexts/BackgroundContext';

const HomeTheme = () => {
  const { themeData } = useBackground();
  const homeTheme = themeData.home;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dark emergency gradient base */}
      <div className="absolute inset-0 bg-emergency-gradient opacity-80 dark:opacity-100"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20" 
           style={{
             backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
           }}
      ></div>
      
      {/* Emergency warning elements */}
      <div className="absolute top-0 left-0 w-full h-12 bg-emergency-red opacity-20 dark:opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-emergency-red opacity-20 dark:opacity-30"></div>
      
      {/* Alert accent elements */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-emergency-bright opacity-5 dark:opacity-10 filter blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-emergency-bright opacity-5 dark:opacity-10 filter blur-xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      />
    </div>
  );
};

export default HomeTheme;