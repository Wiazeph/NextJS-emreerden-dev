import React from 'react'
//
import { VSCode } from '@/constants/pages/utilities/vscode'
//
import PageHeaderComponent from '@/components/page-header'
import UtilitiesListComponent from '@/components/utilities-list'

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
