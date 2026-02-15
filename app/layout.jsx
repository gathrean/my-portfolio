import { inter, instrumentSerif } from '@/lib/fonts';
import { CustomCursor } from '@/components/CustomCursor/CustomCursor';
import { ImageProtection } from '@/components/ImageProtection';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://gathrean.com'),
  title: {
    default: 'Gathrean Dela Cruz — Software Developer',
    template: '%s',
  },
  description:
    'Gathrean Dela Cruz — Software developer from Vancouver, BC. Building reliable productivity apps, exploring iOS development and AI-powered tooling.',
  openGraph: {
    title: 'Gathrean Dela Cruz — Software Developer',
    description:
      'Software developer from Vancouver, BC. Building reliable productivity apps, exploring iOS development and AI-powered tooling.',
    url: 'https://gathrean.com',
    siteName: 'Gathrean Dela Cruz',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-preview.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gathrean',
    title: 'Gathrean Dela Cruz — Software Developer',
    description:
      'Software developer from Vancouver, BC. Building reliable productivity apps, exploring iOS development and AI-powered tooling.',
    images: ['/images/og-preview.jpg'],
  },
  alternates: {
    canonical: 'https://gathrean.com',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  other: {
    'msapplication-TileColor': '#000000',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gathrean Dela Cruz',
  url: 'https://gathrean.com',
  jobTitle: 'Software Developer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vancouver',
    addressRegion: 'BC',
    addressCountry: 'CA',
  },
  sameAs: [
    'https://www.linkedin.com/in/gathrean/',
    'https://github.com/gathrean',
    'https://x.com/gathrean',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CustomCursor />
        <ImageProtection />
        {children}
      </body>
    </html>
  );
}
