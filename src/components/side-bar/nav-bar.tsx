import React from 'react'
import Link from 'next/link'
import Routes from '@/utils/consts/routes'

type Props = {}

const NavBarComponent = (props: Props) => {
  return (
    <div className="Nav-Bar Side-Bar-Section-Layout">
      <div className="Side-Bar-Title">Navigation</div>

      <nav className="Routes-List Side-Bar-Card-List">
        {Routes.map((route, index) => (
          <Link
            key={index}
            href={route.path}
            className="-mx-2 py-1.5 px-2 text-sm font-medium rounded-md group Side-Bar-Hover-Color"
          >
            <div className="group-hover:ml-2 transition-all">{route.name}</div>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default NavBarComponent
