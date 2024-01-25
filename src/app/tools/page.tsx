import type { Metadata } from 'next'
import React from 'react'
import ToolsComponent from '@/components/pages/tools'

export const metadata: Metadata = {
  title: 'Tools - Emre Erden',
  description: "Emre Erden's Tools",
}

type Props = {}

const ToolsPage = (props: Props) => {
  return <ToolsComponent />
}

export default ToolsPage
