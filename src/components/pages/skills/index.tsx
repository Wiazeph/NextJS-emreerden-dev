import React from 'react'
import Skills from '@/utils/consts/skills'

type Props = {}

const SkillsPageComponent = (props: Props) => {
  return (
    <main className="Skills Page">
      <div className="Page-Title flex flex-col md:flex-row md:flex-wrap items-center md:items-baseline gap-4 text-center md:text-left">
        <div>skills.</div>

        <div className="flex items-center gap-x-2 font-normal text-sm tracking-normal">
          <div className="hidden xl:block text-zinc-400">{'<span>'}</div>

          <div className="sm:text-base text-zinc-600 xl:text-zinc-950">
            Skills I know, I use and currently continue to learn
          </div>

          <div className="hidden xl:block text-zinc-400">{'</span>'}</div>
        </div>
      </div>

      <ul className="Skills-List max-w-[700px] flex flex-wrap justify-center md:justify-normal gap-4">
        {Skills.map((skill, index) => (
          <li key={index} className="w-44 mdl:w-48 lg:w-52">
            <a
              href={skill.path}
              target="_blank"
              rel="noopener noreferrer"
              className="Main-Card"
            >
              <div className="text-2xl">{skill.icon}</div>

              <div className="text-sm sm:text-base">{skill.name}</div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default SkillsPageComponent
