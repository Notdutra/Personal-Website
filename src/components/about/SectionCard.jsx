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
      initial={{ y: 24 }}
      animate={{
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
        ...(isExpanded && typeof window !== 'undefined' && window.innerWidth >= 768
          ? {
              position: 'absolute',
              zIndex: 50,
              width: '200%',
              left: isLeftColumn ? '0' : 'auto',
              right: !isLeftColumn ? '0' : undefined,
              top: isTopRow ? '0' : 'auto',
              bottom: !isTopRow ? '0' : undefined,
            }
          : {
              position: 'relative',
              zIndex: 'auto',
              width: '100%',
            }),
        minHeight: isExpanded ? '138px' : '180px',
        transformOrigin: isExpanded
          ? `${isTopRow ? 'top' : 'bottom'} ${isLeftColumn ? 'left' : 'right'}`
          : 'top left',
      }}
      className={`flex grow flex-col rounded-3xl border ${
        isExpanded
          ? 'border-teal-400/40 bg-gradient-to-br from-[#1e2332]/95 to-[#151922]/95 p-6 shadow-xl shadow-black/30'
          : 'h-auto cursor-pointer border-white/10 bg-white/5 p-6 transition-transform hover:scale-[1.03] hover:border-teal-400/40 hover:shadow-teal-900/30'
      } w-full`}
      onClick={() => !isExpanded && onClick(index)}
      tabIndex={0}
      aria-label={`${isExpanded ? 'Details for' : 'Open details for'} ${section.title}`}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !isExpanded) onClick(index);
      }}
    >
      {/* Card Header */}
      <div className="relative flex h-auto flex-col gap-4">
        <div className="flex items-start gap-4">
          <span className="flex items-center justify-center rounded-xl bg-teal-500/15 p-3 shadow-inner">
            {iconComponents[section.icon] || <FiCode size={28} className="text-teal-400" />}
          </span>
          <div className="flex flex-col">
            <h2 className="mb-1 text-xl font-bold text-white">{section.title}</h2>
            {section.year && <p className="text-sm font-medium text-teal-300">{section.year}</p>}
          </div>
        </div>
        {/* Chevron button always in the same top-right position */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick(index);
          }}
          className="absolute right-0 top-0 rounded-full p-2 transition-colors"
          aria-label={isExpanded ? 'Close details' : `Open details for ${section.title}`}
        >
          <FiChevronDown className={`${isExpanded ? 'rotate-180' : ''} text-teal-400`} size={20} />
        </button>
      </div>
      <p className="leading-relaxed text-gray-200">{section.content}</p>

      {isExpanded && (
        <motion.div
          key="expanded-content"
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
