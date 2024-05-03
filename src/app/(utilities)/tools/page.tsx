import type { Metadata } from 'next'
import React from 'react'
//
import ToolsPageComponent from '@/components/pages/utilities/tools'

export const metadata: Metadata = {
  title: 'Tools - Emre Erden',
  description: "Emre Erden's Tools",
}

type Props = {}

const ToolsPage = (props: Props) => {
  return <ToolsPageComponent />
}

export default ToolsPage
