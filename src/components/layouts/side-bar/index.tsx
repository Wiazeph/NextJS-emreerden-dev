import React from 'react'
import ProfileComponent from './profile'
import SocialsComponent from './socials'
import ContactComponent from './contact'

type Props = {}

const SideBarComponent = (props: Props) => {
  return (
    <div className="Side-Bar p-6 sm:p-7 md:p-8 mdl:py-10 lg:py-12 lgx:py-14 xl:py-16 w-full md:max-w-80 mdl:max-w-88 lg:max-w-96 lgx:max-w-104 xl:max-w-112 xl2:max-w-120 md:h-dvh flex flex-col gap-y-8 sm:gap-y-9 md:gap-y-10 mdl:gap-y-11 lg:gap-y-12 overflow-y-auto">
      <ProfileComponent />

      <SocialsComponent />

      <ContactComponent />
    </div>
  )
}

export default SideBarComponent
