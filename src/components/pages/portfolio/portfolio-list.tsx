import React from 'react'
import Image from 'next/image'
import { Repo } from '@/types/repo'
import { FiGithub, FiStar } from 'react-icons/fi'
import { IoLogoVercel } from 'react-icons/io5'

type Props = {
  repoName: Repo[]
}

const PortfolioListComponent = (props: Props) => {
  return (
    <ul className="Repo-List Main-Card-List">
      {props.repoName.map((repo, index) => (
        <li
          key={index}
          className="Repo-Card h-66 w-72 lg:w-76 lgx:w-80 rounded-md shadow-sm overflow-hidden relative group"
        >
          <div className="Repo-Image relative z-10 w-full h-full group-hover:blur-sm group-hover:scale-125 transition-all duration-300">
            <Image
              src={repo.img}
              alt={repo.name}
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>

          <div className="relative z-20 group-hover:-translate-y-full transition-transform duration-300 w-full bg-zinc-50 border-x border-b group">
            <div className="Repo-Information opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-4 pb-2 lg:pb-4 px-2 lg:px-4 flex flex-col gap-y-6 text-center">
              <div className="Repo-Name">{repo.name}</div>

              <div className="Repo-Description text-sm">{repo.desc}</div>

              <div className="flex justify-center gap-x-2 lg:gap-x-4 text-sm select-none">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2 flex items-center gap-x-1.5 rounded-md border border-zinc-300 hover:bg-zinc-200/50 transition-colors"
                >
                  <FiGithub />

                  <div className="h-1 w-1 rounded-full bg-zinc-700"></div>

                  <div className="flex items-center gap-x-1.5">
                    <FiStar />

                    <div className="">Star</div>

                    <div className="rounded-full bg-zinc-300 px-[7px] pt-[3px] pb-0.5 leading-4">
                      {repo.stars}
                    </div>
                  </div>
                </a>

                <a
                  href={repo.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2 flex items-center gap-x-1.5 rounded-md border border-zinc-300 hover:bg-zinc-200/50 transition-colors"
                >
                  <IoLogoVercel />

                  <div className="w-max">Live Action</div>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default PortfolioListComponent
