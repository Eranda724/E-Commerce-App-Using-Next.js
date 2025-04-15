import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marketplace',
  description: 'A simple marketplace application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-bold text-blue-600">
                Marketplace
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  href="/admin"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Admin
                </Link>
                <Link
                  href="/cart"
                  className="text-gray-600 hover:text-blue-600 flex items-center"
                >
                  <FiShoppingCart className="mr-1" />
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
} 