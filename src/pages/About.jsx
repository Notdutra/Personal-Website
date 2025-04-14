import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiBook, FiBriefcase, FiCode, FiX } from 'react-icons/fi';

const SectionCard = ({ section, index, isExpanded, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        zIndex: isExpanded ? 40 : 0,
      }}
      transition={{
        duration: 0.3,
        delay: !isExpanded ? index * 0.1 : 0,
      }}
      onClick={() => onClick(index)}
      className={`
        relative bg-[#1a1f2b]/80 shadow-xl backdrop-blur-sm p-5 sm:p-7 
        border border-white/10 hover:border-white/20 rounded-2xl 
        transition-all duration-500 cursor-pointer
        ${isExpanded ? 'fixed inset-4 m-auto max-w-5xl h-[calc(100vh-2rem)]' : 'h-full'}
      `}
      style={{
        transformOrigin: 'center',
      }}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start">
          <span className="bg-teal-500/20 mr-4 p-3 rounded-full text-teal-400">
            {section.icon}
          </span>
          <div>
            <h2 className="mb-1 font-semibold text-white text-lg sm:text-xl">
              {section.title}
            </h2>
            {section.year && (
              <p className="mb-2 text-gray-300 text-xs sm:text-sm">
                {section.year}
              </p>
            )}
            <p className="text-gray-200">{section.content}</p>
          </div>
        </div>
        {isExpanded && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick(null);
            }}
            className="hover:bg-white/5 p-2 rounded-full transition-colors">
            <FiX className="text-gray-400 hover:text-white" />
          </button>
        )}
      </div>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 pt-4 border-white/10 border-t">
          <p className="mb-4 text-gray-200">{section.details}</p>
          <p className="text-gray-200 leading-relaxed">{section.fullText}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

const About = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const sections = [
    {
      icon: <FiBook />,
      title: 'Education',
      content:
        'Software Engineering at PUCRS in Brazil, focusing on discrete mathematics, algorithms, and computational theory.',
      details:
        'My education built a strong analytical foundation in software fundamentals and modern development practices.',
      fullText: `I started my journey in software engineering at PUCRS in Brazil, diving into discrete mathematics, calculus, algorithms, databases, logic and computational theory. These studies built a strong analytical mindset and gave me a deep understanding of how software works at a fundamental level. Along the way, I explored software development methodologies, version control, and programming paradigms, laying a solid foundation in both theory and practice.`,
    },
    {
      icon: <FiBriefcase />,
      title: 'Dell Technologies',
      year: '2020-2021',
      content:
        'Worked with C#, .NET, Dart, Flutter, and Python on automation tools and enterprise applications.',
      details:
        'Later joined a Salesforce team, working with Apex on internal business solutions.',
      fullText: `During my internship at Dell Technologies, I started by contributing to small projects using C#, .NET, Dart, Flutter, and Python. I focused on building tools for automation and text analysis that streamlined workflows and provided valuable insights into enterprise application development. This experience helped me navigate complex codebases and sharpen my documentation practices. Later, I joined a team primarily working with Salesforce and Apex, contributing to robust internal business solutions.`,
    },
    {
      icon: <FiBriefcase />,
      title: 'Panvel',
      year: '2022-2023',
      content:
        'Contributed to an online marketplace with Java and Spring Boot, developing RESTful APIs.',
      details:
        'Focused on MVC architecture, creating controllers, services, and repositories with clean separation of concerns.',
      fullText: `At Panvel, I contributed to the online marketplace platform using Java and Spring Boot. My tasks included developing RESTful endpoints for product search and filtering, enhancing the user experience. Working within the MVC architecture, I collaborated on creating controllers to handle HTTP requests, services for business logic, and repositories for data access, ensuring a clean separation of concerns. Additionally, I engaged in cross-functional collaborations, coordinating with various teams to integrate services effectively. Writing unit tests for my code was a key part of my workflow, helping maintain code quality and reliability.`,
    },
    {
      icon: <FiCode />,
      title: 'Current Focus',
      content:
        'Expanding skills in full-stack development with HTML, CSS, JavaScript, and React.',
      details:
        'Building a foundation for advanced features like authentication, database integration, and deployment.',
      fullText: `Since then, I've been actively expanding my skills in full-stack web development. I've built a solid foundation in core web technologies like HTML, CSS, and JavaScript, and I'm diving deeper into modern frameworks like React. My personal website project serves as a dynamic space to showcase my progress while I explore both front-end and back-end technologies. I'm focused on creating a seamless user experience and laying the groundwork for future features like user authentication, database integration, and deployment. As I continue to learn and grow, I'm excited to tackle more complex challenges, including cloud services and artificial intelligence in the future.`,
    },
  ];

  return (
    <section
      id="about"
      className="relative">
      {/* Add overlay when card is expanded */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="z-30 fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setExpandedIndex(null)}
          />
        )}
      </AnimatePresence>

      <div className="flex flex-col justify-center mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-16 min-h-screen container">
        <div className="mx-auto mb-8 sm:mb-12 max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 font-bold text-white text-4xl md:text-5xl heading-responsive">
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed">
            My journey from software engineering student to full-stack developer
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-2 mx-auto w-full max-w-5xl">
          <AnimatePresence>
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                layout
                animate={{
                  scale:
                    expandedIndex !== null && expandedIndex !== index ? 0.8 : 1,
                  opacity:
                    expandedIndex !== null && expandedIndex !== index ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}>
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
