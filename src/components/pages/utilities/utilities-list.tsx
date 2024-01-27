import React from 'react'

type Props = {
  name: string
  constName: {
    name: string
    path: string
  }[]
}

const UtilitiesListComponent = (props: Props) => {
  return (
    <ul className={`${props.name}-Extensions-List Main-List-Card`}>
      {props.constName.map((item, index) => (
        <li key={index}>
          <a
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className="Main-Card text-sm"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default UtilitiesListComponent
