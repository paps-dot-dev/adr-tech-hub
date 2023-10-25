import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '<Welcome to ADR OS/>',
  description: 'The Operating System that fuels ADR.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta
          property='og:image'
          content='http://adr2021.wpengine.com/wp-content/uploads/2021/02/ADR-B-3.png'
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
