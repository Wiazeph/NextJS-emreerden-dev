import React from 'react'
import ProfileComponent from './profile'
import NavBarComponent from '@/components/nav-bar'
import SocialsComponent from './socials'
import ContactComponent from './contact'

type Props = {}

const SideBarLayout = (props: Props) => {
  return (
    <div className="Side-Bar p-4 w-full md:max-w-72 mdl:max-w-80 lg:max-w-88 md:h-dvh flex flex-col gap-y-2 overflow-y-auto no-scrollbar bg-zinc-100/50">
      <ProfileComponent />

      <div className="w-full h-px bg-red-900 shrink-0"></div>

      <NavBarComponent />

      <div className="w-full h-px bg-red-900 shrink-0"></div>

      <SocialsComponent />

      <ContactComponent />
    </div>
  )
}

export default SideBarLayout
