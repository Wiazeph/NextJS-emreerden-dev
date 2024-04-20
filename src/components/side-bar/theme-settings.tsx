'use client'

import React, { useEffect, useState } from 'react'
//
import { cn } from '@/lib/utils'
//
import { useTheme } from 'next-themes'
//
import { IoMoonOutline } from 'react-icons/io5'
import { IoSunnyOutline } from 'react-icons/io5'

type Props = {}

const ThemeSettingsComponent = (props: Props) => {
  const [themeValue, setThemeValue] = useState<boolean>()

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setThemeValue(theme === 'dark' ? true : false)
  }, [theme])

  const handleMouseEnter = (isDark: boolean) => {
    setThemeValue(isDark)
  }

  const handleMouseLeave = () => {
    setThemeValue(theme === 'dark' ? true : false)
  }

  return (
    <div
      className="Theme-Settings relative flex flex-col gap-y-2 justify-between items-center rounded-full"
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="Light-Theme text-2xl p-3 cursor-pointer rounded-full z-10"
        onClick={() => setTheme('light')}
        onMouseEnter={() => handleMouseEnter(false)}
      >
        <IoSunnyOutline />
      </div>

      <div
        className={cn(
          'absolute w-12 h-12 rounded-full border-2 transition-transform',
          themeValue === false
            ? 'translate-y-0'
            : 'translate-y-[calc(100%+7px)]'
        )}
      ></div>

      <div
        className="Dark-Theme text-[22px] p-3 cursor-pointer rounded-full z-10"
        onClick={() => setTheme('dark')}
        onMouseEnter={() => handleMouseEnter(true)}
      >
        <IoMoonOutline />
      </div>
    </div>
  )
}

export default ThemeSettingsComponent
