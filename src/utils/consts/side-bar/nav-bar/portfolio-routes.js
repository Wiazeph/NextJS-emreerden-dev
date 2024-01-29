import { GrProjects, GrResources } from 'react-icons/gr'
import { BsPersonWorkspace } from 'react-icons/bs'

const PortfolioRoutes = [
  {
    name: 'Projects',
    path: '/projects',
    icon: <GrProjects />,
  },
  {
    name: 'Resources',
    path: '/resources',
    icon: <GrResources />,
  },
  {
    name: 'Studies',
    path: '/studies',
    icon: <BsPersonWorkspace />,
  },
]

export default PortfolioRoutes
