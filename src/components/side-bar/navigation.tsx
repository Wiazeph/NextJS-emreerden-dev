'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
//
import Routes from '@/utils/consts/side-bar/nav-bar/routes'
import PortfolioRoutes from '@/utils/consts/side-bar/nav-bar/portfolio-routes'
import UtilitiesRoutes from '@/utils/consts/side-bar/nav-bar/utilities-routes'
//
import { cn } from '@/lib/utils'
//
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
//
import { MdOutlineWorkspaces } from 'react-icons/md'
import { LuUtilityPole } from 'react-icons/lu'

type Props = {}

const NavigationComponent = (props: Props) => {
  const pathname = usePathname()

  return (
    <div className="Navigation Side-Bar-Section-Layout">
      <div className="Side-Bar-Title">Navigation</div>

      <div className="flex flex-col gap-y-1">
        <nav className="Routes-List Side-Bar-Card-List">
          {Routes.map((route, index) => (
            <Link
              key={index}
              href={route.path}
              className={cn(
                'Side-Bar-Card group',
                pathname === route.path ? 'bg-zinc-200/70' : ''
              )}
            >
              <div className="Side-Bar-Card-Hover group-hover:ml-2">
                {route.icon}

                <div className="text-sm">{route.name}</div>
              </div>
            </Link>
          ))}
        </nav>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none mb-1">
            <AccordionTrigger className="Side-Bar-Card text-sm font-normal hover:no-underline py-1.5">
              <div className="flex items-center gap-x-2">
                <MdOutlineWorkspaces />
                <div className="text-sm">Portfolio</div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="Portfolio-Routes-List Side-Bar-Card-List p-0 relative -left-2 mt-1">
              {PortfolioRoutes.map((route, index) => (
                <Link
                  key={index}
                  href={route.path}
                  className={cn(
                    'Side-Bar-Card group',
                    pathname === route.path ? 'bg-zinc-200' : ''
                  )}
                >
                  <div className="Side-Bar-Card-Hover group-hover:ml-2 pl-5">
                    {route.icon}

                    <div className="text-sm">{route.name}</div>
                  </div>
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="Side-Bar-Card text-sm font-normal hover:no-underline py-1.5">
              <div className="flex items-center gap-x-2">
                <LuUtilityPole />
                <div className="text-sm">Utilities</div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="Utilities-Routes-List Side-Bar-Card-List p-0 relative -left-2 mt-1">
              {UtilitiesRoutes.map((route, index) => (
                <Link
                  key={index}
                  href={route.path}
                  className={cn(
                    'Side-Bar-Card group',
                    pathname === route.path ? 'bg-zinc-200' : ''
                  )}
                >
                  <div className="Side-Bar-Card-Hover group-hover:ml-2 pl-5">
                    {route.icon}

                    <div className="text-sm">{route.name}</div>
                  </div>
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default NavigationComponent
