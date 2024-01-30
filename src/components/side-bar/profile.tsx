import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const ProfileComponent = (props: Props) => {
  return (
    <Link
      href={'/'}
      className="Profile p-2 -m-2 flex items-center gap-x-3 Main-Hover-Color"
    >
      <div className="Image relative w-12 h-12 rounded-full overflow-hidden">
        <Image
          src="https://avatars.githubusercontent.com/u/37252753?v=4"
          alt="Emre Erden"
          fill
          sizes="100%"
        />
      </div>

      <div className="Name text-4xl tracking-[-1px] font-Caveat">
        Emre Erden
      </div>
    </Link>
  )
}

export default ProfileComponent
