import { motion } from "framer-motion";

const ProjectsFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsFilter;
