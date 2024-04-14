'use client'

import React from 'react'
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
    <div className="Navigation text-sm">
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
                <div
                  className={cn('text-xl', index === 0 && 'text-[21px] -ml-px')}
                >
                  {route.icon}
                </div>

                {route.name}
              </div>
            </Link>
          ))}
        </nav>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none mb-1">
            <AccordionTrigger className="Side-Bar-Card font-normal hover:no-underline py-2">
              <div className="flex items-center gap-x-2">
                <div className="text-xl">
                  <MdOutlineWorkspaces />
                </div>
                <div>Portfolio</div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex pb-1">
              <div className="relative w-[34px] before:content-[''] before:block before:absolute before:top-2 before:left-[9px] before:w-0.5 before:h-[calc(100%-30px)] before:bg-zinc-200 before:z-10 shrink-0">
                <div className="absolute left-[9px] top-[11px] w-4 h-4 rounded-bl-md border-b-2 border-l-2"></div>

                <div className="absolute left-[9px] top-[52px] w-4 h-4 rounded-bl-md border-b-2 border-l-2"></div>

                <div className="absolute left-[9px] top-[92px] w-4 h-4 rounded-bl-md border-b-2 border-l-2"></div>
              </div>

              <div className="Portfolio-Routes-List Side-Bar-Card-List p-0 mt-2 w-full">
                {PortfolioRoutes.map((route, index) => (
                  <Link
                    key={index}
                    href={route.path}
                    className={cn(
                      'px-3 py-2 rounded-md Main-Hover-Color group',
                      pathname === route.path ? 'bg-zinc-200' : ''
                    )}
                  >
                    <div className="Side-Bar-Card-Hover group-hover:ml-2">
                      <div
                        className={cn(
                          'text-lg',
                          index === 1 && 'text-xl -mx-px'
                        )}
                      >
                        {route.icon}
                      </div>

                      {route.name}
                    </div>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="Side-Bar-Card font-normal hover:no-underline py-2">
              <div className="flex items-center gap-x-2">
                <div className="text-lg ml-px">
                  <LuUtilityPole />
                </div>
                <div>Utilities</div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex pb-1">
              <div className="relative w-[34px] before:content-[''] before:block before:absolute before:top-2 before:left-[9px] before:w-0.5 before:h-[calc(100%-30px)] before:bg-zinc-200 before:z-10 shrink-0">
                <div className="absolute left-[9px] top-[11px] w-4 h-4 rounded-bl-md border-b-2 border-l-2"></div>

                <div className="absolute left-[9px] top-[52px] w-4 h-4 rounded-bl-md border-b-2 border-l-2"></div>

                <div className="absolute left-[9px] top-[92px] w-4 h-4 rounded-bl-md border-b-2 border-l-2"></div>
              </div>

              <div className="Portfolio-Routes-List Side-Bar-Card-List p-0 mt-2 w-full">
                {UtilitiesRoutes.map((route, index) => (
                  <Link
                    key={index}
                    href={route.path}
                    className={cn(
                      'px-3 py-2 rounded-md Main-Hover-Color group',
                      pathname === route.path ? 'bg-zinc-200' : ''
                    )}
                  >
                    <div className="Side-Bar-Card-Hover group-hover:ml-2">
                      <div
                        className={cn(
                          'text-lg',
                          index === 1 && 'text-xl -mx-px'
                        )}
                      >
                        {route.icon}
                      </div>

                      {route.name}
                    </div>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default NavigationComponent
