import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import profilePic from '../assets/profile-picture.jpeg';
import { useState, useRef, useEffect } from 'react';

const FadeIn = ({ children, delay = 0, duration = 0.5, className = '' }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay, duration }}
    className={className}>
    {children}
  </motion.div>
);

const SlideIn = ({ children }) => {
  const [elementWidth, setElementWidth] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      setElementWidth(elementRef.current.offsetWidth);
    }
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
      x: `-${Math.max(600, elementWidth * 1.5)}px`,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        type: 'spring',
        stiffness: 150,
        damping: 20,
        mass: 3,
      },
    },
  };

  return (
    <div className="relative">
      <motion.div
        ref={elementRef}
        variants={variants}
        initial="hidden"
        animate="visible"
        className="w-full">
        {children}
      </motion.div>
    </div>
  );
};

const Home = () => {
  return (
    <section id="home">
      <div className="flex items-center mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-16 min-h-screen container">
        <div className="items-center gap-8 lg:gap-16 grid grid-cols-1 lg:grid-cols-2 w-full">
          {/* Text Content */}
          <div className="lg:text-left text-center">
            <SlideIn>
              <h1 className="mb-6 font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I&apos;m <span className="text-gradient">Arthur</span>
              </h1>
            </SlideIn>

            <div className="space-y-4 mb-8 text-gray-300 text-base sm:text-lg md:text-xl">
              <FadeIn delay={0.5}>
                <p>
                  I&apos;m a software developer with a strong foundation in
                  software engineering from PUCRS, learning web and full-stack
                  development.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <p>
                  My professional journey includes valuable internships at{' '}
                  <a
                    href="https://www.dell.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-teal-400 transition-colors">
                    <span className="italic strong">Dell</span>
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.panvel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-teal-400 transition-colors">
                    <span className="italic strong">Panvel</span>
                  </a>{' '}
                  where I developed expertise in <strong>Python</strong>,{' '}
                  <strong>C#</strong>, <strong>Apex</strong>, and{' '}
                  <strong>JavaScript</strong>.
                </p>
              </FadeIn>

              <FadeIn delay={0.7}>
                <p>
                  Currently, I&apos;m focused on modern web development with
                  React, creating innovative solutions that bridge theoretical
                  knowledge with practical applications.
                </p>
              </FadeIn>
            </div>

            <span className="flex justify-center lg:justify-start gap-6">
              <FadeIn delay={0.8}>
                <motion
                  href="https://github.com/Notdutra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-300 hover:text-teal-400 transition-colors">
                  <div className="spring-hover">
                    <FiGithub className="w-6 sm:w-7 h-6 sm:h-7" />
                  </div>
                </motion>
              </FadeIn>
              <FadeIn delay={0.9}>
                <a
                  href="https://linkedin.com/in/arthursdutra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-300 hover:text-teal-400 transition-colors">
                  <div className="spring-hover">
                    <FiLinkedin className="w-6 sm:w-7 h-6 sm:h-7" />
                  </div>
                </a>
              </FadeIn>
            </span>
          </div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: 'easeIn' }}
            className="flex justify-center lg:justify-end mt-2 lg:mt-0">
            <div className="relative mx-auto w-3/5 xs:w-1/2 sm:w-2/3 md:w-3/5 lg:w-full max-w-md aspect-square">
              <FadeIn
                delay={1.5}
                duration={1}
                className="absolute inset-0 bg-teal-500/10 bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-3xl rounded-full"
              />
              <div>
                <img
                  src={profilePic}
                  alt="Arthur Schossler Dutra"
                  className="relative shadow-xl rounded-full w-full h-full overflow-hidden"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
