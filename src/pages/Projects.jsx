import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import RippleEffect from "../effects/RippleEffect";
import MouseGlow from "../effects/MouseGlow";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "frontend", "backend", "fullstack"];

  // Temporarily set projects to an empty array to display "Coming Soon"
  const projects = [];

  const filteredProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.category === activeFilter
  );

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <MouseGlow />
        <RippleEffect />
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                My Projects
              </h1>
              <p className="text-xl text-gray-300">
                Explore my portfolio of web applications and software projects.
                Each project represents a unique challenge and learning
                experience.
              </p>
            </motion.div>
          </section>

          {/* Projects Section */}
          <section className="py-20">
            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeFilter === filter
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {project.title}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-white/20 text-white rounded-full text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {project.description}
                        </p>
                        <div className="flex gap-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200"
                          >
                            <FiGithub />
                            <span>Code</span>
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200"
                          >
                            <FiExternalLink />
                            <span>Demo</span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-full text-center text-gray-600 dark:text-gray-300 text-xl"
                  >
                    Coming Soon! 🚀
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;
