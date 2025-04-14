import { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  // Dynamically determine available categories from projects
  const availableCategories = useMemo(() => {
    if (projects.length === 0) return [];

    // Always include "All" if there are any projects
    const categories = ['All'];

    // Add unique categories from projects
    const projectCategories = [
      ...new Set(projects.map((project) => project.category)),
    ];
    categories.push(...projectCategories);

    return categories;
  }, []);

  // Set active category, defaulting to "All" if available
  const [activeCategory, setActiveCategory] = useState(
    availableCategories.includes('All') ? 'All' : availableCategories[0] || ''
  );

  // Now filter projects AFTER activeCategory is defined
  const filteredProjects =
    activeCategory === '' ?
      projects // If no category is selected, show all projects
    : activeCategory === 'All' ? projects
    : projects.filter((project) => project.category === activeCategory);

  if (projects.length === 0) {
    return (
      <section
        id="projects"
        className="py-16 text-center">
        <h3 className="mb-4 font-bold text-gray-300 text-3xl">
          Coming Soon! 🚀
        </h3>
        <p className="mx-auto max-w-2xl text-gray-400 text-xl">
          I&apos;m currently working on adding my portfolio projects. Check back
          soon to see what I&apos;ve been building!
        </p>
      </section>
    );
  }
  return (
    <section id="projects">
      <div className="py-20">
        <div className="mx-auto px-4 container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-bold text-white text-4xl md:text-5xl">
              My Projects
            </h1>
            <p className="text-gray-300 text-xl">
              A collection of projects I&apos;ve worked on, showcasing my skills
              and interests.
            </p>
          </motion.div>
        </div>
      </div>
      {/* Only show filter if there are multiple categories */}
      {availableCategories.length > 1 && (
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {availableCategories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category ?
                    'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}>
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      )}
      <div className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto px-4 sm:px-6 container">
          <AnimatePresence mode="wait">
            <motion.div
              key="projects-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="gap-6 sm:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
                  {project.image && (
                    <div className="w-full aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="mb-2 font-semibold text-xl">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary dark:hover:text-primary dark:text-gray-300 transition-colors duration-200"
                          aria-label="GitHub Repository">
                          <FiGithub size={20} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary dark:hover:text-primary dark:text-gray-300 transition-colors duration-200"
                          aria-label="Live Demo">
                          <FiExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
