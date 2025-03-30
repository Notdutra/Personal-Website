import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import profilePic from "../assets/me.jpeg";

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a2634] via-[#243447] to-[#1a2634]">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen pt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, x: -1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              >
                Hi, I'm <span className="text-teal-400">Arthur</span>
              </motion.h1>
              <div className="text-xl text-gray-300 mb-8 space-y-4">
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
                      delay: 1.6,
                      duration: 0.8,
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
                    delay: 1.8,
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 2.2,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  >
                    My professional journey includes valuable internships at{" "}
                    <a
                      href="https://www.dell.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-300 inline-block relative group"
                    >
                      Dell
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-teal-500 dark:bg-teal-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.panvel.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-300 inline-block relative group"
                    >
                      Panvel
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-teal-500 dark:bg-teal-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </a>{" "}
                    where I developed expertise in Java, C#, Python, and
                    JavaScript.
                  </motion.span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 2.4,
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 2.8,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  >
                    Currently, I'm focused on modern web development with React,
                    creating innovative solutions that bridge theoretical
                    knowledge with practical applications.
                  </motion.span>
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 3.0,
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
            </motion.div>

            {/* Right Column - Visual Element */}
            <div className="relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-teal-500/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
                <div className="relative bg-[#243447] rounded-full shadow-xl p-8">
                  <img
                    src={profilePic}
                    alt="Arthur Schossler Dutra"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will be added here when you have personal projects to showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-white/10"
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
  );
};

export default Home;
