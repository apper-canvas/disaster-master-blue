import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import QuizPage from './pages/QuizPage';
import { BackgroundProvider } from './contexts/BackgroundContext';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <BackgroundProvider>
      <div className={isDarkMode ? 'dark' : ''}>
        <Router>
          <div className="min-h-screen relative overflow-hidden">
            <div className="fixed top-4 right-4 z-50">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-surface-200 dark:bg-surface-700"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? '🌞' : '🌙'}
              </button>
            </div>
            
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </div>
        </Router>
        
        <div className="fixed inset-0 z-0 bg-surface-50 dark:bg-surface-900 transition-opacity duration-500">
          {/* This is the base background layer */}
          {/* Disaster-specific backgrounds are applied via the BackgroundContext */}
        </div>
      </div>
      
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? "dark" : "light"}
      />
    </BackgroundProvider>
  );
}

export default App;