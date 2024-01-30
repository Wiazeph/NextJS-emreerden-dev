'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Routes from '@/utils/consts/side-bar/nav-bar/routes'
import PortfolioRoutes from '@/utils/consts/side-bar/nav-bar/portfolio-routes'
import UtilitiesRoutes from '@/utils/consts/side-bar/nav-bar/utilities-routes'
import { MdOutlineWorkspaces } from 'react-icons/md'
import { LuUtilityPole } from 'react-icons/lu'
import { IoIosArrowDown } from 'react-icons/io'

type Props = {}

const NavBarComponent = (props: Props) => {
  const [portfolio, setPortfolio] = useState(false)
  const [utilities, setUtilities] = useState(false)

  const toggleIsExpanded = (e: number) => {
    if (e === 1) {
      setPortfolio(!portfolio)
    } else if (e === 2) {
      setUtilities(!utilities)
    }
  }

  const pathname = usePathname()

  return (
    <div className="Nav-Bar Side-Bar-Section-Layout">
      <div className="Side-Bar-Title">Navigation</div>

      <div className="flex flex-col gap-y-1">
        <nav className="Routes-List Side-Bar-Card-List">
          {Routes.map((route, index) => (
            <Link
              key={index}
              href={route.path}
              className={cn(
                'Side-Bar-Card group',
                pathname === route.path ? 'bg-zinc-200' : ''
              )}
            >
              <div className="Side-Bar-Card-Hover group-hover:ml-2">
                {route.icon}

                <div className="text-sm">{route.name}</div>
              </div>
            </Link>
          ))}
        </nav>

        <button className="Side-Bar-Card" onClick={() => toggleIsExpanded(1)}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <MdOutlineWorkspaces />
              <div className="text-sm">Portfolio</div>
            </div>
            <div
              className={cn(
                'transition-all duration-300',
                portfolio && 'rotate-180'
              )}
            >
              <IoIosArrowDown />
            </div>
          </div>
        </button>

        <nav
          className={cn(
            'Portfolio-Routes-List Side-Bar-Card-List relative -left-2 w-[calc(100%+16px)] h-0 opacity-0 overflow-hidden transition-all duration-300',
            portfolio && 'h-[104px] opacity-100'
          )}
        >
          {PortfolioRoutes.map((route, index) => (
            <Link
              key={index}
              href={route.path}
              className={cn(
                'Side-Bar-Card group',
                pathname === route.path ? 'bg-zinc-200' : ''
              )}
            >
              <div className="Side-Bar-Card-Hover group-hover:ml-2 pl-2">
                {route.icon}

                <div className="text-sm">{route.name}</div>
              </div>
            </Link>
          ))}
        </nav>

        <button className="Side-Bar-Card" onClick={() => toggleIsExpanded(2)}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <LuUtilityPole />
              <div className="text-sm">Utilities</div>
            </div>
            <div
              className={cn(
                'transition-all duration-300',
                utilities && 'rotate-180'
              )}
            >
              <IoIosArrowDown />
            </div>
          </div>
        </button>

        <nav
          className={cn(
            'Utilities-Routes-List Side-Bar-Card-List relative -left-2 w-[calc(100%+16px)] h-0 opacity-0 overflow-hidden transition-all duration-300',
            utilities && 'h-[104px] opacity-100'
          )}
        >
          {UtilitiesRoutes.map((route, index) => (
            <Link
              key={index}
              href={route.path}
              className={cn(
                'Side-Bar-Card group',
                pathname === route.path ? 'bg-zinc-200' : ''
              )}
            >
              <div className="Side-Bar-Card-Hover group-hover:ml-2 pl-2">
                {route.icon}

                <div className="text-sm">{route.name}</div>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default NavBarComponent
