import type { Metadata } from 'next'
import React from 'react'
import UtilitiesComponent from '@/components/pages/utilities'

export const metadata: Metadata = {
  title: 'Utilities - Emre Erden',
  description: "Emre Erden's Utilities",
}

export default function UtilitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="Utilities Page">
      <UtilitiesComponent />

      {children}
    </main>
  )
}
