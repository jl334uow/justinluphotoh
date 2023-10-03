import './globals.css'
import { Bebas_Neue, Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Justin Lu',
  description: 'Created by Justin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bebasNeue.className}>{children}</body>
    </html>
  )
}
