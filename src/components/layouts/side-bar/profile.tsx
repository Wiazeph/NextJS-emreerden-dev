import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    <div className="Profile flex flex-col gap-y-4">
      <Link href={'/'} className="flex flex-col gap-y-3">
        <div className="p-2 -m-2 flex items-center gap-x-3 rounded-md hover:bg-zinc-200 transition-colors">
          <div className="Image relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full overflow-hidden hover:scale-105 transition-all">
            <Image
              src="https://avatars.githubusercontent.com/u/37252753?v=4"
              alt="Emre Erden"
              fill
            />
          </div>

          <div
            className={`Name text-2xl sm:text-3xl md:text-4xl ${caveat.className}`}
          >
            Emre Erden
          </div>
        </div>

        <div className="About flex text-sm text-zinc-700">
          gamer, super duper front-end developer
        </div>
      </Link>
    </div>
  )
}

export default ProfileComponent
