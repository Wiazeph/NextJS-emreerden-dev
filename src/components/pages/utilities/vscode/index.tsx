import React from 'react'
//
import VSCode from '@/utils/consts/pages/utilities/vscode'
//
import PageHeaderComponent from '@/components/pages/page-header'
import UtilitiesListComponent from '../utilities-list'

type Props = {}

const VSCodePageComponent = (props: Props) => {
  return (
    <main className="VSCode-Extensions Page">
      <div className="Page-Content">
        <PageHeaderComponent
          pageTitle="vscode exts."
          pageDescription="Useful and efficient VSCode Extensions I use"
        />

        <UtilitiesListComponent name="VSCode" constName={VSCode} />
      </div>
    </main>
  )
}

export default VSCodePageComponent
