import React from 'react'

type Props = {}

const PortfolioSkeletonComponent = (props: Props) => {
  return (
    <div className="Main-Card-List">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="h-66 w-72 lg:w-76 lgx:w-80 animate-pulse rounded-md bg-zinc-100"
        ></div>
      ))}
    </div>
  )
}

export default PortfolioSkeletonComponent
