import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll and highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  // Smooth scroll function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-[2000px] mx-auto px-8 sm:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="text-lg sm:text-xl md:text-2xl font-bold text-gradient">
            NotDutra
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => scrollToSection(e, item.path.substring(1))}
                className={`nav-link text-base lg:text-lg font-medium transition-all duration-200 ${
                  activeSection === item.path.substring(1) ? "active" : ""
                }`}>
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-200 hover:text-teal-400 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu">
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
              className="md:hidden mt-4">
              <div className="rounded-lg bg-[#1a2634]/80 backdrop-blur-sm p-4 space-y-2 border border-white/10">
                {navItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => scrollToSection(e, item.path.substring(1))}
                    className={`block px-4 py-2 text-base font-medium rounded transition-all duration-200 ${
                      activeSection === item.path.substring(1)
                        ? "text-teal-400 bg-white/5"
                        : "text-gray-200 hover:text-teal-400 hover:bg-white/5"
                    }`}>
                    {item.name}
                  </a>
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
