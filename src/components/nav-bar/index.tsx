import React from 'react'
import Link from 'next/link'
import Routes from '@/utils/consts/routes'

type Props = {}

const NavBarComponent = (props: Props) => {
  return (
    <nav className="Nav-Bar Main-Padding flex gap-x-4">
      {Routes.map((route, index) => (
        <Link
          key={index}
          href={route.path}
          className="flex gap-x-4 hover:text-zinc-500 transition-colors duration-200"
        >
          <div>{route.name}</div>
          {index !== Routes.length - 1 && (
            <div className="text-zinc-200">{'/'}</div>
          )}
        </Link>
      ))}
    </nav>
  )
}

export default NavBarComponent
