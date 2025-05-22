import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuizQuestion = ({ question, options, onAnswer, questionNumber, totalQuestions, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    setShowFeedback(true);
    setTimeout(() => {      
      onAnswer(index);      
      setShowFeedback(false);
      setSelectedOption(null);
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="mb-6">
        <AnimatePresence>
        {showFeedback && (
          <motion.div
            className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className={`p-10 rounded-xl text-white text-center ${
                selectedOption === correctAnswer 
                  ? 'bg-green-500/90' 
                  : 'bg-red-500/90'
              }`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 15 }}
            >
              <motion.div 
                className="text-6xl mb-4"
                initial={{ rotateY: 180 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.5 }}
              >
                {selectedOption === correctAnswer ? '😎' : '💀'}
              </motion.div>
              <h2 className="text-4xl font-bold">
                {selectedOption === correctAnswer ? "YOU'RE ALIVE!" : "YOU'RE DEAD!"}
              </h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
        <div className="mb-4 relative z-10">
          <div className="text-sm font-medium text-surface-500 dark:text-surface-400 mb-2">
              Question {questionNumber} of {totalQuestions}
          </div>
          <span className="text-sm font-medium text-surface-500 dark:text-surface-400">
            {Math.round((questionNumber / totalQuestions) * 100)}% Complete
          </span>
          <div className="w-full bg-surface-200 dark:bg-surface-700 rounded-full h-2.5 mt-2">
            <div 
              className="bg-secondary h-2.5 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            ></div>
           </div>
        </div>
      <h3 className="text-xl font-bold mb-6">{question}</h3>
      
      <div className="space-y-3">
        {options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => handleOptionSelect(index)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
              selectedOption === index 
                ? 'border-secondary bg-secondary/10 dark:bg-secondary/20' 
                : 'border-surface-200 dark:border-surface-700 hover:border-secondary hover:bg-surface-100 dark:hover:bg-surface-800'
            }`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            disabled={selectedOption !== null}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuizQuestion;