import React from 'react'
//
import { motion } from 'framer-motion'
//
import { Experience } from '@/constants/pages/home/experience'
import ExperienceCardComponent from './experience-card'

type Props = {}

const ExperienceComponent = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 7 * 0.1 }}
        className="flex gap-x-6 items-center"
      >
        <div className="text-xl text-center mdl:text-left font-medium">
          Experience
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 8 * 0.1 }}
        className="flex gap-x-6"
      >
        <div className="text-lg">2024</div>

        <ul className="flex flex-col gap-y-10 mt-1">
          {Experience[2024].map((experience, index) => (
            <ExperienceCardComponent
              key={index}
              date={experience.date}
              path={experience.path}
              name={experience.name}
              position={experience.position}
              projects={experience.projects}
            />
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default ExperienceComponent
