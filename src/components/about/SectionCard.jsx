'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiBook, FiBriefcase, FiCode, FiChevronDown } from 'react-icons/fi';
import { useEffect, useRef } from 'react';

const iconComponents = {
  book: <FiBook size={28} className="text-sky-300" />,
  briefcase: <FiBriefcase size={28} className="text-sky-300" />,
  code: <FiCode size={28} className="text-sky-300" />,
};

const SectionCard = ({
  section,
  index,
  isExpanded,
  onClick,
  rowIndex = 0,
  isLeftColumn = true,
}) => {
  const isTopRow = rowIndex === 0;
  const cardRef = useRef(null);

  // Detect outside click to close expanded card on md+ screens
  useEffect(() => {
    if (!isExpanded) return;
    if (typeof window === 'undefined' || window.innerWidth < 768) return;
    const handleClick = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        onClick(index);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isExpanded, index, onClick]);

  return (
    <motion.div
      ref={cardRef}
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
      className={`flex grow flex-col rounded-[28px] border ${
        isExpanded
          ? 'border-sky-300/30 bg-[linear-gradient(180deg,rgba(18,38,61,0.97),rgba(10,21,35,0.95))] p-6 shadow-2xl shadow-black/40'
          : 'h-auto cursor-pointer border-white/10 bg-[linear-gradient(180deg,rgba(12,27,44,0.78),rgba(8,18,31,0.7))] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300/24 hover:bg-[linear-gradient(180deg,rgba(16,35,56,0.88),rgba(9,20,34,0.8))]'
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
          <span className="flex items-center justify-center rounded-2xl border border-sky-300/14 bg-sky-300/10 p-3 shadow-inner">
            {iconComponents[section.icon] || <FiCode size={28} className="text-sky-300" />}
          </span>
          <div className="flex flex-col">
            <h2 className="mb-1 text-xl font-bold text-white">{section.title}</h2>
            {section.year && <p className="text-sm font-medium text-sky-200">{section.year}</p>}
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick(index);
          }}
          className="absolute right-0 top-0 rounded-full border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10"
          aria-label={isExpanded ? 'Close details' : `Open details for ${section.title}`}
        >
          <FiChevronDown className={`${isExpanded ? 'rotate-180' : ''} text-sky-300`} size={20} />
        </button>
      </div>
      <p className="leading-8 text-slate-300">{section.content}</p>

      {isExpanded && (
        <motion.div
          key="expanded-content"
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="mt-8"
        >
          <div className="space-y-10">
            {section.details && (
              <div>
                <h3 className="mb-3 text-lg font-semibold text-sky-200">Details</h3>
                <p className="whitespace-pre-line leading-8 text-slate-300">
                  {section.details}
                </p>
              </div>
            )}
            {section.fullText && (
              <div>
                <h3 className="mb-3 text-lg font-semibold text-sky-200">Full Story</h3>
                <p className="whitespace-pre-line leading-8 text-slate-300">
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
