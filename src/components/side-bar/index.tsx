'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import ProfileComponent from './profile'
import AboutComponent from './about'
import NavBarComponent from './nav-bar'
import SideBarListComponent from './side-bar-list'
import SocialLinks from '@/utils/consts/side-bar/socials'
import ContactLinks from '@/utils/consts/side-bar/contact'
import SettingsComponent from './settings'
import { ClickAwayListener } from '@/components/ui/click-away-listener'

type Props = {}

const SideBarLayout = (props: Props) => {
  const [isActive, setIsActive] = useState(false)
  const handleOnClick = () => setIsActive(!isActive)
  const activeClass = isActive && 'active'

  return (
    <>
      <ClickAwayListener onClickAway={() => setIsActive(false)}>
        <div className="z-40 absolute top-0 left-0 h-12 w-full bg-zinc-50 border-b mdl:hidden overflow-hidden">
          <svg
            className={cn(
              'Hamburger-Menu Menu-Rotate Ham-Menu w-12 h-12 ml-auto block mdl:hidden',
              activeClass
            )}
            viewBox="0 0 100 100"
            onClick={handleOnClick}
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
            />
          </svg>
        </div>

        <div
          className={cn(
            'Side-Bar Menu z-50 absolute top-12 mdl:static -translate-x-full mdl:translate-x-0 p-4 h-dvh border-r mdl:border-none transition-transform duration-300 ease-in-out',
            isActive && 'translate-x-0'
          )}
        >
          <div className="flex w-68 min-w-68 mdl:w-[340px] mdl:min-w-[340px] h-full border rounded-3xl bg-zinc-50">
            <div className="w-18 rounded-3xl border-r"></div>

            <div className="flex flex-col gap-y-8 px-[18px] py-4 overflow-y-auto no-scrollbar">
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
          </div>
        </div>
      </ClickAwayListener>
    </>
  )
}

export default SideBarLayout
