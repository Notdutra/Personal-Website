'use client';

import { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const availableCategories = useMemo(() => {
    if (projects.length <= 1) return [];

    const categories = ['All'];
    const projectCategories = [...new Set(projects.map((project) => project.category))];
    categories.push(...projectCategories);

    return categories;
  }, []);

  const [activeCategory, setActiveCategory] = useState(
    availableCategories.includes('All') ? 'All' : availableCategories[0] || '',
  );

  const filteredProjects =
    activeCategory === ''
      ? projects
      : activeCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === activeCategory);

  if (projects.length === 0) {
    return (
      <section id="projects">
        <div className="flexColumn">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-8 max-w-3xl text-center sm:mb-12"
          >
            <h1 className="section-title">Selected projects are on the way.</h1>
            <span className="mb-4 inline-block rounded-full border border-sky-300/20 px-4 py-1 text-sm font-medium text-sky-200">
              Coming Soon! 🚀
            </span>
            <p className="section-copy">
              I&apos;m currently working on adding my portfolio projects. Check back soon to see
              what I&apos;ve been building!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }
  return (
    <section id="projects">
      <div className="flexColumn">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="section-intro"
        >
          <span className="section-kicker">Projects</span>
          <h1 className="section-title">Work that reflects how I think about product and execution.</h1>
          <p className="section-copy">
            A collection of shipped ideas, from focused tools to broader product concepts.
          </p>
        </motion.div>
        {availableCategories.length > 1 && (
          <div className="mb-12">
            <div className="glass-panel mx-auto flex w-fit flex-wrap justify-center gap-3 p-2">
              {availableCategories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-sky-400/15 text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        )}
        <div className="w-full">
          <div className="container mx-auto px-0 sm:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key="projects-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-sky-300/24"
                  >
                    {project.image && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full focus:outline-none"
                        tabIndex={0}
                        aria-label={`Open ${project.title} live site`}
                      >
                        <div className="flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_45%),linear-gradient(180deg,#102238,#081321)] p-8">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-full max-h-48 w-full cursor-pointer select-none rounded-2xl object-contain"
                            draggable={false}
                          />
                        </div>
                      </a>
                    )}
                    <div className="p-6">
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        <span className="rounded-full border border-sky-300/16 bg-sky-300/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
                          {project.category}
                        </span>
                      </div>
                      <p className="mb-5 leading-7 text-slate-300">{project.description}</p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
                          >
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
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition duration-200 hover:border-sky-300/24 hover:bg-white/10 hover:text-white"
                            aria-label="GitHub Repository"
                          >
                            <FiGithub size={20} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition duration-200 hover:border-sky-300/24 hover:bg-white/10 hover:text-white"
                            aria-label="Live Demo"
                          >
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
      </div>
    </section>
  );
};

export default Projects;
