import React from 'react';
import { Metadata } from 'next';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'Alaska Pete’s restaurant',
  description: 'Alaska Pete’s restaurant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
