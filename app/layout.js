import { Inter, Playfair_Display, Tajawal } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const tajawal = Tajawal({ 
  weight: ['400', '500', '700'],
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-tajawal',
});

// Set in .env: NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com (no trailing slash)
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.blotopay.com'

const siteTitle = 'BlotoPay - Daret & Épargne collective au Maroc | Fintech Morocco'
const siteDescription = 'App gratuite Daret (tontine) au Maroc : organisez et suivez votre cercle d\'épargne rotative. Savings circle, pas de paiement dans l\'app. Fintech marocaine — suivi et rappels uniquement.'

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteTitle,
    template: '%s | BlotoPay Daret Maroc',
  },
  description: siteDescription,
  keywords: [
    'daret',
    'daret maroc',
    'tontine maroc',
    'épargne collective',
    'savings circle morocco',
    'fintech morocco',
    'fintech maroc',
    'ROSCA maroc',
    'cercle épargne',
    'BlotoPay',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    locale: 'fr_MA',
    url: baseUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'BlotoPay',
      url: baseUrl,
      description: siteDescription,
      areaServed: { '@type': 'Country', name: 'Morocco' },
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'BlotoPay - Daret & Épargne collective au Maroc',
      description: siteDescription,
      publisher: { '@id': `${baseUrl}/#organization` },
      inLanguage: 'fr-MA',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${baseUrl}/cercles` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} ${tajawal.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-banking-light min-h-screen">
        {children}
      </body>
    </html>
  )
}