import type { Metadata } from 'next'
import React from 'react'
//
import VSCodeComponent from '@/components/pages/utilities/vscode'

export const metadata: Metadata = {
  title: 'VSCode Extensions - Emre Erden',
  description: "Emre Erden's VSCode Extensions",
}

type Props = {}

const VSCodePage = (props: Props) => {
  return <VSCodeComponent />
}

export default VSCodePage
