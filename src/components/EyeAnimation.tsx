import React, { useEffect, useState } from 'react';

interface EyeAnimationProps {
  onComplete: () => void;
}

const EyeAnimation: React.FC<EyeAnimationProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'closed' | 'opening' | 'open' | 'zooming' | 'complete'>('closed');

  useEffect(() => {
    const timeline = [
      { stage: 'opening', delay: 500 },
      { stage: 'open', delay: 1000 },
      { stage: 'zooming', delay: 500 },
      { stage: 'complete', delay: 1000 }
    ];

    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const runTimeline = () => {
      if (currentIndex < timeline.length) {
        timeoutId = setTimeout(() => {
          setStage(timeline[currentIndex].stage);
          currentIndex++;
          runTimeline();
        }, timeline[currentIndex - 1]?.delay || 0);
      } else {
        setTimeout(onComplete, 300);
      }
    };

    // Start the timeline
    timeoutId = setTimeout(() => {
      currentIndex = 0;
      runTimeline();
    }, 100);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
      stage === 'complete' ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Eye Container */}
      <div className="relative w-80 h-48 overflow-hidden">
        {/* Eye Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-white to-pink-100 rounded-full transform scale-x-150"></div>
        
        {/* Upper Eyelid */}
        <div 
          className={`absolute top-0 left-0 right-0 bg-gradient-to-b from-pink-200 to-pink-300 rounded-b-full transition-all duration-1000 ease-out ${
            stage === 'closed' ? 'h-full' : stage === 'opening' ? 'h-1/2' : 'h-0'
          }`}
          style={{
            boxShadow: 'inset 0 -10px 20px rgba(0,0,0,0.1)'
          }}
        ></div>
        
        {/* Lower Eyelid */}
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-200 to-pink-300 rounded-t-full transition-all duration-1000 ease-out ${
            stage === 'closed' ? 'h-full' : stage === 'opening' ? 'h-1/2' : 'h-0'
          }`}
          style={{
            boxShadow: 'inset 0 10px 20px rgba(0,0,0,0.1)'
          }}
        ></div>

        {/* Iris and Pupil */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
          stage === 'closed' || stage === 'opening' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}>
          {/* Iris */}
          <div className="w-32 h-32 rounded-full bg-gradient-radial from-blue-400 via-blue-600 to-blue-900 relative overflow-hidden">
            {/* Iris Patterns */}
            <div className="absolute inset-2 rounded-full bg-gradient-radial from-transparent via-blue-500/30 to-blue-800/50"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-radial from-transparent via-blue-400/20 to-blue-700/40"></div>
            
            {/* Pupil */}
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full transition-all duration-1000 ${
              stage === 'zooming' ? 'w-96 h-96' : 'w-12 h-12'
            }`}>
              {/* Zoom Effect */}
              <div className={`absolute inset-0 bg-gradient-radial from-transparent to-black rounded-full transition-all duration-1000 ${
                stage === 'zooming' ? 'scale-150 opacity-100' : 'scale-100 opacity-0'
              }`}></div>
            </div>

            {/* Light Reflection */}
            <div className="absolute top-4 left-8 w-4 h-6 bg-white/80 rounded-full blur-sm"></div>
            <div className="absolute top-6 right-10 w-2 h-3 bg-white/60 rounded-full blur-sm"></div>
          </div>
        </div>

        {/* Eyelashes */}
        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          stage === 'closed' ? 'opacity-100' : 'opacity-0'
        }`}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 bg-gray-800 origin-bottom"
              style={{
                height: `${Math.random() * 20 + 15}px`,
                left: `${(i - 6) * 8}px`,
                transform: `rotate(${(i - 6) * 5}deg)`,
                borderRadius: '2px'
              }}
            ></div>
          ))}
        </div>

        {/* Blur Overlay for Transition */}
        <div className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-all duration-500 ${
          stage === 'zooming' ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>

      {/* Loading Text */}
      <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white text-center transition-all duration-500 ${
        stage === 'complete' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}>
        <div className="text-lg font-light tracking-wider">
          {stage === 'closed' && 'Awakening...'}
          {stage === 'opening' && 'Opening...'}
          {stage === 'open' && 'Focusing...'}
          {stage === 'zooming' && 'Entering...'}
        </div>
      </div>
    </div>
  );
};

export default EyeAnimation;