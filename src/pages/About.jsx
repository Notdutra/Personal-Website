import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import SectionCard from '../components/about/SectionCard';
import { sections } from '../data/about';

const About = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && expandedIndex !== null) {
        setExpandedIndex(null);
      }
    };

    if (expandedIndex !== null) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [expandedIndex]);

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

                return (
                  <motion.div
                    key={section.title}
                    initial={false}
                    animate={{
                      opacity: expandedIndex !== null && expandedIndex !== index ? 0.35 : 1,
                      filter:
                        expandedIndex !== null && expandedIndex !== index ? 'blur(1px)' : 'none',
                      scale: expandedIndex !== null && expandedIndex !== index ? 1 : 1,
                    }}
                    transition={{
                      duration: expandedIndex === null ? 0.4 : 0.2,
                      ease: 'easeOut',
                    }}
                    className={`relative flex h-auto ${expandedIndex === index ? 'z-30' : 'overflow-hidden'}`}
                  >
                    <SectionCard
                      section={section}
                      index={index}
                      isExpanded={expandedIndex === index}
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
