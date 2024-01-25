import React from 'react'
import Tools from '@/utils/consts/utilities/tools'

type Props = {}

const ToolsPageComponent = (props: Props) => {
  return (
    <ul className="Tools-List List-Card">
      {Tools.map((tool, index) => (
        <li key={index} className="w-44 mdl:w-48 lg:w-52">
          <a
            href={tool.path}
            target="_blank"
            rel="noopener noreferrer"
            className="Main-Card text-sm sm:text-base"
          >
            {tool.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default ToolsPageComponent
