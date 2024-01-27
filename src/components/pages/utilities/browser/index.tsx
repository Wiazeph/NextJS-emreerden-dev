import React from 'react'
import PageHeaderComponent from '../../page-header'
import UtilitiesListComponent from '../utilities-list'
import Browser from '@/utils/consts/pages/utilities/browser'

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
