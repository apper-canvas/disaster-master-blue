import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ApperIcon from '../components/ApperIcon';
import { useBackground } from '../contexts/BackgroundContext';
import QuizQuestion from '../components/QuizQuestion';
import quizData from '../data/QuizData';
import { toast } from 'react-toastify';

const QuizPage = () => {
  const navigate = useNavigate();
  const { currentBackground } = useBackground();
  
  // Get disaster type from URL query params
  const params = new URLSearchParams(window.location.search);
  const disasterType = params.get('type');
  
  // Quiz state
  const [quizState, setQuizState] = useState('start'); // start, question, results
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  
  // If no disaster type is specified, redirect to home
  useEffect(() => {
    if (!disasterType) {
      navigate('/', { replace: true });
      return;
    }
    
    // Reset quiz when disaster type changes
    setQuizState('start');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
  }, [disasterType, navigate]);
  
  // Get questions for the current disaster type
  const questions = quizData[disasterType] || [];
  
  // Calculate score when all questions are answered
  useEffect(() => {
    if (userAnswers.length === questions.length && questions.length > 0) {
      calculateScore();
    }
  }, [userAnswers]);
  
  // Format disaster name for display
  const formatDisasterName = (id) => {
    if (!id) return '';
    return id.charAt(0).toUpperCase() + id.slice(1);
  };
  
  // Start the quiz
  const startQuiz = () => {
    setQuizState('question');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    toast.info("Quiz started! Good luck!");
  };
  
  // Handle answer selection
  const handleAnswer = (selectedOptionIndex) => {
    const newAnswers = [...userAnswers, selectedOptionIndex];
    setUserAnswers(newAnswers);
    
    // Move to next question or end quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizState('results');
    }
  };
  
  // Calculate final score
  const calculateScore = () => {
    let newScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    
    // Show toast based on score
    const percentage = (newScore / questions.length) * 100;
    if (percentage >= 80) {
      toast.success("Great job! You're well prepared!");
    } else if (percentage >= 60) {
      toast.info("Good effort! Keep learning about disaster preparedness.");
    } else {
      toast.warning("You might need more preparation for this disaster.");
    }
  };
  
  // Animation variants
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
  
  // Get the appropriate message based on score
  const getResultMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) {
      return "Excellent! You're well prepared for this disaster scenario.";
    } else if (percentage >= 60) {
      return "Good job! You have a solid understanding of disaster preparedness.";
    } else {
      return "There's room for improvement. Consider learning more about disaster preparedness.";
    }
  };
  
  return (
    <motion.div
      className="min-h-screen relative z-10 py-8 px-4 sm:px-6 lg:px-8"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="relative z-10 max-w-4xl mx-auto bg-white/90 dark:bg-surface-800/90 rounded-xl p-6 sm:p-8 shadow-lg backdrop-blur-sm min-h-[500px]">
        <div className="flex items-center mb-6">
          <motion.div 
            className={`p-3 rounded-full mr-4 disaster-${disasterType}`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 12 }}
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
        
        <AnimatePresence mode="wait">
          {quizState === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-8"
            >
              <h2 className="text-xl font-semibold mb-4">Welcome to the {formatDisasterName(disasterType)} Challenge!</h2>
              <p className="text-lg mb-4">
                Test your knowledge and preparedness for dealing with a {formatDisasterName(disasterType.toLowerCase())} scenario.
              </p>
              <p className="text-md text-surface-600 dark:text-surface-300 mb-6">
                Answer the following {questions.length} questions to see how prepared you would be in a real emergency.
                Good luck!
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  onClick={startQuiz}
                  className={`inline-flex items-center gap-2 px-6 py-3 disaster-${disasterType} rounded-lg text-white hover:opacity-90 transition-colors text-lg font-medium`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ApperIcon name="Play" className="h-5 w-5" />
                  Start Quiz
                </motion.button>
                
                <motion.button 
                  onClick={() => navigate('/')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-surface-200 dark:bg-surface-700 rounded-lg hover:bg-surface-300 dark:hover:bg-surface-600 transition-colors text-lg font-medium"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ApperIcon name="ArrowLeft" className="h-5 w-5" />
                  Back to Home
                </motion.button>
              </div>
            </motion.div>
          )}
          
          {quizState === 'question' && questions.length > 0 && (
            <motion.div
              key="question"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-8"
            >
              <QuizQuestion
                question={questions[currentQuestionIndex].question}
                options={questions[currentQuestionIndex].options}
                onAnswer={handleAnswer}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={questions.length}
              />
            </motion.div>
          )}
          
          {quizState === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Quiz Results</h2>
              
              <div className="text-center mb-8">
                <div className="text-5xl font-bold mb-2 text-secondary-dark dark:text-secondary-light">
                  {score} / {questions.length}
                </div>
                <p className="text-lg text-surface-600 dark:text-surface-300">
                  {getResultMessage()}
                </p>
              </div>
              
              <div className="space-y-6 mb-8">
                {questions.map((q, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${userAnswers[index] === q.correctAnswer ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20'}`}>
                    <h4 className="font-medium mb-2">{index + 1}. {q.question}</h4>
                    <p className="text-sm mb-1"><strong>Your answer:</strong> {q.options[userAnswers[index]]}</p>
                    <p className="text-sm mb-1"><strong>Correct answer:</strong> {q.options[q.correctAnswer]}</p>
                    <p className="text-sm text-surface-600 dark:text-surface-400 mt-2">{q.explanation}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <button onClick={startQuiz} className={`inline-flex items-center gap-2 px-6 py-3 disaster-${disasterType} rounded-lg text-white hover:opacity-90 transition-colors`}>
                  <ApperIcon name="RefreshCw" className="h-5 w-5" />
                  Try Again
                </button>
                <button onClick={() => navigate('/')} className="inline-flex items-center gap-2 px-6 py-3 bg-surface-200 dark:bg-surface-700 rounded-lg hover:bg-surface-300 dark:hover:bg-surface-600 transition-colors">
                  <ApperIcon name="Home" className="h-5 w-5" />
                  Back to Home
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default QuizPage;