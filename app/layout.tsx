import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/layout/theme-provider';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dibuiltadi - Software House and Development Agency',
  description: ''
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background', inter.className)}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
