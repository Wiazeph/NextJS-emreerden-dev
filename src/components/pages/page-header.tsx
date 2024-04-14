import React from 'react'

type Props = {
  pageTitle: string
  pageDescription: string
}

const PageHeaderComponent = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-5 mdl:gap-y-6">
      <div className="Page-Title">{props.pageTitle}</div>

      <div className="flex flex-col sm:flex-row items-center justify-center mdl:justify-start sm:flex-wrap gap-2 text-center mdl:text-left">
        <div className="text-zinc-400 text-sm select-none mdl:hidden lg:block">
          {'<span>'}
        </div>

        <div className="text-zinc-950">{props.pageDescription}</div>

        <div className="text-zinc-400 text-sm select-none mdl:hidden lg:block">
          {'</span>'}
        </div>
      </div>
    </div>
  )
}

export default PageHeaderComponent
