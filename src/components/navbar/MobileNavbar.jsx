import navItems from '../../data/navItems';
import { AnimatePresence, motion } from 'framer-motion';

const MobileNavbar = ({ activeSection, scrollToSection, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="mt-4"
      >
        <div className="space-y-2 rounded-lg border border-white/10 bg-[#1a2634]/80 p-4 backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => scrollToSection(e, item.path.substring(1))}
              className={`block rounded px-4 py-2 text-base font-medium transition-all duration-200 ${
                activeSection === item.path.substring(1)
                  ? 'bg-white/5 text-teal-400'
                  : 'text-gray-200 hover:bg-white/5 hover:text-teal-400'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MobileNavbar;
