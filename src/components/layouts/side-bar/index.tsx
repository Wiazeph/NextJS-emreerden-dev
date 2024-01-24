import React from 'react'
import Image from 'next/image'
import SocialsComponent from './socials'

type Props = {}

const SideBarComponent = (props: Props) => {
  return (
    <div className="Side-Bar p-6 sm:p-7 md:p-8 mdl:py-10 lg:py-12 lgx:py-14 xl:py-16 w-full md:max-w-72 mdl:max-w-80 lg:max-w-88 lgx:max-w-96 xl:max-w-104 md:h-dvh flex flex-col gap-y-8 sm:gap-y-9 md:gap-y-10 mdl:gap-y-11 lg:gap-y-12 overflow-y-auto ">
      <div className="flex flex-col items-center gap-y-4 sm:gap-y-5 md:gap-y-6 mdl:gap-y-7 lg:gap-y-8 text-center">
        <div className="Image relative w-24 h-24 sm:w-26 sm:h-26 md:w-28 md:h-28 mdl:w-30 mdl:h-30 lg:w-32 lg:h-32 lgx:w-34 lgx:h-34 rounded-full overflow-hidden hover:scale-105 transition-all duration-200">
          <Image
            src="https://avatars.githubusercontent.com/u/37252753?v=4"
            alt="Emre Erden"
            fill
          />
        </div>

        <div className="Name text-3xl sm:text-4xl mdl:text-4xl lgx:text-5xl font-bold">
          Emre Erden
        </div>

        <div className="About sm:text-lg text-zinc-600">
          gamer, <br /> super duper front-end developer
        </div>
      </div>

      <SocialsComponent />
    </div>
  )
}

export default SideBarComponent
