import type { Metadata } from 'next';
import type React from 'react';

export const metadata: Metadata = {
  title: 'Casio Technologies',
  description: 'Discover Casio\'s innovative technologies and environmental initiatives',
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
