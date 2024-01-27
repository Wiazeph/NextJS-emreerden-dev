import React from 'react'
import PageHeaderComponent from '../../page-header'
import VSCode from '@/utils/consts/pages/utilities/vscode'

type Props = {}

const VSCodePageComponent = (props: Props) => {
  return (
    <main className="VSCode Extensions Page">
      <div className="Page-Content">
        <PageHeaderComponent
          pageTitle="vscode exts."
          pageDescription="Useful, efficient tools and resources I use"
        />

        <ul className="VSCode-Extensions-List Main-List-Card">
          {VSCode.map((extension, index) => (
            <li key={index}>
              <a
                href={extension.path}
                target="_blank"
                rel="noopener noreferrer"
                className="Main-Card text-sm"
              >
                {extension.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default VSCodePageComponent
