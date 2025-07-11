import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Home from '../pages/Home';
import LazyComponent from '../components/LazyComponent';

// Dynamic imports for better code splitting
const About = dynamic(() => import('../pages/About'), {
  loading: () => (
    <div className="flex min-h-screen items-center justify-center text-white">Loading...</div>
  ),
});

const Skills = dynamic(() => import('../pages/Skills'), {
  loading: () => (
    <div className="flex min-h-screen items-center justify-center text-white">Loading...</div>
  ),
});

const Projects = dynamic(() => import('../pages/Projects'), {
  loading: () => (
    <div className="flex min-h-screen items-center justify-center text-white">Loading...</div>
  ),
});

const Contact = dynamic(() => import('../pages/Contact'), {
  loading: () => (
    <div className="flex min-h-screen items-center justify-center text-white">Loading...</div>
  ),
});

export const metadata: Metadata = {
  title: 'Arthur Schossler Dutra | Software Developer',
  description: 'Arthur Schossler Dutra - Software Developer & Tech Enthusiast',
};

export default function HomePage() {
  return (
    <>
      <Home />
      <LazyComponent sectionId="about">
        <About />
      </LazyComponent>
      <LazyComponent sectionId="skills">
        <Skills />
      </LazyComponent>
      <LazyComponent sectionId="projects">
        <Projects />
      </LazyComponent>
      <LazyComponent sectionId="contact">
        <Contact />
      </LazyComponent>
    </>
  );
}
