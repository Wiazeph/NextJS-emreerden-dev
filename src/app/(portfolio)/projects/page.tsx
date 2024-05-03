import type { Metadata } from 'next'
import React from 'react'
//
import ProjectsPageComponent from '@/components/pages/portfolio/projects'

export const metadata: Metadata = {
  title: 'Projects - Emre Erden',
  description: "Emre Erden's Projects",
}

type Props = {}

const ProjectsPage = (props: Props) => {
  return <ProjectsPageComponent />
}

export default ProjectsPage
