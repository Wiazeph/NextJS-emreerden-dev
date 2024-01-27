'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Routes from '@/utils/consts/side-bar/routes'

type Props = {}

const NavBarComponent = (props: Props) => {
  const pathname = usePathname()

  return (
    <div className="Nav-Bar Side-Bar-Section-Layout">
      <div className="Side-Bar-Title">Navigation</div>

      <nav className="Routes-List Side-Bar-Card-List">
        {Routes.map((route, index) => (
          <Link
            key={index}
            href={route.path}
            className={cn(
              '-mx-2 py-1.5 px-2 text-sm font-medium rounded-md group Main-Hover-Color',
              pathname === route.path ? 'bg-zinc-200' : ''
            )}
          >
            <div className="flex items-center gap-x-2 group-hover:ml-2 transition-all">
              <div className="text-xl">{route.icon}</div>

              <div>{route.name}</div>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default NavBarComponent
