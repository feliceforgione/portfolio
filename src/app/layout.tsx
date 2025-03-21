import { Suspense } from 'react';
import type { Metadata } from 'next';
import { HomeFallback } from '@/components/HomeFallback';
import { Navbar } from '@/components/NavBar';
import SocialNavBar from '@/components/SocialNavBar';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ReactScan } from '@/lib/reactscan';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Felice Forgione Portfolio',
  description:
    'Felice Forgione portfolio listing projects, expertise, opportunities and contact details',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-thumb-sky-800 scrollbar-track-slate-800"
    >
      {process.env.NODE_ENV === 'development' && <ReactScan />}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Suspense fallback={<HomeFallback />}>
          <div className=" ">
            <Navbar />
            <SocialNavBar />
            <main className="">{children}</main>
            <Footer />
          </div>
        </Suspense>
      </body>
    </html>
  );
}
