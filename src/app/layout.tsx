import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/assets/css/index.css'
import SideBarComponent from '@/components/layouts/side-bar'
import NavBarComponent from '@/components/nav-bar'

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
        <SideBarComponent />

        <div className="container md:h-dvh md:overflow-y-auto">
          <NavBarComponent />

          {children}
        </div>
      </body>
    </html>
  )
}
