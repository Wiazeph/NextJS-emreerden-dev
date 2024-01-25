import React from 'react'
import PageHeaderComponent from '../page-header'

type Props = {}

const PortfolioPageComponent = (props: Props) => {
  return (
    <main className="Portfolio Page">
      <PageHeaderComponent
        pageTitle="portfolio."
        pageDescription="All the work I have completed and am still updating"
      />
    </main>
  )
}

export default PortfolioPageComponent
