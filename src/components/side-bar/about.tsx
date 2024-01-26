import React from 'react'

type Props = {}

const AboutComponent = (props: Props) => {
  return (
    <div className="About Side-Bar-Section-Layout">
      <div className="Side-Bar-Title">Headline</div>

      <div className="flex flex-col gap-y-1 text-sm">
        <div>gamer,</div>

        <div>super duper front-end developer</div>
      </div>
    </div>
  )
}

export default AboutComponent
