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

      <div className={`${props.name}-List Side-Bar-Card-List`}>
        {props.constName.map((item, index) => (
          <a
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="Side-Bar-Card group"
          >
            <div className="Side-Bar-Card-Hover group-hover:ml-2">
              {item.icon}

              <div className="text-sm">{item.name}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SideBarListComponent
