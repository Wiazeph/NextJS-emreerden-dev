import React from 'react'
import SocialLinks from '@/utils/consts/side-bar/socials'

type Props = {}

const SocialsComponent = (props: Props) => {
  return (
    <div className="Socials flex flex-col gap-y-4">
      <div className="text-center font-medium text-sm text-zinc-600 tracking-[0.5px]">
        Follow Me!
      </div>

      <ul className="Socials-List flex flex-wrap justify-center gap-4">
        {SocialLinks.map((social, index) => (
          <li key={index} className="w-34">
            <a
              href={social.path}
              target="_blank"
              rel="noopener noreferrer"
              className={`Main-Card ${social.bgColor} ${
                'hover:' + social.hoverColor
              }`}
            >
              <div className="text-lg">{social.icon}</div>

              <div className="text-sm">{social.name}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialsComponent
