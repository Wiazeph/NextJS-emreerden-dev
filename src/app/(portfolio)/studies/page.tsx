import type { Metadata } from 'next'
import React from 'react'
//
import StudiesPageComponent from '@/containers/pages/portfolio/studies'

export const metadata: Metadata = {
  title: 'Studies - Emre Erden',
  description: "Emre Erden's Studies",
}

type Props = {}

const StudiesPage = (props: Props) => {
  return <StudiesPageComponent />
}

export default StudiesPage
