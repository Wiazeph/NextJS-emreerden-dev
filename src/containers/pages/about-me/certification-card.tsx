import React from 'react'
//
import { GoLink } from 'react-icons/go'
//
import { Certification } from '@/types/about-me'

const CertificationCardComponent = (props: Certification) => {
  return (
    <li className="relative max-w-[550px] list-none pb-8 last:pb-0 before:content-[''] before:w-4 before:h-4 before:border-2 before:dark:border-zinc-600 before:bg-zinc-100 before:dark:bg-zinc-800 before:rounded-full before:absolute before:-left-[9px] before:top-[6px]">
      <div className="flex flex-col gap-y-1 ml-5">
        <div className="text-lg font-medium">{props.name}</div>

        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          {props.issuer}
        </div>

        <div className="text-sm text-zinc-500 dark:text-zinc-500">
          {props.date}
        </div>

        {props.credentialUrl && (
          <a
            href={props.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-x-1.5 items-center mt-1 text-xs border dark:border-zinc-700 rounded-md px-2 py-1 w-fit hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Show Credential
            <GoLink className="text-xs" />
          </a>
        )}
      </div>
    </li>
  )
}

export default CertificationCardComponent
