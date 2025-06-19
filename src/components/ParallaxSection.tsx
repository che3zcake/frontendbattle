import React from 'react';
import { useParallax } from '../hooks/useParallax';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  className = '', 
  speed = 0.5 
}) => {
  const offset = useParallax(speed);

  return (
    <div 
      className={className}
      style={{ 
        transform: `translateY(${offset}px)`,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;