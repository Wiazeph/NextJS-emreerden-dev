import React from 'react'
import ProfileComponent from './profile'
import AboutComponent from './about'
import NavBarComponent from './nav-bar'
import SideBarListComponent from './side-bar-list'
import SocialLinks from '@/utils/consts/side-bar/socials'
import ContactLinks from '@/utils/consts/side-bar/contact'
import SettingsComponent from './settings'

type Props = {}

const SideBarLayout = (props: Props) => {
  return (
    <div className="Side-Bar p-4 w-66 min-w-66 h-dvh flex flex-col gap-y-8 bg-zinc-50 overflow-y-auto no-scrollbar">
      <ProfileComponent />

      <AboutComponent />

      <NavBarComponent />

      <SideBarListComponent
        name="Skills"
        title="Follow Me!"
        constName={SocialLinks}
      />

      <SideBarListComponent
        name="Contact"
        title="Contact Me!"
        constName={ContactLinks}
      />

      <SettingsComponent />
    </div>
  )
}

export default SideBarLayout
