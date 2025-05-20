import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter as a professional font example
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Ensure Toaster is imported

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans', // Use --font-sans as per common practice
});

export const metadata: Metadata = {
  title: 'EduCompare India',
  description: 'Compare India\'s top colleges: fees, scholarships, courses, placements.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
