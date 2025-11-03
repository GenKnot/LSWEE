import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: {
    default: 'LSWEE - Leading Global Supplier of Intelligent Laser Soldering Equipment',
    template: '%s | LSWEE'
  },
  description: 'Revolutionizing precision manufacturing with intelligent laser soldering systems. Leading global supplier of automated manufacturing solutions for microelectronics, connectors, and optical communication.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className={inter.variable}>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
