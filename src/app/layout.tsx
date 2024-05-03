import type { Metadata } from 'next'
import { Poppins, Caveat } from 'next/font/google'
//
import './globals.css'
//
import SideBarLayout from '@/components/side-bar'
//
import { ThemeProvider } from '@/components/helpers/theme-provider'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
})

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700'],
  style: ['normal'],
  variable: '--font-caveat',
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
    <html lang="en" className={`${caveat.variable}`} suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SideBarLayout />

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
