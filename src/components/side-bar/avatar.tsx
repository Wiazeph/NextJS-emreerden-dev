import React from 'react'
import Link from 'next/link'
//
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'

type Props = {}

const AvatarComponent = (props: Props) => {
  return (
    <Link
      href={'/'}
      className="Avatar-Image inline-block mx-auto w-fit h-fit rounded-full overflow-hidden hover:scale-110 transition-all bg-red-500"
    >
      <Avatar className="h-12 w-12">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/37252753?v=4"
          alt="Emre Erden"
        />
        <AvatarFallback>
          <Skeleton className="w-12 h-12 bg-zinc-300 rounded-full" />
        </AvatarFallback>
      </Avatar>
    </Link>
  )
}

export default AvatarComponent
