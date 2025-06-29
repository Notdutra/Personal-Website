import type { Metadata, Viewport } from 'next';
import React from 'react';
import '../styles/global.css';
import Navbar from '../components/Navbar';

export const viewport: Viewport = {
  themeColor: '#1a1f2b',
};

export const metadata: Metadata = {
  title: {
    default: 'Arthur Dutra | Software Developer',
    template: '%s | Arthur Dutra',
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
    images: [
      {
        url: 'https://notdutra.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arthur Dutra | Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arthur Dutra | Software Developer',
    description: 'Software Developer & Tech Enthusiast building modern web applications',
    images: ['https://notdutra.dev/og-image.jpg'],
  },
  verification: {
    google: 'your-google-site-verification-code', // Add your actual verification code
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-[#243447] via-[#1a1f2b] to-[#111827] text-white">
        <Navbar />
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
