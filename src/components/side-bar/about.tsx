import React from 'react'

type Props = {}

const AboutComponent = (props: Props) => {
  return (
    <div className="About">
      <div className="Side-Bar-Title">Headline</div>

      <div className="flex flex-col gap-y-1.5">
        <div className="font-Caveat text-3xl">Emre Erden</div>

        <div className="text-sm">gamer,</div>

        <div className="text-sm">super duper front-end developer</div>
      </div>
    </div>
  )
}

export default AboutComponent
