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

const siteTitle = 'BlotoPay - Organisez votre cercle d\'épargne (Daret) au Maroc'
const siteDescription = 'Outil gratuit pour suivre les contributions de votre tontine (Daret). Aucun paiement dans l\'app — suivi et rappels uniquement. Épargne collective.'

export const metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} ${tajawal.variable}`}>
      <body className="bg-banking-light min-h-screen">
        {children}
      </body>
    </html>
  )
}