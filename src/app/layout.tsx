import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@components/header/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Impact commerce'
};

export default function RootLayout({
    children
}: Readonly<{
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header/>
                <main className='container'>{children}</main>
            </body>
        </html>
    );
}
