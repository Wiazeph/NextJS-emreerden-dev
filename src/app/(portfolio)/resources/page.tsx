import type { Metadata } from 'next'
import React from 'react'
//
import ResourcesPageComponent from '@/components/pages/portfolio/resources'

export const metadata: Metadata = {
  title: 'Resources - Emre Erden',
  description: "Emre Erden's Resources",
}

type Props = {}

const ResourcesPage = (props: Props) => {
  return <ResourcesPageComponent />
}

export default ResourcesPage
