'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import PageHeaderComponent from '../page-header'
import Utilities from '@/utils/consts/pages/utilities'

type Props = {}

const UtilitiesPageComponent = (props: Props) => {
  const pathname = usePathname()

  return (
    <>
      <PageHeaderComponent
        pageTitle="utilities."
        pageDescription="Useful, efficient tools and resources I use"
      />

      <nav className="pb-1.5 w-max flex gap-x-1.5 border-b overflow-x-auto no-scrollbar">
        {Utilities.map((utility, index) => (
          <Link
            key={index}
            href={utility.path}
            className={cn(
              'p-1.5 rounded-md hover:bg-zinc-100 transition-colors',
              pathname === utility.path ? 'bg-zinc-100 hover:bg-zinc-200' : ''
            )}
          >
            {utility.name}
          </Link>
        ))}
      </nav>
    </>
  )
}

export default UtilitiesPageComponent
