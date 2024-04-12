import React from 'react'
import { IoSunnyOutline } from 'react-icons/io5'
import { IoMoonOutline } from 'react-icons/io5'

type Props = {}

const SettingsComponent = (props: Props) => {
  return (
    <div className="Settings Side-Bar-Section-Layout items-center">
      <button className="Light-Theme w-fit p-3 text-xl rounded-full Main-Hover-Color">
        <IoSunnyOutline />
      </button>

      <button className="Dark-Theme w-fit p-3 text-xl rounded-full Main-Hover-Color">
        <IoMoonOutline />
      </button>
    </div>
  )
}

export default SettingsComponent
