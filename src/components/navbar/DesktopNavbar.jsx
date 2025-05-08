import navItems from '../../data/navItems';
import { motion } from 'framer-motion';

const DesktopNavbar = ({ activeSection, scrollToSection, isVisible }) => (
  <div className="items-center space-x-8 lg:space-x-12">
    {navItems.map((item, index) => (
      <motion.a
        key={item.path}
        href={item.path}
        onClick={(e) => scrollToSection(e, item.path.substring(1))}
        className={`nav-link cursor-pointer text-base font-medium transition-all duration-200 lg:text-lg ${
          activeSection === item.path.substring(1) ? 'active' : ''
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{
          duration: 0.3,
          delay: 0.2 + index * 0.1,
          ease: 'easeOut',
        }}
      >
        {item.name}
      </motion.a>
    ))}
  </div>
);

export default DesktopNavbar;
