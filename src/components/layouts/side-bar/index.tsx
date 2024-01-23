import React from 'react'
import Image from 'next/image'

type Props = {}

const SideBarComponent = (props: Props) => {
  return (
    <div className="Side-Bar py-8 px-5 w-full md:max-w-72 mdl:max-w-80 lg:max-w-88 lgx:max-w-96 flex flex-col gap-y-4 bg-red-900">
      <div className="flex flex-col items-center gap-y-4">
        <div className="Image relative w-24 h-24 rounded-full overflow-hidden">
          <Image
            src="https://avatars.githubusercontent.com/u/37252753?v=4"
            alt="Emre Erden"
            fill
          />
        </div>

        <div className="Name text-2xl font-bold">Emre Erden</div>

        <div className="About text-center">
          gamer, <br /> super duper front-end developer
        </div>
      </div>
    </div>
  )
}

export default SideBarComponent
