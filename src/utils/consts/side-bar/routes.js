import { RiHomeSmile2Line } from 'react-icons/ri'
import { LuBadgeInfo } from 'react-icons/lu'
import { BsStars } from 'react-icons/bs'
import { MdOutlineWorkspaces } from 'react-icons/md'
import { VscTools } from 'react-icons/vsc'

const Routes = [
  {
    name: 'Hello',
    path: '/',
    icon: <RiHomeSmile2Line />,
  },
  {
    name: 'Who Am I',
    path: '/about-me',
    icon: <LuBadgeInfo />,
  },
  {
    name: 'Skills',
    path: '/skills',
    icon: <BsStars />,
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
    icon: <MdOutlineWorkspaces />,
  },
]

export default Routes
