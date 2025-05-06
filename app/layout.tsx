import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/Footer';
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CmdStack',
  description: 'Your one-stop resource for commands across popular development frameworks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
