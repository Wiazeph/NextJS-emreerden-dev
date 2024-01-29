import React from 'react'
import PageHeaderComponent from '@/components/pages/page-header'
import PortfolioListComponent from '../portfolio-list'

type Props = {}

const ProjectsPageComponent = (props: Props) => {
  return (
    <main className="Projects Page">
      <div className="Page-Content">
        <PageHeaderComponent pageTitle="projects." pageDescription="TEST" />
      </div>

      <PortfolioListComponent />
    </main>
  )
}

export default ProjectsPageComponent
