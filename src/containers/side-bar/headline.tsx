import React from 'react'

type Props = {}

const HeadlineComponent = (props: Props) => {
  return (
    <div className="Headline">
      <div className="Side-Bar-Title">Headline</div>

      <div className="flex flex-col gap-y-2 text-sm">
        <div>Gamer,</div>

        <div>Software Developer</div>
      </div>
    </div>
  )
}

export default HeadlineComponent
