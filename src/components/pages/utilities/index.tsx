import React from 'react'
import PageHeaderComponent from '../page-header'
import Utilities from '@/utils/consts/utilities'
import Link from 'next/link'

type Props = {}

const UtilitiesPageComponent = (props: Props) => {
  return (
    <>
      <PageHeaderComponent
        pageTitle="utilities."
        pageDescription="Useful, efficient tools and resources I use"
      />

      <nav className="flex border-b pb-1.5 w-max overflow-x-auto no-scrollbar">
        {Utilities.map((utility, index) => (
          <Link
            key={index}
            href={utility.path}
            className="px-2 py-1 rounded-md hover:bg-zinc-100 transition-colors duration-200"
          >
            {utility.name}
          </Link>
        ))}
      </nav>
    </>
  )
}

export default UtilitiesPageComponent
