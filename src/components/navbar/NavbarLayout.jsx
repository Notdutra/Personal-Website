import { motion } from 'framer-motion';

const NavbarLayout = ({ isVisible, showNavbar, isDesktop, children }) => {
  const speed = -40;
  const animate = isDesktop
    ? { opacity: isVisible ? 1 : 0, y: isVisible ? 0 : speed }
    : {
        opacity: showNavbar ? 1 : 0,
        y: showNavbar ? 0 : speed,
        pointerEvents: showNavbar ? 'auto' : 'none',
      };

  const className = isDesktop
    ? 'fixed top-0 left-0 z-50 w-full md:backdrop-blur-sm'
    : 'fixed top-0 left-0 z-50 w-full';

  return (
    <motion.nav
      initial={{ opacity: 0, y: speed }}
      animate={animate}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className={className}
    >
      <div className="container py-4">{children}</div>
    </motion.nav>
  );
};

export default NavbarLayout;
