import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const AvatarComponent = (props: Props) => {
  return (
    <Link
      href={'/'}
      className="Avatar-Image relative inline-block w-12 h-12 mx-auto rounded-full overflow-hidden hover:scale-110 transition-all"
    >
      <Image
        src="https://avatars.githubusercontent.com/u/37252753?v=4"
        alt="Emre Erden"
        fill
        sizes="100%"
      />
    </Link>
  )
}

export default AvatarComponent
