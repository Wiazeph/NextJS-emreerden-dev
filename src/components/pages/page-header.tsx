import React from 'react'

type Props = {
  pageTitle: string
  pageDescription: string
}

const PageHeaderComponent = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap items-center md:items-baseline gap-4 text-center md:text-left">
      <div className="Page-Title">{props.pageTitle}</div>

      <div className="flex items-center gap-x-2">
        <div className="hidden xl:block text-zinc-400 text-sm">{'<span>'}</div>

        <div className="text-sm sm:text-base text-zinc-600 xl:text-zinc-950">
          {props.pageDescription}
        </div>

        <div className="hidden xl:block text-zinc-400 text-sm">{'</span>'}</div>
      </div>
    </div>
  )
}

export default PageHeaderComponent
