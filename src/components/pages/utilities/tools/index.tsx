import React from 'react'
//
import Tools from '@/utils/consts/pages/utilities/tools'
//
import PageHeaderComponent from '@/components/pages/page-header'
import UtilitiesListComponent from '../utilities-list'

type Props = {}

const ToolsPageComponent = (props: Props) => {
  return (
    <main className="Tools Page">
      <div className="Page-Content">
        <PageHeaderComponent
          pageTitle="tools."
          pageDescription="Useful, efficient Tools and Resources I use"
        />

        <UtilitiesListComponent name="Tools" constName={Tools} />
      </div>
    </main>
  )
}

export default ToolsPageComponent
