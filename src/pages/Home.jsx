'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import SlideIn from '../components/SlideIn';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Home = () => {
  return (
    <section id="home">
      <div className="flexRow">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <SlideIn delay={0.2}>
              <h1 className="heading-primary">
                Hi, I&apos;m <span className="text-gradient">Arthur</span>
              </h1>
            </SlideIn>

            <div className="mb-8 space-y-4 text-base text-gray-300 sm:text-lg md:text-xl">
              <FadeIn delay={0.6} duration={1}>
                <p>
                  I&apos;m a software developer with a strong foundation in software engineering
                  from PUCRS, learning web and full-stack development.
                </p>
              </FadeIn>

              <FadeIn delay={0.7} duration={1}>
                <p>
                  My professional journey includes valuable internships at{' '}
                  <a
                    href="https://www.dell.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 transition-colors hover:text-teal-400"
                  >
                    <span className="font-bold italic">Dell</span>
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.panvel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 transition-colors hover:text-teal-400"
                  >
                    <span className="font-bold italic">Panvel</span>
                  </a>{' '}
                  where I developed expertise in <strong>Python</strong>, <strong>C#</strong>,{' '}
                  <strong>Apex</strong>, and <strong>JavaScript</strong>.
                </p>
              </FadeIn>

              <FadeIn delay={0.8} duration={1}>
                <p>
                  Currently, I&apos;m focused on modern web development with React, creating
                  innovative solutions that bridge theoretical knowledge with practical
                  applications.
                </p>
              </FadeIn>
            </div>

            <div className="mt-4 flex justify-center gap-6 lg:justify-start">
              <FadeIn delay={1} duration={0.5}>
                <a
                  href="https://github.com/Notdutra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition-colors hover:text-teal-400"
                >
                  <FiGithub className="size-6 sm:size-7" />
                </a>
              </FadeIn>
              <FadeIn delay={1.1} duration={0.5}>
                <a
                  href="https://linkedin.com/in/arthursdutra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition-colors hover:text-teal-400"
                >
                  <FiLinkedin className="size-6 sm:size-7" />
                </a>
              </FadeIn>
            </div>
          </div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: 'easeIn' }}
            className="mt-2 flex justify-center lg:mt-0 lg:justify-end"
          >
            <div className="xs:w-1/2 relative mx-auto aspect-square w-3/5 max-w-md sm:w-2/3 md:w-3/5 lg:w-full">
              <FadeIn
                delay={1.5}
                duration={1}
                className="absolute inset-0 rounded-full bg-teal-500/10 bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-3xl"
              />
              <div>
                <Image
                  src="/images/profile.webp"
                  alt="Arthur Schossler Dutra"
                  width={400}
                  height={400}
                  priority
                  sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 400px"
                  className="relative size-full overflow-hidden rounded-full shadow-xl"
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
