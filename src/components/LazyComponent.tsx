'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyComponentProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export default function LazyComponent({
  children,
  className = '',
  threshold = 0.1,
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

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : <div className="min-h-screen" />}
    </div>
  );
}
