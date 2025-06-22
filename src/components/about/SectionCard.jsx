import { motion, AnimatePresence } from 'framer-motion';
import { FiBook, FiBriefcase, FiCode, FiChevronDown } from 'react-icons/fi';

const iconComponents = {
  book: <FiBook size={32} className="text-teal-400" />,
  briefcase: <FiBriefcase size={32} className="text-teal-400" />,
  code: <FiCode size={32} className="text-teal-400" />,
};

const SectionCard = ({
  section,
  index,
  isExpanded,
  onClick,
  position = 'left',
  rowIndex = 0,
  isLeftColumn = true,
}) => {
  const isTopRow = rowIndex === 0;
  const shouldExpandUp = !isTopRow;
  const shouldExpandLeft = !isLeftColumn;

  return (
    <motion.div
      layout={false}
      initial={{ opacity: 0, y: 24 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          delay: !isExpanded ? index * 0.08 : 0,
          ease: 'easeOut',
        },
      }}
      transition={{
        type: 'tween',
        duration: 0.25,
      }}
      style={{
        position: isExpanded ? 'absolute' : 'relative',
        zIndex: isExpanded ? 50 : 'auto',
        width: isExpanded ? '200%' : '100%',
        left: isExpanded ? (isLeftColumn ? '0' : 'auto') : undefined,
        right: isExpanded && !isLeftColumn ? '0' : undefined,
        top: isExpanded ? (isTopRow ? '0' : 'auto') : undefined,
        bottom: isExpanded && !isTopRow ? '0' : undefined,
        transformOrigin: isExpanded
          ? `${isTopRow ? 'top' : 'bottom'} ${isLeftColumn ? 'left' : 'right'}`
          : 'top left',
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
        minHeight: isExpanded ? '138px' : '180px',
      }}
      className={`flex grow flex-col rounded-3xl border backdrop-blur-lg${
        isExpanded
          ? 'border-teal-400/40 bg-gradient-to-br from-[#1e2332]/95 to-[#151922]/95 p-8 shadow-xl shadow-black/30'
          : 'h-auto cursor-pointer border-white/10 bg-white/5 p-6 transition-transform hover:scale-[1.03] hover:border-teal-400/40 hover:shadow-teal-900/30 md:p-8'
      }`}
      onClick={() => !isExpanded && onClick(index)}
      tabIndex={0}
      aria-label={`${isExpanded ? 'Details for' : 'Open details for'} ${section.title}`}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !isExpanded) onClick(index);
      }}
    >
      {/* Card Header */}
      <div className="flex h-auto flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center rounded-xl bg-teal-500/15 p-3 shadow-inner">
              {iconComponents[section.icon] || <FiCode size={28} className="text-teal-400" />}
            </span>
            <div className="flex flex-col">
              <h2 className="mb-1 text-xl font-bold text-white">{section.title}</h2>
              {section.year && <p className="text-sm font-medium text-teal-300">{section.year}</p>}
            </div>
          </div>

          {isExpanded ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick(null);
              }}
              className="rounded-full p-2 transition-colors"
              aria-label="Close details"
            >
              <FiChevronDown className="rotate-180 text-teal-400" size={20} />
            </button>
          ) : (
            <span className="text-teal-400">
              <FiChevronDown size={20} />
            </span>
          )}
        </div>
        <p className="leading-relaxed text-gray-200">{section.content}</p>
      </div>
      
      {isExpanded && (
        <motion.div
          key="expanded-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="mt-8"
        >
          <div className="space-y-10">
            {section.details && (
              <div>
                <h3 className="mb-3 text-lg font-semibold text-teal-300">Details</h3>
                <p className="whitespace-pre-line leading-relaxed text-gray-200">
                  {section.details}
                </p>
              </div>
            )}
            {section.fullText && (
              <div>
                <h3 className="mb-3 text-lg font-semibold text-teal-300">Full Story</h3>
                <p className="whitespace-pre-line leading-relaxed text-gray-200">
                  {section.fullText}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SectionCard;
