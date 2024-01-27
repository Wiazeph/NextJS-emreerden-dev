import React from 'react'
import { IoSunnyOutline } from 'react-icons/io5'
import { IoMoonOutline } from 'react-icons/io5'

type Props = {}

const SettingsComponent = (props: Props) => {
  return (
    <div className="Settings Side-Bar-Section-Layout">
      <div className="Side-Bar-Title">Settings</div>

      <div className="Settings-List Side-Bar-Card-List">
        <button className="Light-Theme Side-Bar-Card group">
          <div className="Side-Bar-Card-Hover group-hover:ml-2">
            <IoSunnyOutline />

            <div className="text-sm">Light</div>
          </div>
        </button>

        <button className="Dark-Theme Side-Bar-Card group">
          <div className="Side-Bar-Card-Hover group-hover:ml-2">
            <IoMoonOutline />

            <div className="text-sm">Dark</div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default SettingsComponent
