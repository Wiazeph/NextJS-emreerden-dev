import React from 'react'
//
import { IoSunnyOutline } from 'react-icons/io5'
import { IoMoonOutline } from 'react-icons/io5'

type Props = {}

const ThemeSettingsComponent = (props: Props) => {
  return (
    <div className="Theme-Settings !gap-y-1 w-min">
      <button className="Light-Theme Main-Hover-Color p-3 text-xl rounded-full">
        <IoSunnyOutline />
      </button>

      <button className="Dark-Theme Main-Hover-Color p-3 text-xl rounded-full">
        <IoMoonOutline />
      </button>
    </div>
  )
}

export default ThemeSettingsComponent
