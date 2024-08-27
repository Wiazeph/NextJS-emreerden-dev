import React from 'react'
//
import { motion } from 'framer-motion'
//
import { ExperienceData } from '@/constants/pages/home/experience'
import ExperienceCardComponent from './experience-card'

type Props = {}

const ExperienceComponent = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-8 mx-auto mdl:mx-0">
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
        className="flex flex-col gap-y-10"
      >
        {ExperienceData.slice()
          .reverse()
          .map((experience, index) => (
            <ExperienceCardComponent
              key={index}
              name={experience.name}
              icon={experience.icon}
              path={experience.path}
              date={experience.date}
              position={experience.position}
              projects={experience.projects}
            />
          ))}
      </motion.div>
    </div>
  )
}

export default ExperienceComponent
