import React from 'react'
import PageHeaderComponent from '@/components/pages/page-header'
import PortfolioListComponent from '../portfolio-list'

type Props = {}

const StudiesPageComponent = (props: Props) => {
  return (
    <main className="Studies Page">
      <div className="Page-Content">
        <PageHeaderComponent pageTitle="studies." pageDescription="TEST" />
      </div>

      <PortfolioListComponent />
    </main>
  )
}

export default StudiesPageComponent
