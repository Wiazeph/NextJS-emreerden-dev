import type { Metadata } from 'next'
import React from 'react'
import BrowserComponent from '@/components/pages/utilities/browser'

export const metadata: Metadata = {
  title: 'Browser Extensions - Emre Erden',
  description: "Emre Erden's Browser Extensions",
}

type Props = {}

const VSCodePage = (props: Props) => {
  return <BrowserComponent />
}

export default VSCodePage
