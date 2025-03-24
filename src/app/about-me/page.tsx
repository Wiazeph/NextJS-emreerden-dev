import type { Metadata } from 'next'
import React from 'react'
//
import AboutComponent from '@/containers/pages/about-me'

export const metadata: Metadata = {
  title: 'About - Emre Erden',
  description: "Emre Erden's About",
}

type Props = {}

const AboutPage = (props: Props) => {
  return <AboutComponent />
}

export default AboutPage
