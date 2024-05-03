import type { Metadata } from 'next'
import React from 'react'
//
import SkillsComponent from '@/components/pages/skills'

export const metadata: Metadata = {
  title: 'Skills - Emre Erden',
  description: "Emre Erden's Skills",
}

type Props = {}

const SkillsPage = (props: Props) => {
  return <SkillsComponent />
}

export default SkillsPage
