import { FiMail } from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa'

const ContactLinks = [
  {
    name: 'Telegram',
    path: 'https://t.me/Wiazeph',
    bgColor: 'bg-blue-50',
    hoverColor: 'bg-blue-100',
    icon: <FaTelegramPlane />,
  },
  {
    name: 'E-Mail',
    path: 'mailto:emreerden@pm.me',
    bgColor: 'bg-red-50',
    hoverColor: 'bg-red-100',
    icon: <FiMail />,
  },
]

export default ContactLinks
