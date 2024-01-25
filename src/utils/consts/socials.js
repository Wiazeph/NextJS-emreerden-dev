import {
  FiTwitter,
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiCodepen,
} from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa'

const SocialLinks = [
  {
    name: 'Twitter',
    path: 'https://twitter.com/Wiazeph',
    bgColor: 'bg-blue-50',
    hoverColor: 'bg-blue-100',
    icon: <FiTwitter />,
  },
  {
    name: 'Instagram',
    path: 'https://instagram.com/Wiazeph',
    bgColor: 'bg-red-50',
    hoverColor: 'bg-red-100',
    icon: <FiInstagram />,
  },
  {
    name: 'GitHub',
    path: 'https://github.com/Wiazeph',
    bgColor: 'bg-gray-50',
    hoverColor: 'bg-gray-100',
    icon: <FiGithub />,
  },
  {
    name: 'LinkedIn',
    path: 'https://linkedin.com/in/Wiazeph',
    bgColor: 'bg-blue-50',
    hoverColor: 'bg-blue-100',
    icon: <FiLinkedin />,
  },
  {
    name: 'Codepen',
    path: 'https://codepen.io/Wiazeph',
    bgColor: 'bg-stone-50',
    hoverColor: 'bg-stone-100',
    icon: <FiCodepen />,
  },
  {
    name: 'Telegram',
    path: 'https://t.me/Wiazeph',
    bgColor: 'bg-blue-50',
    hoverColor: 'bg-blue-100',
    icon: <FaTelegramPlane />,
  },
]

export default SocialLinks
