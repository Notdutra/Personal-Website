import { motion } from 'framer-motion';
import { FiX, FiBook, FiBriefcase, FiCode } from 'react-icons/fi';

const iconComponents = {
  book: <FiBook />,
  briefcase: <FiBriefcase />,
  code: <FiCode />,
};

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
      className={`relative cursor-pointer rounded-2xl border border-white/10 bg-[#1a1f2b]/80 p-5 shadow-xl backdrop-blur-sm transition-all duration-500 hover:border-white/20 sm:p-7 ${isExpanded ? 'fixed inset-4 m-auto h-[calc(100vh-2rem)] max-w-5xl' : 'h-full'} `}
      style={{
        transformOrigin: 'center',
      }}
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-start">
          <span className="mr-4 rounded-full bg-teal-500/20 p-3 text-teal-400">
            {iconComponents[section.icon] || <FiCode />}
          </span>
          <div>
            <h2 className="mb-1 text-lg font-semibold text-white sm:text-xl">{section.title}</h2>
            {section.year && (
              <p className="mb-2 text-xs text-gray-300 sm:text-sm">{section.year}</p>
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
            className="rounded-full p-2 transition-colors hover:bg-white/5"
          >
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
          className="mt-4 border-t border-white/10 pt-4"
        >
          <p className="mb-4 text-gray-200">{section.details}</p>
          <p className="leading-relaxed text-gray-200">{section.fullText}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SectionCard;
