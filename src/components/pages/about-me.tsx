'use client'

import React from 'react'
//
import { motion } from 'framer-motion'

type Props = {}

const AboutPageComponent = (props: Props) => {
  return (
    <main className="About Page">
      <div className="Page-Content">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 2 * 0.1 }}
          className="Page-Title"
        >
          who am i.
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 3 * 0.1 }}
          className="text-lg text-center mdl:text-left"
        >
          First of all, Hello Mate! My name is Emre and I'm 23 years old. I live
          in{' '}
          <a
            href="https://goo.gl/maps/cadu4sCBbzi4B6F98"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            Ankara/Turkey
          </a>
          . In the last years of secondary school, my interest in the world of
          informatics started. I've been learning since then. I'm working to be
          an experienced developer. In this profession, I'm open to learning and
          improving myself. I enjoy learning new things and constantly improving
          myself.
        </motion.div>

        <div className="flex flex-col gap-y-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 4 * 0.1 }}
            className="text-sm text-zinc-600 dark:text-zinc-400"
          >
            What I like to do and my hobbies are:
          </motion.div>

          <div className="flex flex-col gap-y-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 5 * 0.1 }}
            >
              I love watching Movies and TV Series. And I like to talk to people
              about them. If you want to see the movies I watched and my watch
              list:{' '}
              <a
                target="_blank"
                href="https://letterboxd.com/Wiazeph/"
                rel="noopener noreferrer"
                className="underline hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
              >
                My Letterboxd Account
              </a>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 6 * 0.1 }}
            >
              I love playing computer games since childhood. It's something I
              can never give up. If you are interested in games, you can check{' '}
              <a
                target="_blank"
                href="https://steamcommunity.com/id/Wiazeph"
                rel="noopener noreferrer"
                className="underline hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
              >
                My Steam Account
              </a>{' '}
              for the games I play and add me as a friend.
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 7 * 0.1 }}
            >
              Also, I have to say that finding new songs and creating playlists
              on Spotify are among my hobbies. You can check{' '}
              <a
                target="_blank"
                href="https://open.spotify.com/user/gb0jo18xvox7w4gmijbj3l301?si=089ed329e6da4203"
                rel="noopener noreferrer"
                className="underline hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
              >
                My Spotify Account
              </a>{' '}
              for playlists.
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutPageComponent
