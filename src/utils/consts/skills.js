import { IoLogoHtml5, IoLogoCss3, IoLogoSass } from 'react-icons/io'
import { FaBootstrap, FaReact, FaVuejs } from 'react-icons/fa'
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoGit,
} from 'react-icons/bi'
import { SiNextdotjs } from 'react-icons/si'

const Skills = [
  {
    path: 'https://www.w3schools.com/html/default.asp',
    name: 'HTML',
    icon: <IoLogoHtml5 />,
  },
  {
    path: 'https://css-tricks.com/almanac/',
    name: 'CSS',
    icon: <IoLogoCss3 />,
  },
  {
    path: 'https://sass-lang.com/',
    name: 'Sass/Scss',
    icon: <IoLogoSass />,
  },
  {
    path: 'https://getbootstrap.com/',
    name: 'Bootstrap',
    icon: <FaBootstrap />,
  },
  {
    path: 'https://tailwindcss.com/',
    name: 'Tailwind CSS',
    icon: <BiLogoTailwindCss />,
  },
  {
    path: 'https://javascript.info/',
    name: 'JavaScript',
    icon: <BiLogoJavascript />,
  },
  {
    path: 'https://react.dev/',
    name: 'React',
    icon: <FaReact />,
  },
  {
    path: 'https://zustand-demo.pmnd.rs/',
    name: 'Zustand',
  },
  {
    path: 'https://www.typescriptlang.org/',
    name: 'TypeScript',
    icon: <BiLogoTypescript />,
  },
  {
    path: 'https://nextjs.org/',
    name: 'Next.js',
    icon: <SiNextdotjs />,
  },
  {
    path: 'https://vuejs.org/',
    name: 'Vue',
    icon: <FaVuejs />,
  },
  {
    path: 'https://pinia.vuejs.org/',
    name: 'Pinia',
  },
  {
    path: 'https://www.w3schools.com/git/default.asp',
    name: 'Git',
    icon: <BiLogoGit />,
  },
]

export default Skills
