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
      console.log('🚀 NAVIGATION CLICK DETECTED - STARTING FULL TRACE');
      console.log('='.repeat(60));

      e.preventDefault();
      e.stopPropagation();

      // CAPTURE EVERYTHING BEFORE NAVIGATION
      console.log('📋 BEFORE NAVIGATION STATE:');
      console.log('Target section:', sectionId);
      console.log('Current URL:', window.location.href);
      console.log('Current hash:', window.location.hash);

      // Log ALL meta tags
      const allMetas = Array.from(document.querySelectorAll('meta'));
      console.log('🏷️ ALL META TAGS:');
      allMetas.forEach((meta, i) => {
        const name = meta.getAttribute('name');
        const property = meta.getAttribute('property');
        const content = meta.getAttribute('content');
        if (name || property) {
          console.log(`  ${i}: ${name || property} = ${content}`);
        }
      });

      // Log ALL style elements
      const allStyles = Array.from(document.querySelectorAll('style'));
      console.log('🎨 ALL STYLE TAGS:');
      allStyles.forEach((style, i) => {
        console.log(`  Style ${i}:`, style.textContent?.substring(0, 100) + '...');
      });

      // Log computed styles on HTML and BODY
      const htmlStyles = getComputedStyle(document.documentElement);
      const bodyStyles = getComputedStyle(document.body);
      console.log('🌍 COMPUTED STYLES:');
      console.log('HTML background:', htmlStyles.backgroundColor);
      console.log('BODY background:', bodyStyles.backgroundColor);
      console.log('HTML color-scheme:', htmlStyles.colorScheme);

      // SUPER AGGRESSIVE MONITORING - Watch EVERYTHING
      const observers = [];

      // Watch ALL attribute changes on ALL elements
      const globalObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes') {
            console.log('🚨 ATTRIBUTE CHANGED:');
            console.log('  Element:', mutation.target.tagName);
            console.log('  Attribute:', mutation.attributeName);
            console.log('  Old value:', mutation.oldValue);
            console.log('  New value:', mutation.target.getAttribute(mutation.attributeName));
            console.log('  Stack:', new Error().stack.split('\n')[2]);
          }
        });
      });

      // Watch for new elements being added
      const nodeObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
              // Element node
              console.log('🆕 NEW ELEMENT ADDED:', node.tagName);
              if (node.tagName === 'META' || node.tagName === 'STYLE') {
                console.log('  Content:', node.outerHTML);
              }
            }
          });
        });
      });

      // Start observing EVERYTHING
      globalObserver.observe(document, {
        attributes: true,
        attributeOldValue: true,
        subtree: true,
        attributeFilter: ['content', 'style', 'class', 'data-theme'],
      });

      nodeObserver.observe(document.head, {
        childList: true,
        subtree: true,
      });

      observers.push(globalObserver, nodeObserver);

      // Monitor window events
      const eventTypes = ['hashchange', 'popstate', 'beforeunload', 'pagehide', 'pageshow'];
      eventTypes.forEach((eventType) => {
        const handler = (e) => console.log(`🔔 WINDOW EVENT: ${eventType}`, e);
        window.addEventListener(eventType, handler);
        observers.push(() => window.removeEventListener(eventType, handler));
      });

      // Close mobile menu
      if (isOpen) {
        setIsOpen(false);
      }

      // Lock scroll updates temporarily
      scrollLockRef.current = true;

      // Update URL hash
      const oldHash = window.location.hash;
      console.log('🔗 CHANGING HASH:', oldHash, '->', `#${sectionId}`);
      window.location.hash = `#${sectionId}`;

      // Trigger hashchange event if hash didn't actually change
      if (oldHash === `#${sectionId}`) {
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      }

      setActiveSection(sectionId);

      // Function to attempt scrolling to section
      const attemptScroll = (retries = 10) => {
        const section = document.getElementById(sectionId);
        if (section) {
          try {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            console.log('📍 SCROLLING TO:', sectionTop);

            window.scrollTo({
              top: sectionTop,
              behavior: 'smooth',
            });

            setTimeout(() => {
              scrollLockRef.current = false;

              // FINAL STATE CHECK
              console.log('🏁 FINAL STATE AFTER NAVIGATION:');
              const finalMetas = Array.from(document.querySelectorAll('meta[name="theme-color"]'));
              finalMetas.forEach((meta, i) => {
                console.log(`  Final meta ${i}:`, meta.getAttribute('content'));
              });

              // CHECK FOR BROWSER COLOR SAMPLING
              console.log('🎨 CHECKING FOR BROWSER COLOR SAMPLING:');
              console.log(
                'Document background:',
                getComputedStyle(document.documentElement).backgroundColor,
              );
              console.log('Body background:', getComputedStyle(document.body).backgroundColor);

              // Check if there are any elements with prominent background colors
              const prominentElements = Array.from(document.querySelectorAll('*')).filter((el) => {
                const style = getComputedStyle(el);
                const bg = style.backgroundColor;
                return bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent';
              });

              console.log('🌈 ELEMENTS WITH BACKGROUND COLORS:');
              prominentElements.slice(0, 10).forEach((el, i) => {
                const style = getComputedStyle(el);
                console.log(`  ${i}: ${el.tagName}.${el.className} = ${style.backgroundColor}`);
              });

              // Stop all observers
              observers.forEach((obs) => {
                if (typeof obs === 'function') obs();
                else obs.disconnect();
              });

              console.log('='.repeat(60));
              console.log('🏁 NAVIGATION TRACE COMPLETE');
            }, 1000);
          } catch (error) {
            console.warn('Scroll error:', error);
            scrollLockRef.current = false;
            observers.forEach((obs) => {
              if (typeof obs === 'function') obs();
              else obs.disconnect();
            });
          }
        } else if (retries > 0) {
          setTimeout(() => attemptScroll(retries - 1), 100);
        } else {
          console.warn(`Section ${sectionId} not found after retries`);
          scrollLockRef.current = false;
          observers.forEach((obs) => {
            if (typeof obs === 'function') obs();
            else obs.disconnect();
          });
        }
      };

      // Wait for mobile menu to close if needed, then start attempting to scroll
      const delay = isOpen ? 500 : 50;
      setTimeout(attemptScroll, delay);
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
