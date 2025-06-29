'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import SectionCard from '../components/about/SectionCard';
import { sections } from '../data/about';

const About = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [desktopMode, setDesktopMode] = useState(true); // Default to desktop
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side flag
    setIsClient(true);

    // Check if desktop and set initial state
    const checkDesktop = () => window.innerWidth >= 768;
    const desktop = checkDesktop();
    setDesktopMode(desktop);
    setExpandedIndex(desktop ? null : []);

    const handleResize = () => {
      const desktop = checkDesktop();
      setDesktopMode(desktop);
      setExpandedIndex((prev) => {
        if (desktop) {
          if (Array.isArray(prev)) return prev.length > 0 ? prev[0] : null;
          return prev;
        } else {
          return prev === null ? [] : Array.isArray(prev) ? prev : [prev];
        }
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Don't render interactive content until client-side
  if (!isClient) {
    return (
      <section id="about" className="relative">
        <div className="flexColumn">
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
            <h1 className="heading-primary">About Me</h1>
            <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
              My journey from software engineering student to full-stack developer
            </p>
          </div>
        </div>
      </section>
    );
  }

  const handleCardClick = (index) => {
    if (desktopMode) {
      setExpandedIndex((prev) => (prev === index ? null : index));
    } else {
      setExpandedIndex((prev) => {
        if (prev.includes(index)) {
          return prev.filter((i) => i !== index);
        } else {
          return [...prev, index];
        }
      });
    }
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (
        event.key === 'Escape' &&
        ((desktopMode && expandedIndex !== null) || (!desktopMode && expandedIndex.length > 0))
      ) {
        setExpandedIndex(desktopMode ? null : []);
      }
    };
    if ((desktopMode && expandedIndex !== null) || (!desktopMode && expandedIndex.length > 0)) {
      document.addEventListener('keydown', handleEscKey);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [expandedIndex, desktopMode]);

  return (
    <section id="about" className="relative">
      <div className="flexColumn">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="heading-primary"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg leading-relaxed text-gray-300 md:text-xl"
          >
            My journey from software engineering student to full-stack developer
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mx-auto mt-4 w-full max-w-5xl overflow-visible md:mt-8"
        >
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
            <AnimatePresence initial={false} mode="sync">
              {sections.map((section, index) => {
                const isLeftColumn = index % 2 === 0;
                const rowIndex = Math.floor(index / 2);
                const expanded = desktopMode
                  ? expandedIndex === index
                  : expandedIndex.includes(index);
                return (
                  <motion.div
                    key={section.title}
                    initial={false}
                    animate={{
                      opacity: 1,
                      filter: 'none',
                      scale: 1,
                    }}
                    transition={{
                      duration: expandedIndex === null ? 0.4 : 0.2,
                      ease: 'easeOut',
                    }}
                    className={`relative flex h-auto ${expanded ? 'z-30' : 'overflow-hidden'}`}
                  >
                    <SectionCard
                      section={section}
                      index={index}
                      isExpanded={expanded}
                      onClick={handleCardClick}
                      position={isLeftColumn ? 'left' : 'right'}
                      rowIndex={rowIndex}
                      isLeftColumn={isLeftColumn}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
