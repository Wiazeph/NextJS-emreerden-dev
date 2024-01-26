import React from 'react'
import PageHeaderComponent from '../page-header'
import Skills from '@/utils/consts/pages/skills'

type Props = {}

const SkillsPageComponent = (props: Props) => {
  return (
    <main className="Skills Page">
      <PageHeaderComponent
        pageTitle="skills."
        pageDescription="Skills I know, I use and currently continue to learn"
      />

      <ul className="Skills-List Main-List-Card">
        {Skills.map((skill, index) => (
          <li key={index}>
            <a
              href={skill.path}
              target="_blank"
              rel="noopener noreferrer"
              className="Main-Card"
            >
              <div className="text-2xl">{skill.icon}</div>

              <div className="text-sm">{skill.name}</div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default SkillsPageComponent
