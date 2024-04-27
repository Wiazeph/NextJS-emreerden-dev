import React from 'react'
//
import Browser from '@/utils/consts/pages/utilities/browser'
//
import PageHeaderComponent from '@/components/pages/page-header'
import UtilitiesListComponent from '../utilities-list'

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
