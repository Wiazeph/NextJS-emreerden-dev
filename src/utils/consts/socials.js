import { Twitter, Instagram, Linkedin, Github, Codepen } from 'lucide-react'

const SocialLinks = [
  {
    name: 'Twitter',
    path: 'https://twitter.com/Wiazeph',
    username: '@Wiazeph',
    bgColor: 'bg-blue-50',
    hoverColor: 'bg-blue-100',
    icon: <Twitter size={20} />,
  },
  {
    name: 'Instagram',
    path: 'https://instagram.com/Wiazeph',
    username: '@Wiazeph',
    bgColor: 'bg-red-50',
    hoverColor: 'bg-red-100',
    icon: <Instagram size={20} />,
  },
  {
    name: 'GitHub',
    path: 'https://github.com/Wiazeph',
    username: '@Wiazeph',
    bgColor: 'bg-gray-50',
    hoverColor: 'bg-gray-100',
    icon: <Github size={20} />,
  },
  {
    name: 'LinkedIn',
    path: 'https://linkedin.com/in/Wiazeph',
    username: '@Wiazeph',
    bgColor: 'bg-blue-50',
    hoverColor: 'bg-blue-100',
    icon: <Linkedin size={20} />,
  },
  {
    name: 'Codepen',
    path: 'https://codepen.io/Wiazeph',
    username: '@Wiazeph',
    bgColor: 'bg-stone-50',
    hoverColor: 'bg-stone-100',
    icon: <Codepen size={20} />,
  },
]

export default SocialLinks
