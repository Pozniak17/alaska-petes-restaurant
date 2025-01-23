import React from 'react';
import { Metadata } from 'next';
import './styles/globals.css';
import AppBar from './components/AppBar/AppBar';
import Container from './shared/Container/Container';
import Footer from './components/Footer/Footer';

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
      <body>
        <Container>
          <AppBar />
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
