
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'EduCompare India',
  description: 'Compare India\'s top colleges and make informed decisions.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
