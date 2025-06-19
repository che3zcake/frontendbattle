import { useEffect, useState, useCallback } from 'react';

export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    const scrolled = window.pageYOffset;
    setOffset(scrolled * speed);
  }, [speed]);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      handleScroll();
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    return () => window.removeEventListener('scroll', requestTick);
  }, [handleScroll]);

  return offset;
};

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold,
        rootMargin: '50px'
      }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return { ref: setRef, isVisible };
};