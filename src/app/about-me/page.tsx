import type { Metadata } from 'next'
import React from 'react'
import AboutComponent from '@/components/pages/about'

export const metadata: Metadata = {
  title: 'About - Emre Erden',
  description: "Emre Erden's About",
}

type Props = {}

const AboutPage = (props: Props) => {
  return <AboutComponent />
}

export default AboutPage
