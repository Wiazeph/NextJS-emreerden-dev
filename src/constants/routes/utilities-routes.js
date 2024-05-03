import { VscTools } from 'react-icons/vsc'
import { IoExtensionPuzzleOutline } from 'react-icons/io5'
import { VscExtensions } from 'react-icons/vsc'

export const UtilitiesRoutes = [
  {
    name: 'Tools',
    path: '/tools',
    icon: <VscTools />,
  },
  {
    name: 'Browser Exts.',
    path: '/browser-extensions',
    icon: <IoExtensionPuzzleOutline />,
  },
  {
    name: 'VSCode Exts.',
    path: '/vscode-extensions',
    icon: <VscExtensions />,
  },
]
