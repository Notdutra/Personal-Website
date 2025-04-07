import { motion } from "motion/react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import profilePic from "../../assets/profile-picture.jpeg";

const FadeInWrapper = ({
  children,
  delay = 0,
  duration = 0.4,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  ...props
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ delay, duration, ...props.transition }}
      {...props}>
      {children}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Left Column - Text Content */}
      <div className="text-center lg:text-left">
        <motion.h1
          initial={{ opacity: 0, x: -outerWidth }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="heading-primary">
          Hi, I&apos;m <span className="text-gradient">Arthur</span>
        </motion.h1>
        <div className="text-xl text-gray-300 mb-8 space-y-4">
          <FadeInWrapper delay={1} duration={0.5}>
            <p>
              I&apos;m a software developer with a strong foundation in computer
              science from PUCRS, learning web and full-stack development.
            </p>
          </FadeInWrapper>
          <FadeInWrapper delay={1.2} duration={0.5}>
            <p>
              My professional journey includes valuable internships at{" "}
              <a
                href="https://www.dell.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block italic text-gray-300 hover:text-gray-100">
                Dell
              </a>{" "}
              and{" "}
              <a
                href="https://www.panvel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block italic text-gray-300 hover:text-gray-100">
                Panvel
              </a>{" "}
              where I developed expertise in <strong>Python</strong>,{" "}
              <strong>C#</strong>, <strong>Apex</strong>, and{" "}
              <strong>JavaScript</strong>.
            </p>
          </FadeInWrapper>
          <FadeInWrapper delay={1.4} duration={0.5}>
            <p>
              Currently, I&apos;m focused on modern web development with React,
              creating innovative solutions that bridge theoretical knowledge
              with practical applications.
            </p>
          </FadeInWrapper>
        </div>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <FadeInWrapper delay={2} duration={0.5}>
            <a
              href="https://github.com/Notdutra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
              <FiGithub size={24} />
            </a>
          </FadeInWrapper>
          <FadeInWrapper delay={2.2} duration={0.5}>
            <a
              href="https://linkedin.com/in/arthursdutra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
              <FiLinkedin size={24} />
            </a>
          </FadeInWrapper>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative w-full aspect-square max-w-lg mx-auto">
          <FadeInWrapper
            delay={1}
            duration={1}
            className="absolute inset-0 rounded-full blur-xl bg-teal-500/10 bg-gradient-to-r from-teal-500/20 to-blue-500/20"
          />
          <div>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              src={profilePic}
              alt="Arthur Schossler Dutra"
              className="w-full h-full rounded-full shadow-xl relative overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
