import { IoLogoHtml5, IoLogoCss3, IoLogoSass } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoGit,
} from 'react-icons/bi'
import { SiNextdotjs } from 'react-icons/si'
import { RiSupabaseFill } from 'react-icons/ri'

export const Skills = [
  {
    name: 'HTML',
    path: 'https://www.w3schools.com/html/default.asp',
    icon: <IoLogoHtml5 />,
  },
  {
    name: 'CSS',
    path: 'https://css-tricks.com/almanac/',
    icon: <IoLogoCss3 />,
  },
  {
    name: 'SASS/SCSS',
    path: 'https://sass-lang.com/',
    icon: <IoLogoSass />,
  },
  {
    name: 'Tailwind CSS',
    path: 'https://tailwindcss.com/',
    icon: <BiLogoTailwindCss />,
  },
  {
    name: 'JavaScript',
    path: 'https://javascript.info/',
    icon: <BiLogoJavascript />,
  },
  {
    name: 'React',
    path: 'https://react.dev/',
    icon: <FaReact />,
  },
  {
    path: 'https://zustand-demo.pmnd.rs/',
    name: 'Zustand',
  },
  {
    name: 'Next.js',
    path: 'https://nextjs.org/',
    icon: <SiNextdotjs />,
  },
  {
    name: 'TypeScript',
    path: 'https://www.typescriptlang.org/',
    icon: <BiLogoTypescript />,
  },
  {
    name: 'Langchain',
    path: 'https://js.langchain.com/docs/get_started/introduction/',
  },
  {
    name: 'Supabase',
    path: 'https://supabase.com/',
    icon: <RiSupabaseFill />,
  },
  {
    name: 'Git',
    path: 'https://www.w3schools.com/git/default.asp',
    icon: <BiLogoGit />,
  },
]
