import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import EyeAnimation from './components/EyeAnimation';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  const [showEyeAnimation, setShowEyeAnimation] = useState(true);

  const handleAnimationComplete = () => {
    setShowEyeAnimation(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        {showEyeAnimation && <EyeAnimation onComplete={handleAnimationComplete} />}
        
        {!showEyeAnimation && (
          <>
            <Navigation />
            <main>
              <Hero />
              <Features />
            </main>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;