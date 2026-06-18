'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import SlideIn from '../components/SlideIn';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';

const Home = () => {
  return (
    <section id="home">
      <div className="flexRow">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <FadeIn delay={0.1} duration={0.7}>
              <span className="eyebrow">
                Available for new opportunities
              </span>
            </FadeIn>
            <SlideIn delay={0.2}>
              <h1 className="heading-primary">
                Building polished digital products with
                <span className="text-gradient"> calm, modern interfaces.</span>
              </h1>
            </SlideIn>

            <FadeIn delay={0.45} duration={0.8}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl">
                I&apos;m Arthur Dutra, a software developer focused on full-stack web experiences
                that feel fast, clear, and thoughtfully built.
              </p>
            </FadeIn>

            <div className="mb-10 mt-8 space-y-4 text-base text-slate-400 sm:text-lg md:text-xl">
              <FadeIn delay={0.6} duration={1}>
                <p>
                  My background in software engineering at PUCRS gave me a strong technical
                  foundation, and my work since then has been about turning that into practical,
                  user-facing software.
                </p>
              </FadeIn>

              <FadeIn delay={0.7} duration={1}>
                <p>
                  My professional journey includes valuable internships at{' '}
                  <a
                    href="https://www.dell.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-200 transition-colors hover:text-sky-300"
                  >
                    Dell
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.panvel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-200 transition-colors hover:text-sky-300"
                  >
                    Panvel
                  </a>{' '}
                  where I built real products with <strong>Python</strong>, <strong>C#</strong>,{' '}
                  <strong>Apex</strong>, and <strong>JavaScript</strong>.
                </p>
              </FadeIn>

              <FadeIn delay={0.8} duration={1}>
                <p>
                  Today I&apos;m focused on React and Next.js, creating web products with better
                  structure, cleaner visual systems, and stronger user experience details.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.95} duration={0.7}>
              <div className="mb-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <a href="#projects" className="button-primary">
                  View Projects
                  <FiArrowRight className="ml-2" />
                </a>
                <a href="#contact" className="button-secondary">
                  Let&apos;s Work Together
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={1.05} duration={0.8}>
              <div className="grid max-w-2xl grid-cols-1 gap-4 text-left sm:grid-cols-3">
                <div className="glass-panel p-4">
                  <p className="text-2xl font-semibold text-white">3+</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-400">
                    Years shipping software
                  </p>
                </div>
                <div className="glass-panel p-4">
                  <p className="text-2xl font-semibold text-white">5</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-400">
                    Live web projects
                  </p>
                </div>
                <div className="glass-panel p-4">
                  <p className="text-2xl font-semibold text-white">Full-stack</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-400">
                    React, APIs, delivery
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <FadeIn delay={1} duration={0.5}>
                <a
                  href="https://github.com/Notdutra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-sky-300/30 hover:bg-white/10 hover:text-white"
                >
                  <FiGithub className="size-6 sm:size-7" />
                </a>
              </FadeIn>
              <FadeIn delay={1.1} duration={0.5}>
                <a
                  href="https://linkedin.com/in/arthursdutra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-sky-300/30 hover:bg-white/10 hover:text-white"
                >
                  <FiLinkedin className="size-6 sm:size-7" />
                </a>
              </FadeIn>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: 'easeIn' }}
            className="mt-2 flex justify-center lg:mt-0 lg:justify-end"
          >
            <div className="glass-panel-strong relative mx-auto w-full max-w-md p-5 sm:p-6">
              <FadeIn
                delay={1.4}
                duration={1}
                className="absolute inset-x-10 top-10 h-32 rounded-full bg-sky-400/20 blur-3xl"
              />
              <div className="absolute inset-0 rounded-[30px] border border-white/10" />
              <div className="relative mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Profile</p>
                  <p className="mt-1 text-lg font-semibold text-white">Arthur Dutra</p>
                </div>
                <span className="pill">Based in Canada</span>
              </div>
              <div className="relative mx-auto aspect-square w-4/5 sm:w-[78%]">
                <Image
                  src="/images/profile.webp"
                  alt="Arthur Schossler Dutra"
                  width={400}
                  height={400}
                  priority
                  sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 400px"
                  className="relative size-full overflow-hidden rounded-[2rem] object-cover shadow-2xl"
                />
              </div>
              <div className="relative mt-5 grid grid-cols-2 gap-3 text-left">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Focus</p>
                  <p className="mt-2 text-sm font-medium text-slate-200">
                    Frontend systems and product UX
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Stack</p>
                  <p className="mt-2 text-sm font-medium text-slate-200">
                    React, Next.js, APIs
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
