import React from 'react'
import ProfileComponent from './profile'
import SocialsComponent from './socials'

type Props = {}

const SideBarComponent = (props: Props) => {
  return (
    <div className="Side-Bar p-6 sm:p-7 md:p-8 mdl:py-10 lg:py-12 lgx:py-14 xl:py-16 w-full md:max-w-72 mdl:max-w-80 lg:max-w-88 lgx:max-w-96 xl:max-w-104 md:h-dvh flex flex-col gap-y-8 sm:gap-y-9 md:gap-y-10 mdl:gap-y-11 lg:gap-y-12 overflow-y-auto">
      <ProfileComponent />

      <SocialsComponent />
    </div>
  )
}

export default SideBarComponent
