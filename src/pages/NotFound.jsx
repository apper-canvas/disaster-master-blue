import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ApperIcon from '../components/ApperIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-surface-50 dark:bg-surface-900">
      <motion.div 
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 inline-block p-4 bg-surface-100 dark:bg-surface-800 rounded-full">
          <ApperIcon name="AlertTriangle" className="h-12 w-12 text-primary dark:text-primary-light" />
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-surface-900 dark:text-surface-50">
          Page Not Found
        </h1>
        
        <p className="text-surface-600 dark:text-surface-300 mb-8">
          Looks like you've wandered into an unexpected disaster zone! The page you're looking for doesn't exist.
        </p>
        
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors"
        >
          <ApperIcon name="Home" className="h-5 w-5" />
          Return to Safety
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;