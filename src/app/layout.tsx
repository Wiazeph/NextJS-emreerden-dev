import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/assets/css/index.css'
import SideBarLayout from '@/components/layouts/side-bar'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
})

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
      <body className={poppins.className}>
        <SideBarLayout />

        {children}
      </body>
    </html>
  )
}
