import React, { useState } from 'react'
import "./ToggleSwitch.css"
import { IoIosSwitch } from "react-icons/io";
export const ToggleSwitch = ()=> {

  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = ()=> {
    setIsOn(!isOn);
  };

  return (
    <>
    <h1>Toggle Switch <IoIosSwitch /></h1>
    <div className="toggle-switch" onClick={handleToggleSwitch}>
      <div className={`switch ${isOn ? "on" : "off"}`}>
        <span className="switch-state">{isOn ? "on" : "off"}</span>
      </div>
    </div>
    </>
  )
}