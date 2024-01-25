import React from 'react'
import Link from 'next/link'
import Routes from '@/utils/consts/routes'

type Props = {}

const NavBarComponent = (props: Props) => {
  return (
    <nav className="Nav-Bar pt-6 pb-12 sm:pt-7 sm:pb-14 md:pt-8 md:pb-16 mdl:py-10 lg:py-12 lgx:py-14 xl:py-16 flex justify-center md:justify-normal gap-x-4 overflow-x-auto no-scrollbar">
      {Routes.map((route, index) => (
        <Link
          key={index}
          href={route.path}
          className="flex gap-x-4 hover:text-zinc-500 transition-colors duration-200"
        >
          <div>{route.name}</div>

          {index !== Routes.length - 1 && (
            <div className="hidden sm:block text-zinc-200">{'/'}</div>
          )}
        </Link>
      ))}
    </nav>
  )
}

export default NavBarComponent
