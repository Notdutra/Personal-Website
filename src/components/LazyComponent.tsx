'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyComponentProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  sectionId?: string;
}

export default function LazyComponent({
  children,
  className = '',
  threshold = 0.1,
  sectionId,
}: LazyComponentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);
  const hasNavigationOccurred = useRef(false);

  // Update ref when state changes
  useEffect(() => {
    isVisibleRef.current = isVisible;
  }, [isVisible]);

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

  // Force load component if someone tries to navigate to it or on first navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');

      // If this is the first navigation attempt, load ALL sections
      if (!hasNavigationOccurred.current && hash) {
        hasNavigationOccurred.current = true;
        // Force load this component and trigger loading of others
        setIsVisible(true);

        // Dispatch a custom event to tell other LazyComponents to load
        window.dispatchEvent(new CustomEvent('forceLoadAllSections'));
        return;
      }

      // Normal hash-based loading
      if (sectionId && hash === sectionId && !isVisibleRef.current) {
        console.log(`LazyComponent: Force loading section ${sectionId}`);
        setIsVisible(true);
      }
    };

    const handleForceLoadAll = () => {
      setIsVisible(true);
    };

    // Check initial hash immediately
    handleHashChange();

    // Listen for various navigation events
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    window.addEventListener('forceLoadAllSections', handleForceLoadAll);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
      window.removeEventListener('forceLoadAllSections', handleForceLoadAll);
    };
  }, [sectionId]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : <div className="min-h-screen" />}
    </div>
  );
}
