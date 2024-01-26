import React from 'react'
import Link from 'next/link'
import Routes from '@/utils/consts/routes'

type Props = {}

const NavBarComponent = (props: Props) => {
  return (
    <nav className="Nav-Bar flex flex-col gap-y-1 text-sm">
      {Routes.map((route, index) => (
        <Link
          key={index}
          href={route.path}
          className="group -mx-2 p-2 font-medium rounded-md hover:bg-zinc-200 transition-colors"
        >
          <div className="transition-transform">{route.name}</div>
        </Link>
      ))}
    </nav>
  )
}

export default NavBarComponent
