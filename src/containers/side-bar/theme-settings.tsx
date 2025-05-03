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
  const { theme, setTheme } = useTheme()

  const [themeValue, setThemeValue] = useState<string>()

  useEffect(() => {
    setThemeValue(theme)
  }, [theme])

  return (
    <div className="Theme-Settings">
      <div className="Side-Bar-Title">Theme</div>

      <div className="Side-Bar-Card-List">
        <div
          onClick={() => setTheme('light')}
          className={cn(
            'Side-Bar-Card group cursor-pointer',
            themeValue === 'light' && 'bg-zinc-200/70 dark:bg-zinc-700'
          )}
        >
          <div className="Side-Bar-Card-Hover group-hover:ml-2">
            <IoSunnyOutline />

            <div className="text-sm">Light</div>
          </div>
        </div>

        <div
          onClick={() => setTheme('dark')}
          className={cn(
            'Side-Bar-Card group cursor-pointer',
            themeValue === 'dark' && 'bg-zinc-200/70 dark:bg-zinc-700'
          )}
        >
          <div className="Side-Bar-Card-Hover group-hover:ml-2">
            <IoMoonOutline />

            <div className="text-sm">Dark</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettingsComponent
