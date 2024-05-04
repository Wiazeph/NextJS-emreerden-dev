'use client'

import React from 'react'
import Image from 'next/image'
//
import { motion } from 'framer-motion'
//
import { Repo } from '@/types/repo'
//
import { FiGithub, FiStar } from 'react-icons/fi'
import { IoLogoVercel } from 'react-icons/io5'

type Props = {
  repoName: Repo[]
}

const PortfolioListComponent = (props: Props) => {
  return (
    <ul className="Repo-List Main-Card-List">
      {props.repoName.map((repo, index) => (
        <motion.li
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 4 * 0.1 }}
          key={index}
          className="Repo-Card h-66 w-76 sm:h-68 sm:w-80 md:h-72 md:w-88 mdl:h-68 lg:h-52 lg:w-full lg:flex rounded-md shadow-sm lg:shadow-none overflow-hidden relative group"
        >
          <div className="Repo-Image relative z-10 lg:z-0 w-full lg:w-2/5 h-full group-hover:blur-sm group-hover:scale-125 lg:group-hover:blur-none lg:group-hover:scale-100 transition-all duration-300 select-none rounded-md border lg:border-l lg:border-y lg:border-r-0 dark:border-zinc-800 lg:rounded-tl-md lg:rounded-bl-md lg:rounded-tr-none lg:rounded-br-none">
            <Image
              src={repo.img}
              alt={repo.name}
              fill
              sizes="100%"
              className="object-cover rounded-md lg:rounded-tl-md lg:rounded-bl-md lg:rounded-tr-none lg:rounded-br-none"
            />
          </div>

          <div className="relative z-20 lg:z-0 group-hover:-translate-y-full lg:group-hover:-translate-y-0 transition-transform duration-300 w-full lg:w-3/5 bg-zinc-50 dark:bg-zinc-800 border-x lg:border-x-0 lg:border-r border-b lg:border-t dark:border-zinc-800 group">
            <div className="Repo-Information opacity-0 lg:opacity-100 group-hover:opacity-100 transition-opacity duration-300 pt-4 pb-2 lg:pb-4 px-2 lg:px-6 flex flex-col gap-y-6 lg:gap-y-4 text-center lg:text-left lg:h-full lg:justify-center">
              <div className="Repo-Name lg:font-medium">{repo.name}</div>

              <div className="Repo-Description text-sm">{repo.desc}</div>

              <div className="flex justify-center lg:justify-start gap-x-2 lg:gap-x-4 text-sm select-none">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Main-Border-Color py-2 px-2 flex items-center gap-x-1.5 rounded-md"
                >
                  <FiGithub />

                  <div className="h-1 w-1 rounded-full bg-zinc-700"></div>

                  <div className="flex items-center gap-x-1.5">
                    <FiStar />

                    <div className="">Star</div>

                    <div className="rounded-full bg-zinc-200 dark:bg-zinc-700 px-[7px] pt-[3px] pb-0.5 leading-4">
                      {repo.stars}
                    </div>
                  </div>
                </a>

                <a
                  href={repo.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Main-Border-Color py-2 px-2 flex items-center gap-x-1.5 rounded-md"
                >
                  <IoLogoVercel />

                  <div className="w-max">Live Action</div>
                </a>
              </div>
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  )
}

export default PortfolioListComponent
