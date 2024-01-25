import type { Metadata } from 'next'
import React from 'react'
import PortfolioComponent from '@/components/pages/portfolio'

export const metadata: Metadata = {
  title: 'Portfolio - Emre Erden',
  description: "Emre Erden's Portfolio",
}

type Props = {}

const PortfolioPage = (props: Props) => {
  return <PortfolioComponent />
}

export default PortfolioPage
