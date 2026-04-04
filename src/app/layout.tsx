import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import { CustomCursor } from '@/components/CustomCursor';
import { CursorSpotlight } from '@/components/CursorSpotlight';
import { Navbar } from '@/components/Navbar';
import { BackToTop } from '@/components/BackToTop';
import { Toaster } from '@/components/ui/sonner';
import { Footer } from '@/components/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SRM Insider | Your Campus. Smarter.',
  description: 'Premium campus content platform for Placements, Internships, and Campus Life.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  openGraph: {
    title: 'SRM Insider',
    description: 'Premium campus content platform for Placements, Internships, and Campus Life.',
    url: 'https://srm-insider.vercel.app',
    siteName: 'SRM Insider',
    images: [
      {
        url: 'https://srm-insider.vercel.app/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.className} min-h-screen bg-background relative selection:bg-indigo-500/30 overflow-x-hidden text-foreground flex flex-col`}>
        {/* Global Abstract Background */}
        <div className="ambient-blob-indigo dark:block hidden"></div>
        <div className="ambient-blob-orange dark:block hidden"></div>
        <div className="noise-bg opacity-30 dark:opacity-100"></div>

        <Providers>
          <CustomCursor />
          <CursorSpotlight />
          <Navbar />
          <main className="pt-20 min-h-[calc(100vh-5rem)] relative z-10 flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <BackToTop />
          <Toaster position="bottom-right" theme="dark" />
        </Providers>
      </body>
    </html>
  );
}
