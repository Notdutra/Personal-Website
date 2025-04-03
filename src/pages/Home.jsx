import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import profilePic from "../assets/me.jpeg";
import RippleEffect from "../components/RippleEffect";

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        staggerChildren: 0.8,
      },
    },
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const linkAnimation = {
    y: [0, -3, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const AnimatedText = ({ text, className, intensity = 1 }) => {
    return (
      <span className={className}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            animate={{
              y: [0, -2 * intensity, 0],
              rotate: [0, -4 * intensity, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <div className="page-container">
      {/* Background wrapper - fixed position */}
      <div className="fixed inset-0 z-0">
        <RippleEffect />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[100vh] flex items-center justify-center pt-24 md:pt-16">
          <div className="main-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-center lg:text-left">
                <motion.h1
                  initial={{ opacity: 0, x: -outerWidth }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="heading-primary"
                >
                  Hi, I'm <span className="text-gradient">Arthur</span>
                </motion.h1>
                <div className="text-xl text-gray-300 mb-8 space-y-4">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.6,
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 0.8,
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                    >
                      I'm a software developer with a strong foundation in
                      computer science from PUCRS, learning web and full-stack
                      development.
                    </motion.span>
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.9,
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 1.1,
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                    >
                      My professional journey includes valuable internships at{" "}
                      <motion.a
                        href="https://www.dell.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block italic text-gray-300 hover:text-gray-100"
                        whileHover={{ y: -4 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 15,
                        }}
                      >
                        Dell
                      </motion.a>{" "}
                      and{" "}
                      <motion.a
                        href="https://www.panvel.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block italic text-gray-300 hover:text-gray-100"
                        whileHover={{ y: -4 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 15,
                        }}
                      >
                        Panvel
                      </motion.a>{" "}
                      where I developed expertise in <strong>Python</strong>,{" "}
                      <strong>C#</strong>, <strong>Apex</strong>, and{" "}
                      <strong>JavaScript</strong>.
                    </motion.span>
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 1.2,
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 1.4,
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                    >
                      Currently, I'm focused on modern web development with
                      React, creating innovative solutions that bridge
                      theoretical knowledge with practical applications.
                    </motion.span>
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1.6,
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                >
                  <a
                    href="https://github.com/Notdutra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    <FiGithub size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/arthursdutra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    <FiLinkedin size={24} />
                  </a>
                </motion.div>
              </div>

              {/* Right Column - Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <div className="absolute inset-0 bg-teal-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
                  </motion.div>
                  <div className="relative rounded-full shadow-xl overflow-hidden">
                    <motion.img
                      src={profilePic}
                      alt="Arthur Schossler Dutra"
                      className="w-full h-full rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="section-container">
          <div className="main-container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="heading-secondary"
            >
              Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card"
              >
                <div className="aspect-video bg-white/5 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">🚀</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-100">
                    Coming Soon
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Personal projects will be showcased here. Stay tuned for
                    updates!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">
                      In Progress
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
