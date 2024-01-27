import React from 'react'

type Props = {
  name: string
  title: string
  constName: {
    name: string
    path: string
    icon: JSX.Element
  }[]
}

const SideBarListComponent = (props: Props) => {
  return (
    <div className={`${props.name} Side-Bar-Section-Layout`}>
      <div className="Side-Bar-Title">{props.title}</div>

      <ul className={`${props.name}-List Side-Bar-Card-List`}>
        {props.constName.map((item, index) => (
          <li key={index} className="Side-Bar-Card group">
            <a
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2 group-hover:ml-2 transition-all"
            >
              <div className="text-lg">{item.icon}</div>

              <div>{item.name}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBarListComponent
