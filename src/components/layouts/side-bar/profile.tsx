import React from 'react'
import Image from 'next/image'

import { Caveat } from 'next/font/google'

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700'],
  style: ['normal'],
})

type Props = {}

const ProfileComponent = (props: Props) => {
  return (
    <div className="Profile flex flex-col items-center gap-y-4 sm:gap-y-5 md:gap-y-6 mdl:gap-y-7 lg:gap-y-8 text-center">
      <div className="Image relative w-24 h-24 sm:w-26 sm:h-26 md:w-28 md:h-28 mdl:w-30 mdl:h-30 lg:w-32 lg:h-32 lgx:w-34 lgx:h-34 rounded-full overflow-hidden hover:scale-105 transition-all duration-200">
        <Image
          src="https://avatars.githubusercontent.com/u/37252753?v=4"
          alt="Emre Erden"
          fill
        />
      </div>

      <div
        className={`${caveat.className} Name text-6xl md:text-7xl tracking-[-1px]`}
      >
        Emre Erden
      </div>

      <div className="About flex flex-col gap-y-1.5 sm:text-lg md:text-base lgx:text-lg text-zinc-600">
        <div>gamer,</div>
        <div className="flex gap-x-0.5">
          <div className="md:hidden lg:block mt-px">{'<'}</div>
          <div>super duper front-end developer</div>
          <div className="md:hidden lg:block mt-px">{'/>'}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileComponent
