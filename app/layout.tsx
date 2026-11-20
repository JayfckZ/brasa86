import type { Metadata } from 'next'
import { Playfair_Display, Manrope } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })

export const metadata: Metadata = {
  title: 'BRASA 86 — Steakhouse & Bar | Rio de Janeiro',
  description: 'Cortes selecionados, fogo vivo e coquetelaria autoral. Conheça o cardápio da BRASA 86 e reserve sua mesa. Projeto demonstrativo.',
  openGraph: {
    title: 'BRASA 86 — Steakhouse & Bar',
    description: 'Muito além da carne. Uma experiência em cada corte.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR' className={`${playfair.variable} ${manrope.variable}`}>
      <body className='antialiased'>{children}</body>
    </html>
  )
}
