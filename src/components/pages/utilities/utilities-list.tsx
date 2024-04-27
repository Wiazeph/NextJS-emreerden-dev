'use client'

import React from 'react'
//
import { motion } from 'framer-motion'

type Props = {
  name: string
  constName: {
    name: string
    path: string
  }[]
}

const UtilitiesListComponent = (props: Props) => {
  return (
    <ul
      className={`${props.name}-List flex flex-wrap justify-center mdl:justify-normal gap-4`}
    >
      {props.constName.map((item, index) => (
        <motion.li
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 4 * 0.1 }}
          key={index}
        >
          <a
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className="Main-Card text-sm"
          >
            {item.name}
          </a>
        </motion.li>
      ))}
    </ul>
  )
}

export default UtilitiesListComponent
