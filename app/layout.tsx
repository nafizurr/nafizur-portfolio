import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nafizur Rahman | CS Student',
  description:
    'Single-page portfolio for Nafizur Rahman, a computer science student building thoughtful AI-enabled workflows and scalable applications.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
