import React from 'react'
import PageHeaderComponent from '../../page-header'
import Tools from '@/utils/consts/pages/utilities/tools'

type Props = {}

const ToolsPageComponent = (props: Props) => {
  return (
    <main className="Tools Page">
      <div className="Page-Content">
        <PageHeaderComponent
          pageTitle="tools."
          pageDescription="Useful, efficient tools and resources I use"
        />

        <ul className="Tools-List Main-List-Card">
          {Tools.map((tool, index) => (
            <li key={index}>
              <a
                href={tool.path}
                target="_blank"
                rel="noopener noreferrer"
                className="Main-Card text-sm"
              >
                {tool.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default ToolsPageComponent
