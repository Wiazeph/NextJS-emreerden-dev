import React from 'react'
import PageHeaderComponent from '../page-header'

type Props = {}

const PortfolioPageComponent = (props: Props) => {
  return (
    <main className="Portfolio Page">
      <div className="Page-Content">
        <PageHeaderComponent
          pageTitle="portfolio."
          pageDescription="All the work I have completed and am still updating"
        />
      </div>
    </main>
  )
}

export default PortfolioPageComponent
