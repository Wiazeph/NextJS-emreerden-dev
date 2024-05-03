import React from 'react'
import Link from 'next/link'
//
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'

type Props = {}

const AvatarComponent = (props: Props) => {
  return (
    <div className="Avatar flex gap-x-4 items-center">
      <Link
        href={'/'}
        className="Avatar-Image inline-block w-fit rounded-full overflow-hidden hover:scale-110 transition-all"
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

      <div className="font-Caveat text-3xl tracking-wide">Emre Erden</div>
    </div>
  )
}

export default AvatarComponent
