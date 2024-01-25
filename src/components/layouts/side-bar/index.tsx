import React from 'react'
import ProfileComponent from './profile'
import SocialsComponent from './socials'
import ContactComponent from './contact'

type Props = {}

const SideBarComponent = (props: Props) => {
  return (
    <div className="Side-Bar px-6 sm:px-7 md:px-8 Main-Padding w-full md:max-w-80 mdl:max-w-88 lg:max-w-96 lgx:max-w-104 xl:max-w-112 xl2:max-w-120 md:h-dvh flex flex-col gap-y-8 sm:gap-y-9 md:gap-y-10 mdl:gap-y-11 lg:gap-y-12 overflow-y-auto">
      <ProfileComponent />

      <div className="flex flex-col gap-y-8 sm:gap-y-9 md:gap-y-10 mdl:gap-y-11 lg:gap-y-12">
        <SocialsComponent />

        <ContactComponent />
      </div>
    </div>
  )
}

export default SideBarComponent
