import React from 'react'
//
import { Browser } from '@/constants/pages/utilities/browser'
//
import PageHeaderComponent from '@/components/page-header'
import UtilitiesListComponent from '@/components/utilities-list'

type Props = {}

const BrowserPageComponent = (props: Props) => {
  return (
    <main className="Browser-Extensions Page">
      <div className="Page-Content">
        <PageHeaderComponent
          pageTitle="browser exts."
          pageDescription="Useful and efficient Browser Add-ons I use"
        />

        <UtilitiesListComponent name="Browser" constName={Browser} />
      </div>
    </main>
  )
}

export default BrowserPageComponent
