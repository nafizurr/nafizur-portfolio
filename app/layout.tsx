import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nafizur Rahman | CS Student',
  description:
    'Single-page portfolio for Nafizur Rahman, a computer science student building thoughtful AI-enabled workflows and scalable applications.',
  metadataBase: new URL('https://nafizur-portfolio.vercel.app'),
  keywords: [
    'Nafizur Rahman',
    'computer science student',
    'portfolio',
    'Next.js',
    'React',
    'AI workflows',
    'software engineer',
  ],
  icons: {
    icon: '/chatbot-mascot.png',
    shortcut: '/chatbot-mascot.png',
    apple: '/chatbot-mascot.png',
  },
  openGraph: {
    title: 'Nafizur Rahman | CS Student',
    description:
      'Explore a night-sky inspired portfolio featuring AI-enabled projects, resume access, and interview-ready highlights.',
    type: 'website',
    images: [
      {
        url: '/nafizur-headshot.png',
        alt: 'Portrait of Nafizur Rahman',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nafizur Rahman | CS Student',
    description:
      'Night-sky portfolio featuring AI-enabled workflows, polished project showcases, and interview-ready highlights.',
    images: ['/nafizur-headshot.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
