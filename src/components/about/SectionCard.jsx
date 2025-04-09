import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const SectionCard = ({ section, expanded, toggleExpand, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, borderColor: "rgba(56, 189, 248, 0.5)" }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div
        className="flex items-center justify-between mb-4 cursor-pointer"
        onClick={() => toggleExpand(section.title)}>
        <div className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-primary/20 p-3 rounded-full mr-4 text-primary">
            {section.icon}
          </motion.div>
          <div>
            <h2 className="text-xl font-semibold">{section.title}</h2>
            {section.year && (
              <p className="text-sm text-gray-400">{section.year}</p>
            )}
          </div>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}>
          <FiChevronDown className="text-gray-400" />
        </motion.div>
      </div>

      <p className="text-gray-300 mb-3">{section.content}</p>

      {expanded ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-300 mt-4 border-t border-white/10 pt-4">
          <p>{section.fullText}</p>
        </motion.div>
      ) : (
        <p className="text-gray-400 text-sm">{section.details}</p>
      )}
    </motion.div>
  );
};

export default SectionCard;
