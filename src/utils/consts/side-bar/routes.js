import { RiHomeSmile2Line } from 'react-icons/ri'
import { LuBadgeInfo } from 'react-icons/lu'
import { BsStars } from 'react-icons/bs'
import { MdOutlineWorkspaces } from 'react-icons/md'
import { VscTools } from 'react-icons/vsc'

const Routes = [
  {
    path: '/',
    name: 'Hello',
    icon: <RiHomeSmile2Line />,
  },
  {
    path: '/whoami',
    name: 'Who Am I',
    icon: <LuBadgeInfo />,
  },
  {
    path: '/skills',
    name: 'Skills',
    icon: <BsStars />,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    icon: <MdOutlineWorkspaces />,
  },
  {
    path: '/utilities',
    name: 'Utilities',
    icon: <VscTools />,
  },
]

export default Routes
