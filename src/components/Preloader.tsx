import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center">
        <div className="relative mb-8">
          <Sparkles className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto animate-pulse" />
          <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full bg-blue-200 dark:bg-blue-800 animate-ping opacity-20"></div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Loading Experience</h2>
        
        <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="mt-4 text-gray-600 dark:text-gray-400">{Math.round(progress)}%</p>
      </div>
    </div>
  );
};

export default Preloader;