'use client'

import React, { useState } from 'react'
//
import AvatarComponent from './avatar'
import ThemeSettingsComponent from './theme-settings'
//
import AboutComponent from './about'
import NavigationComponent from './navigation'
import SideBarListComponent from './side-bar-list'
//
import SocialLinks from '@/utils/consts/side-bar/socials'
import ContactLinks from '@/utils/consts/side-bar/contact'
//
import { ClickAwayListener } from '@/components/click-away-listener'
//
import { cn } from '@/lib/utils'

type Props = {}

const SideBarLayout = (props: Props) => {
  const [isActive, setIsActive] = useState(false)
  const handleOnClick = () => setIsActive(!isActive)
  const activeClass = isActive && 'active'

  const username = 'WIAZEPH'

  return (
    <>
      <ClickAwayListener
        onClickAway={() => setIsActive(false)}
        className="ClickAwayListener"
      >
        <div className="Mobile-Menu z-40 absolute top-0 left-0 h-12 w-full bg-zinc-50 dark:bg-zinc-800 border-b dark:border-zinc-700 mdl:hidden overflow-hidden">
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
            'Side-Bar Menu z-50 absolute top-12 mdl:static -translate-x-full mdl:translate-x-0 mdl:p-4 h-[calc(100dvh-48px)] mdl:h-dvh transition-transform duration-300 ease-in-out',
            isActive && 'translate-x-0'
          )}
        >
          <div className="flex w-[296px] min-w-[296px] lgx:w-[324px] lgx:min-w-[324px] h-full border-r mdl:border dark:border-zinc-700 mdl:rounded-3xl bg-zinc-50 dark:bg-zinc-800">
            <div className="w-16 py-2 flex flex-col items-center justify-between shrink-0 mdl:rounded-3xl border-r dark:border-zinc-700">
              <AvatarComponent />

              <div className="Username flex flex-col gap-y-1 items-center w-fit text-sm">
                {username.split('').map((letter, index) => (
                  <div key={index}>{letter}</div>
                ))}
              </div>

              <ThemeSettingsComponent />
            </div>

            <div className="flex flex-col gap-y-8 p-6 overflow-y-auto w-full no-scrollbar">
              <AboutComponent />

              <NavigationComponent />

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
          </div>
        </div>
      </ClickAwayListener>
    </>
  )
}

export default SideBarLayout
