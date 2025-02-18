import type { Metadata } from 'next';
import type React from 'react';

export const metadata: Metadata = {
  title: 'Casio News',
  description: 'Discover news about Casio\'s products and services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen text-black">{children}</main>
  );
}
