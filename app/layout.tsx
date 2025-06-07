import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Samarth Kolarkar - Full Stack Developer & GenAI Innovator',
  description: 'Portfolio of Samarth Kolarkar - B.Tech I.T. student, MERN Stack Developer, GenAI Consultant, and Software Entrepreneur specializing in cutting-edge web technologies.',
  keywords: 'Samarth Kolarkar, Full Stack Developer, MERN Stack, GenAI, React, Node.js, Web Development, Portfolio',
  authors: [{ name: 'Samarth Kolarkar' }],
  creator: 'Samarth Kolarkar',
  openGraph: {
    title: 'Samarth Kolarkar - Full Stack Developer & GenAI Innovator',
    description: 'Innovative software solutions and cutting-edge web development expertise.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samarth Kolarkar - Full Stack Developer',
    description: 'Building the future with code and AI innovation.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0a0a0a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}