import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  // This could be expanded to load from a data file or API
  const projects = [
    {
      id: 1,
      title: "Coming Soon",
      description:
        "Personal projects will be showcased here. Stay tuned for updates!",
      tags: ["In Progress"],
      emoji: "🚀",
    },
  ];

  return (
    <section className="section-container">
      <div className="main-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="heading-secondary"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
