import React from 'react'
import Tools from '@/utils/consts/pages/utilities/tools'

type Props = {}

const ToolsPageComponent = (props: Props) => {
  return (
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
  )
}

export default ToolsPageComponent
