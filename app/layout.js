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
  title: 'BerberPay - La Solution de Paiement Intelligente au Maroc',
  description: 'Divisez vos achats en paiements sans intérêt. La nouvelle façon de magasiner au Maroc.',
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