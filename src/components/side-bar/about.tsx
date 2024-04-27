import React from 'react'

type Props = {}

const AboutComponent = (props: Props) => {
  return (
    <div className="About">
      <div className="Side-Bar-Title">Headline</div>

      <div className="flex flex-col gap-y-2 text-sm">
        <div>Gamer,</div>

        <div>Front-End Developer</div>
      </div>
    </div>
  )
}

export default AboutComponent
