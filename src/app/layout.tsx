import type { Metadata } from 'next';
import React from 'react';
import '../styles/global.css';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: {
    default: 'Arthur Schossler Dutra | Software Developer',
    template: '%s | Arthur Schossler Dutra – Software Developer',
  },
  description:
    'Arthur Dutra - Software Developer & Tech Enthusiast building modern web applications with React, Next.js, and cutting-edge technologies.',
  keywords: [
    'Arthur Dutra',
    'Software Developer',
    'Web Developer',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
  ],
  authors: [{ name: 'Arthur Dutra' }],
  creator: 'Arthur Dutra',
  publisher: 'Arthur Dutra',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Arthur Dutra | Software Developer',
    description: 'Software Developer & Tech Enthusiast building modern web applications',
    type: 'website',
    url: 'https://notdutra.dev',
    siteName: 'Arthur Dutra Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Arthur Dutra | Software Developer',
    description: 'Software Developer & Tech Enthusiast building modern web applications',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white">
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="bg-sky-400/12 absolute left-[-10%] top-[-8%] h-[28rem] w-[28rem] rounded-full blur-3xl" />
          <div className="absolute right-[-6%] top-[18%] h-[22rem] w-[22rem] rounded-full bg-amber-400/10 blur-3xl" />
          <div className="bg-cyan-500/8 absolute bottom-[-10%] left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-3xl" />
        </div>
        <Navbar />
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
