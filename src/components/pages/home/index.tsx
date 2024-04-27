'use client'

import React from 'react'
//
import { motion } from 'framer-motion'

type Props = {}

const HomePageComponent = (props: Props) => {
  return (
    <main className="Home Page flex flex-col justify-center">
      <div className="Page-Content">
        <div className="flex flex-col items-center mdl:items-start gap-y-8 text-center mdl:text-left">
          <div className="flex flex-col gap-y-4">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 2 * 0.1 }}
              className="font-semibold text-zinc-400 text-lg sm:text-xl md:text-2xl"
            >
              Hi 👋, I am
            </motion.span>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 3 * 0.1 }}
              className="font-Caveat text-6xl md:text-7xl"
            >
              Emre Erden
            </motion.h1>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 4 * 0.1 }}
              className="font-semibold text-xl sm:text-2xl md:text-3xl"
            >
              <span className="text-zinc-400">{'<'}</span>

              <span className="sm:ml-0.5 text-pink-500 dark:text-pink-400">
                Front-End Developer
              </span>

              <span className="text-zinc-400">{' />'}</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 5 * 0.1 }}
            className="max-w-[550px] mdl:max-w-[650px] mdl:text-lg"
          >
            I'm working to be an experienced developer in the Front-End world.
            In this profession, I'm open to learning and improving myself. I
            enjoy learning new things and constantly improving myself.
          </motion.p>

          <motion.a
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 6 * 0.1 }}
            href="https://flowcv.com/resume/l3ncgjown0"
            target="_blank"
            rel="noopener noreferrer"
            className="border dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 rounded-md py-2 px-4 w-fit shadow-sm transition-colors"
          >
            View CV
          </motion.a>
        </div>
      </div>
    </main>
  )
}

export default HomePageComponent
