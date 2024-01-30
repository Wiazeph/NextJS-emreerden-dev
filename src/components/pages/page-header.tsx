import React from 'react'

type Props = {
  pageTitle: string
  pageDescription: string
}

const PageHeaderComponent = (props: Props) => {
  return (
    <div className="flex flex-col mdl:flex-row mdl:flex-wrap items-center mdl:items-baseline gap-4">
      <div className="Page-Title">{props.pageTitle}</div>

      <div className="flex items-center gap-x-2">
        <div className="hidden lgx:block text-zinc-400 text-sm select-none">
          {'<span>'}
        </div>

        <div className="text-sm sm:text-base text-zinc-600 lgx:text-zinc-950">
          {props.pageDescription}
        </div>

        <div className="hidden lgx:block text-zinc-400 text-sm select-none">
          {'</span>'}
        </div>
      </div>
    </div>
  )
}

export default PageHeaderComponent
