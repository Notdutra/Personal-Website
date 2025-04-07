import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({ activeCategory = "All" }) => {
  // Filter projects based on the active category
  const filteredProjects =
    activeCategory === ""
      ? projects // If no category is selected, show all projects
      : activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsGrid;
