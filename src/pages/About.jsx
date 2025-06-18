import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SectionCard from '../components/about/SectionCard';
import { sections } from '../data/about';

const About = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="about">
      {/* Add overlay when card is expanded */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
            onClick={() => setExpandedIndex(null)}
          />
        )}
      </AnimatePresence>

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
          className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
        >
          <AnimatePresence>
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                layout
                animate={{
                  scale: expandedIndex !== null && expandedIndex !== index ? 0.8 : 1,
                  opacity: expandedIndex !== null && expandedIndex !== index ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <SectionCard
                  section={section}
                  index={index}
                  isExpanded={expandedIndex === index}
                  onClick={handleCardClick}
                  totalCards={sections.length}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
