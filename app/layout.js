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

export const metadata = {
  title: 'BlotoPay - Organisez votre cercle d\'épargne (Daret) au Maroc',
  description: 'Outil gratuit pour suivre les contributions de votre tontine. Nous ne détenons ni ne transférons d\'argent. Épargne collective sans intérêt.',
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