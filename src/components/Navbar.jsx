'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import navItems from '../data/navItems';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showNavbar, setShowNavbar] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);
  const scrollLockRef = useRef(false);

  // Show navbar after initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll behavior for mobile navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isOpen || currentScrollY < 10 || currentScrollY < lastScrollY.current) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // Set active section based on scroll position
  useEffect(() => {
    const setSectionFromScroll = () => {
      if (scrollLockRef.current) return;
      const sections = Array.from(document.querySelectorAll('section[id]'));
      let found = false;
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom > 80) {
          setActiveSection(sec.id);
          found = true;
          break;
        }
      }
      if (!found && sections.length) {
        setActiveSection(sections[0].id);
      }
    };

    window.addEventListener('scroll', setSectionFromScroll, { passive: true });
    setSectionFromScroll(); // Set initial section
    return () => window.removeEventListener('scroll', setSectionFromScroll);
  }, []);

  // Handle hash changes
  useEffect(() => {
    const setSectionFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
      }
    };
    setSectionFromHash();
    window.addEventListener('hashchange', setSectionFromHash);
    return () => window.removeEventListener('hashchange', setSectionFromHash);
  }, []);

  const scrollToSection = useCallback(
    (e, sectionId) => {
      e.preventDefault();
      e.stopPropagation();

      // Close mobile menu
      if (isOpen) {
        setIsOpen(false);
      }

      // Lock scroll updates temporarily
      scrollLockRef.current = true;

      // Find the section
      const section = document.getElementById(sectionId);
      if (!section) {
        scrollLockRef.current = false;
        return;
      }

      // Wait for mobile menu to close
      const delay = isOpen ? 500 : 10;

      setTimeout(() => {
        try {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth',
          });

          history.pushState(null, '', `#${sectionId}`);
          setActiveSection(sectionId);
        } catch (error) {
          // Silently handle scroll errors
        }

        setTimeout(() => {
          scrollLockRef.current = false;
        }, 1000);
      }, delay);
    },
    [isOpen],
  );

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-sm">
      <div className="container">
        <div className="flex items-center justify-start py-4">
          {/* Desktop Navigation - left aligned (like production) */}
          <div className="hidden items-center space-x-8 md:flex lg:space-x-12">
            {navItems.map((item, index) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => scrollToSection(e, item.path.substring(1))}
                className={`nav-link cursor-pointer text-base font-medium transition-all duration-200 lg:text-lg ${
                  activeSection === item.path.substring(1) ? 'active' : ''
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                  transitionDelay: `${0.2 + index * 0.1}s`,
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="rounded-full p-2 text-gray-200 transition-colors hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            style={{
              opacity: showNavbar ? 1 : 0,
              transform: showNavbar ? 'translateY(0)' : 'translateY(-40px)',
              pointerEvents: showNavbar ? 'auto' : 'none',
              transition: 'all 0.18s ease-out',
            }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-4 md:hidden">
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
