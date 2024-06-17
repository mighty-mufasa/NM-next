import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import ThemeProvider from '@/shared/lib/Providers';
import { NextIntlClientProvider, useMessages } from 'next-intl';
<<<<<<< HEAD
import Header from './_components/header/header';

const noto_Sans = Noto_Sans({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Test title',
=======
import Footer from './_components/footer/footer';
import Header from './_components/header/Header';

const noto_Sans = Noto_Sans({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'NFT JET',
>>>>>>> 01bb2b1 (deploy)
  description:
    'test description',
  keywords:
    'test keywords',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logotype.svg',
        href: '/logotype.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logotype dark.svg',
        href: '/logotype dark.svg',
      },
    ],
  },
};

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={noto_Sans.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
<<<<<<< HEAD
=======
            <Footer />
>>>>>>> 01bb2b1 (deploy)
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
