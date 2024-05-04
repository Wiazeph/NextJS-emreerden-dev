import React from 'react'
//
import { GoLink } from 'react-icons/go'

type Props = {
  date: string
  path: string
  name: string
  position: string
  projects?: {
    name: string
    path: string
    description: string
    stack: string[]
  }[]
}

const ExperienceCardComponent = (props: Props) => {
  return (
    <li className="flex flex-col gap-y-4 max-w-[550px]">
      <div className="flex flex-col gap-y-2">
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          {props.date}
        </div>

        <div className="flex gap-x-2 items-baseline">
          <a
            href={props.path}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-zinc-400 dark:hover:text-zinc-400 transition-colors font-medium"
          >
            {props.name}
          </a>

          <div className="text-zinc-600 dark:text-zinc-400">-</div>

          <div className="text-zinc-600 dark:text-zinc-400">
            {props.position}
          </div>
        </div>
      </div>

      {props.projects !== undefined && (
        <div className="flex flex-col gap-y-4 border-l dark:border-zinc-600">
          {props.projects.map((project, index) => (
            <div
              key={index}
              className="relative before:content-[''] before:w-4 before:h-4 before:border-2 before:dark:border-zinc-600 before:bg-zinc-100 before:dark:bg-zinc-800 before:rounded-full before:absolute before:-left-2 before:top-[24px]"
            >
              <div className="border ml-6 w-fit dark:border-zinc-800 rounded-md p-5 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors group">
                <div className="flex flex-col gap-y-5">
                  <a
                    href={project.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-x-2 items-center hover:text-zinc-400 dark:hover:text-zinc-400 transition-colors w-fit"
                  >
                    <div className="text-base">{project.name}</div>

                    <div className="text-sm">
                      <GoLink />
                    </div>
                  </a>

                  <div className="text-zinc-600 dark:text-zinc-400 -mt-1 text-sm text-left">
                    {project.description}
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    {project.stack.map((stack, index) => (
                      <div
                        key={index}
                        className="border dark:border-zinc-700 px-2.5 py-0.5 h-fit rounded-full text-xs dark:bg-zinc-800/80"
                      >
                        {stack}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </li>
  )
}

export default ExperienceCardComponent
