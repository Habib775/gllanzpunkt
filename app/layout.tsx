import type { Metadata } from 'next'
import { Inter, Noto_Sans_Arabic } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const notoSansArabic = Noto_Sans_Arabic({ subsets: ['arabic'] })

export const metadata: Metadata = {
  title: 'Glanzpunkt - Professionelle Reinigungsdienstleistungen',
  description: 'Weil Ihr Glanz unser Punkt ist. Professionelle Reinigung für Ihr Zuhause und Büro.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${inter.className} ${notoSansArabic.className}`}>
        {children}
      </body>
    </html>
  )
}

