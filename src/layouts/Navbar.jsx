import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Reset scroll position when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
    setIsOpen(false); // Close mobile menu on route change
  }, [location]);

  // Handle scroll events
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Get the photo frame element position
      const photoFrame = document.querySelector(".rounded-full");
      if (!photoFrame) return;

      // Get the position of the top of the photo frame, minus a small offset
      const framePosition =
        photoFrame.getBoundingClientRect().top + window.scrollY + 58;

      if (currentScrollY > framePosition - 100) {
        // Start hiding slightly before reaching the frame
        // Near or past the frame
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        }
      } else {
        // Above the frame
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    window.addEventListener("resize", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
      window.removeEventListener("resize", controlNavbar);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }} // Hide navbar when not visible
      transition={{ duration: 0.3 }}
      className="fixed w-full z-50 backdrop-blur-sm"
    >
      <div className="max-w-[2000px] mx-auto px-8 sm:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-lg sm:text-xl md:text-2xl font-bold text-gradient"
          >
            NotDutra
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-base lg:text-lg font-medium transition-all duration-200 ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-200 hover:text-teal-400 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4"
            >
              <div className="rounded-lg bg-[#1a2634]/80 backdrop-blur-sm p-4 space-y-2 border border-white/10">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 text-base font-medium rounded transition-all duration-200 ${
                      location.pathname === item.path
                        ? "text-teal-400 bg-white/5"
                        : "text-gray-200 hover:text-teal-400 hover:bg-white/5"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
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
