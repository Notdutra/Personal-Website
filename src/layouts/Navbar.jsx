import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef([]);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  // Memoize navItems to prevent unnecessary recreations
  const navItems = useMemo(
    () => [
      { name: 'Home', path: '#home' },
      { name: 'About', path: '#about' },
      { name: 'Skills', path: '#skills' },
      { name: 'Projects', path: '#projects' },
      { name: 'Contact', path: '#contact' },
    ],
    []
  );

  // Set initial visibility state after a short delay

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // Cache DOM elements once
  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll('section[id]'));
  }, []);

  // Throttle scroll handler
  useEffect(() => {
    let lastRun = 0;
    const throttleTime = 100;
    let timeoutId = null;

    const handleScroll = () => {
      // If scroll was initiated by navigation click, don't update active section
      if (isScrollingRef.current) return;

      const now = Date.now();
      if (now - lastRun >= throttleTime) {
        lastRun = now;

        // Use timeout to avoid multiple calculations in quick succession
        if (timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          const scrollPosition = window.scrollY + 100;
          const viewportHeight = window.innerHeight;
          const viewportMiddle = scrollPosition + viewportHeight / 3;

          const sections = sectionsRef.current;
          let newActiveSection = '';

          // Find the section that takes up most of the viewport
          for (const section of sections) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const sectionBottom = sectionTop + sectionHeight;

            // Check if section is in the top part of the viewport
            if (
              viewportMiddle >= sectionTop &&
              viewportMiddle < sectionBottom
            ) {
              newActiveSection = sectionId;
              break;
            }
          }

          // If we at the very top of the page, consider it the home section
          if (scrollPosition < 100 && sections.length > 0) {
            newActiveSection = 'home';
          }

          // Only update if we have a valid section and it's different
          if (newActiveSection && newActiveSection !== activeSection) {
            setActiveSection(newActiveSection);
          }
        }, 20);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial active section
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [activeSection]);

  // Memoize scroll function to prevent recreation on each render
  const scrollToSection = useCallback(
    (e, sectionId) => {
      e.preventDefault();

      // Clear any previous scroll timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Cancel any previous smooth scrolling
      window.scrollTo({
        top: window.scrollY,
        behavior: 'auto',
      });

      // Immediately update the active section
      setActiveSection(sectionId);

      // Set flag to prevent scroll-based updates
      isScrollingRef.current = true;

      const section = document.getElementById(sectionId);
      if (section) {
        // Small delay before scrolling to ensure previous scroll is canceled
        setTimeout(() => {
          window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',
          });

          // After scroll animation completes, allow scroll updates again
          scrollTimeoutRef.current = setTimeout(() => {
            isScrollingRef.current = false;
            scrollTimeoutRef.current = null;
          }, 1000); // Adjust based on scroll animation duration
        }, 0);

        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  // Cleanup effect for scrollTimeoutRef
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Memoize toggle function
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="z-50 fixed backdrop-blur-sm w-full">
      <div className="mx-auto px-4 sm:px-12 py-4 max-w-[2000px] container">
        <div className="flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-200 hover:text-teal-400"
            onClick={toggleMenu}
            aria-label="Toggle menu">
            {isOpen ?
              <FiX size={24} />
            : <FiMenu size={24} />}
          </button>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item.path}
                href={item.path}
                onClick={(e) => scrollToSection(e, item.path.substring(1))}
                className={`nav-link text-base font-medium transition-all duration-200 lg:text-lg ${
                  activeSection === item.path.substring(1) ? 'active' : ''
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
                }
                transition={{
                  duration: 0.3,
                  delay: 0.2 + index * 0.1, // Staggered delay for each item
                  ease: 'easeOut',
                }}>
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4">
              <div className="space-y-2 bg-[#1a2634]/80 backdrop-blur-sm p-4 border border-white/10 rounded-lg">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => scrollToSection(e, item.path.substring(1))}
                    className={`block rounded px-4 py-2 text-base font-medium transition-all duration-200 ${
                      activeSection === item.path.substring(1) ?
                        'bg-white/5 text-teal-400'
                      : 'text-gray-200 hover:bg-white/5 hover:text-teal-400'
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.05,
                    }}>
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
