import React from 'react'
//
import { IoSunnyOutline } from 'react-icons/io5'
import { IoMoonOutline } from 'react-icons/io5'

type Props = {}

const ThemeSettingsComponent = (props: Props) => {
  return (
    <div className="Theme-Settings Side-Bar-Section-Layout items-center !gap-y-1">
      <button className="Light-Theme Main-Hover-Color p-3 w-fit text-xl rounded-full">
        <IoSunnyOutline />
      </button>

      <button className="Dark-Theme Main-Hover-Color p-3 w-fit text-xl rounded-full">
        <IoMoonOutline />
      </button>
    </div>
  )
}

export default ThemeSettingsComponent
