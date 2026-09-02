import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chandra OCR | Real5-OmniDocBench Showcase',
  description: 'Showcasing perfect OCR extraction quality on all 1,350 pages of Real5-OmniDocBench using Chandra vision model with vLLM on 2×T4 GPUs.',
  keywords: ['OCR', 'document parsing', 'vLLM', 'Chandra', 'OmniDocBench', 'AI', 'benchmark'],
  openGraph: {
    title: 'Chandra OCR | Real5-OmniDocBench Showcase',
    description: '1350 pages extracted flawlessly. Side-by-side viewer of images and extracted markdown.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
