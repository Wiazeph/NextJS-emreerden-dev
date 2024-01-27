import React from 'react'
import PageHeaderComponent from '../../page-header'
import Browser from '@/utils/consts/pages/utilities/browser'

type Props = {}

const BrowserPageComponent = (props: Props) => {
  return (
    <main className="Browser Extensions Page">
      <div className="Page-Content">
        <PageHeaderComponent
          pageTitle="browser exts."
          pageDescription="Useful, efficient tools and resources I use"
        />

        <ul className="Browser-Extensions-List Main-List-Card">
          {Browser.map((extension, index) => (
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

export default BrowserPageComponent
