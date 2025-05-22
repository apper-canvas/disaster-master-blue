import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { BackgroundProvider } from './contexts/BackgroundContext';

// Mock Quiz Page component until we build the real one
const QuizPage = () => {
  const params = new URLSearchParams(window.location.search);
  const disasterType = params.get('type');
  
  return (
    <div className="container relative z-10 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Disaster Quiz: {disasterType}</h1>
      <p className="text-lg">Quiz questions for {disasterType} scenario will appear here.</p>
      <a href="/" className="inline-block mt-6 bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary-dark transition">
        Back to Home
      </a>
    </div>
  );
};

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