import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/assets/css/index.css'
import SideBarComponent from '@/components/layouts/side-bar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emre Erden',
  description: "Emre Erden's personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideBarComponent />
        <main>{children}</main>
      </body>
    </html>
  )
}
