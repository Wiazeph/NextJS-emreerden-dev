import React from 'react'
import Skills from '@/utils/consts/skills'

type Props = {}

const SkillsPageComponent = (props: Props) => {
  return (
    <main className="Skills Page">
      <div className="Page-Title">skills.</div>

      <ul className="Skills-List max-w-[700px] flex flex-wrap gap-4">
        {Skills.map((skill, index) => (
          <li key={index} className="w-52">
            <a
              href={skill.path}
              target="_blank"
              rel="noopener noreferrer"
              className="Main-Card"
            >
              <div className="text-2xl">{skill.icon}</div>

              <div>{skill.name}</div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default SkillsPageComponent
