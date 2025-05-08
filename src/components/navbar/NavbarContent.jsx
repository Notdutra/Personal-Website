import { useState, useEffect, useCallback, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import navItems from '../../data/navItems';

const NavbarContent = ({ isDesktop, isVisible, NavbarLayout, MobileNav, DesktopNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const scrollLockRef = useRef(null);

  useEffect(() => {
    if (isDesktop) {
      setShowNavbar(true);
      return;
    }
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isOpen || currentScrollY < 10 || currentScrollY < lastScrollY.current) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop, isOpen]);

  useEffect(() => {
    // On mount, set activeSection based on hash or scroll position
    const setSectionFromHashOrScroll = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // No hash, set based on scroll position
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
      }
    };
    setSectionFromHashOrScroll();
    window.addEventListener('hashchange', setSectionFromHashOrScroll);
    return () => window.removeEventListener('hashchange', setSectionFromHashOrScroll);
  }, []);

  useEffect(() => {
    // On mount and on scroll, update activeSection based on scroll position
    const setSectionFromScroll = () => {
      if (scrollLockRef.current) return; // Don't update while locked
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
    return () => window.removeEventListener('scroll', setSectionFromScroll);
  }, []);

  const scrollToSection = useCallback(
    (e, sectionId) => {
      e.preventDefault();
      e.stopPropagation();

      // Close mobile menu first if it's open
      if (!isDesktop && isOpen) {
        setIsOpen(false);
      }

      // Lock scroll updates temporarily
      scrollLockRef.current = true;

      // Find the section to scroll to
      const section = document.getElementById(sectionId);
      if (!section) {
        scrollLockRef.current = false;
        return;
      }

      // Wait longer on mobile to ensure menu is fully closed
      const delay = !isDesktop ? 500 : 10;

      setTimeout(() => {
        try {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth',
          });

          history.pushState(null, '', `#${sectionId}`);
          setActiveSection(sectionId);
        } catch (err) {
          console.error('Scroll error:', err);
        }

        setTimeout(() => {
          scrollLockRef.current = false;
        }, 1000);
      }, delay);
    },
    [isDesktop, isOpen, setActiveSection],
  );

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <NavbarLayout isVisible={isVisible} showNavbar={showNavbar} isDesktop={isDesktop}>
      {isDesktop ? (
        <div className="flex items-center justify-between">
          <DesktopNav
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            isVisible={isVisible}
            navItems={navItems}
          />
        </div>
      ) : (
        <>
          <div className="flex items-center">
            <button
              className="rounded-full p-2 text-gray-200 transition-colors hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <MobileNav
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            isOpen={isOpen}
            navItems={navItems}
          />
        </>
      )}
    </NavbarLayout>
  );
};

export default NavbarContent;
