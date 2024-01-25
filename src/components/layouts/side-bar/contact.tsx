import React from 'react'
import ContactLinks from '@/utils/consts/contact'

type Props = {}

const ContactComponent = (props: Props) => {
  return (
    <div className="Contact flex flex-col gap-y-4">
      <div className="text-center font-medium text-sm text-zinc-600 tracking-[0.5px]">
        Contact Me!
      </div>

      <ul className="Contact-List flex flex-wrap justify-center gap-4">
        {ContactLinks.map((contact, index) => (
          <li key={index} className="w-36">
            <a
              href={contact.path}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 flex items-center justify-center gap-x-2.5 border rounded-xl shadow-sm ${
                contact.bgColor
              } ${'hover:' + contact.hoverColor}`}
            >
              <div className="text-lg">{contact.icon}</div>

              <div className="text-sm">{contact.name}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactComponent
