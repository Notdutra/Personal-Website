import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import profilePic from "../assets/me.jpeg";

const TypewriterText = ({ text, delay = 0 }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.008, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      custom={delay}
      className="mb-4"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Home = () => {
  // Calculate delays based on text length
  const firstLine =
    "A software developer with a passion for creating web solutions, combining a strong foundation in theoretical computer science from PUCRS with hands-on experience in Java, C#, Python, and JavaScript.";
  const secondLine =
    "Through internships at Dell and Panvel —where I also got my first taste of front-end development.";
  const thirdLine =
    "Currently focusing on modern web development with React while building projects that showcase the intersection of theoretical knowledge and practical applications.";

  const firstLineDelay = 0;
  const secondLineDelay = firstLine.length * 0.008; // Time to type first line
  const thirdLineDelay = secondLineDelay + secondLine.length * 0.008; // Time to type first + second line

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Hi, I'm <span className="text-primary">Arthur</span>
              </motion.h1>
              <div className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                <TypewriterText text={firstLine} delay={firstLineDelay} />
                <TypewriterText text={secondLine} delay={secondLineDelay} />
                <TypewriterText text={thirdLine} delay={thirdLineDelay} />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: thirdLineDelay + 0.5, duration: 0.5 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <a
                  href="https://github.com/Notdutra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/arthursdutra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200"
                >
                  <FiLinkedin size={24} />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-full shadow-xl p-8">
                  <img
                    src={profilePic}
                    alt="Arthur Schossler Dutra"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white dark:bg-dark">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
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
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-4xl text-gray-400">🚀</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Personal projects will be showcased here. Stay tuned for
                  updates!
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
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
