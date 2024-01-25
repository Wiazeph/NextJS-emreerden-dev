import React from 'react'
import SocialLinks from '@/utils/consts/socials'

type Props = {}

const SocialsComponent = (props: Props) => {
  return (
    <ul className="Socials flex flex-wrap justify-center gap-4">
      {SocialLinks.map((social, index) => (
        <li key={index} className="w-36">
          <a
            href={social.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 flex items-center justify-center gap-x-2.5 border rounded-xl shadow-sm ${
              social.bgColor
            } ${'hover:' + social.hoverColor}`}
          >
            <div>{social.icon}</div>

            <div className="text-sm">{social.name}</div>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialsComponent
