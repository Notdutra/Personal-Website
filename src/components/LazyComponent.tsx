'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyComponentProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  sectionId?: string; // Add section ID for navigation support
}

export default function LazyComponent({
  children,
  className = '',
  threshold = 0.1,
  sectionId,
}: LazyComponentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  // Force load component if someone tries to navigate to it
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (sectionId && hash === sectionId && !isVisible) {
        setIsVisible(true);
      }
    };

    // Check initial hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [sectionId, isVisible]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : <div className="min-h-screen" />}
    </div>
  );
}
