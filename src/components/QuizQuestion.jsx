import { motion } from 'framer-motion';
import { useState } from 'react';

const QuizQuestion = ({ question, options, onAnswer, questionNumber, totalQuestions }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    // Short delay to show the selection before moving to next question
    setTimeout(() => {
      onAnswer(index);
      setSelectedOption(null); // Reset for next question
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
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-surface-500 dark:text-surface-400">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-surface-500 dark:text-surface-400">
            {Math.round((questionNumber / totalQuestions) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-surface-200 dark:bg-surface-700 rounded-full h-2.5">
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