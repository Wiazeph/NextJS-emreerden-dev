import React from 'react'
import PageHeaderComponent from '@/components/pages/page-header'
import PortfolioListComponent from '../portfolio-list'

type Props = {}

const ResourcesPageComponent = (props: Props) => {
  return (
    <main className="Resources Page">
      <div className="Page-Content">
        <PageHeaderComponent pageTitle="resources." pageDescription="TEST" />
      </div>

      <PortfolioListComponent />
    </main>
  )
}

export default ResourcesPageComponent
