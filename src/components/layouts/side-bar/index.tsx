import React from 'react'
import ProfileComponent from './profile'
import SocialsComponent from './socials'
import ContactComponent from './contact'

type Props = {}

const SideBarLayout = (props: Props) => {
  return (
    <div className="Side-Bar p-6 sm:p-7 md:p-8 mdl:py-10 lg:py-12 lgx:py-14 xl:py-16 w-full md:max-w-72 mdl:max-w-80 lg:max-w-88 lgx:max-w-96 xl:max-w-104 xl2:max-w-112 2xl:max-w-120 md:h-dvh flex flex-col gap-y-8 sm:gap-y-9 md:gap-y-10 mdl:gap-y-11 lg:gap-y-12 overflow-y-auto no-scrollbar">
      <ProfileComponent />

      <div className="flex flex-col gap-y-8 sm:gap-y-9 md:gap-y-10 mdl:gap-y-11 lg:gap-y-12">
        <SocialsComponent />

        <ContactComponent />
      </div>
    </div>
  )
}

export default SideBarLayout
