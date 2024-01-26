import React from 'react'
import ProfileComponent from './profile'
import AboutComponent from './about'
import NavBarComponent from './nav-bar'
import SideBarListComponent from './side-bar-list'
import SocialLinks from '@/utils/consts/side-bar/socials'
import ContactLinks from '@/utils/consts/side-bar/contact'

type Props = {}

const SideBarLayout = (props: Props) => {
  return (
    <div className="Side-Bar p-4 w-72 min-w-72 h-dvh flex flex-col gap-y-8 bg-zinc-100/50 overflow-y-auto no-scrollbar">
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
    </div>
  )
}

export default SideBarLayout
