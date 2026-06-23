import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rafael Rolli — Biotechnologist & Founder · AI × Bio',
  description:
    'Rafael Alain Rolli — biotechnologist and founder (M.Sc. Bioengineering, EPFL) leading the science behind autonomous AI drug discovery. Open to science & R&D leadership, AI × bio, and founding roles.',
  openGraph: {
    title: 'Rafael Rolli — Biotechnologist & Founder · AI × Bio',
    description:
      'Leading the science behind autonomous AI peptide drug discovery. Open to science & R&D leadership, AI × bio, and founding roles.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
