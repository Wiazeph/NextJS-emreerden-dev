import { RiHomeSmile2Line } from 'react-icons/ri'
import { LuBadgeInfo } from 'react-icons/lu'
import { BsStars } from 'react-icons/bs'

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
]

export default Routes
