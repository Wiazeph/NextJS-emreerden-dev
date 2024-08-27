import React from 'react'
//
import { GoLink } from 'react-icons/go'

import { Experience } from '@/types/experience'

const ExperienceCardComponent = (props: Experience) => {
  return (
    <li className="relative max-w-[550px] list-none before:content-[''] before:w-4 before:h-4 before:border-2 before:dark:border-zinc-600 before:bg-zinc-100 before:dark:bg-zinc-800 before:rounded-full before:absolute before:-left-2 before:top-[34px]">
      <div className="flex flex-col gap-y-4 border-l dark:border-zinc-600">
        <div className="flex flex-col gap-y-2 ml-6">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            {props.date}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <img
              src={props.icon}
              alt={props.name}
              className="w-6 h-6 rounded-full"
            />

            <a
              href={props.path}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors font-medium"
            >
              {props.name}
            </a>

            <div className="flex gap-x-2 items-center">
              <div className="hidden sm:block text-zinc-600 dark:text-zinc-400">
                -
              </div>

              <div className="text-zinc-700 dark:text-zinc-300">
                {props.position}
              </div>
            </div>
          </div>
        </div>

        {props.projects && (
          <div className="flex flex-col gap-y-4">
            {props.projects
              .slice()
              .reverse()
              .map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-y-5 border ml-6 w-fit dark:border-zinc-800 rounded-md p-5 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group"
                >
                  <a
                    href={project.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-x-2 items-center hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors w-fit"
                  >
                    <div className="text-base">{project.name}</div>

                    <div className="text-sm">
                      <GoLink />
                    </div>
                  </a>

                  <div className="text-zinc-600 dark:text-zinc-400 -mt-1 text-sm text-left">
                    {project.description}
                  </div>

                  {project.stack && (
                    <div className="flex gap-3 flex-wrap">
                      {project.stack.map((stack, index) => (
                        <div
                          key={index}
                          className="group-hover:border-zinc-300 transition-colors border dark:border-zinc-700 px-2.5 py-0.5 h-fit rounded-full text-xs dark:bg-zinc-800/80 group-hover:dark:border-zinc-700"
                        >
                          {stack}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    </li>
  )
}

export default ExperienceCardComponent
