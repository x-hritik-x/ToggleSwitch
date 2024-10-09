import React, { useState } from 'react'

const ToggleSwitch = () => {

    const [isOn, setOn] = useState(false)
    
    
    const handleToggleSwitch =()=>{
        setOn(!isOn)
    }
    const textOn = isOn ? "ON" : "OFF";
    const checkOn = isOn ? "on" : "off"; 
    const toggleBGcolor = {backgroundColor : isOn ? "green" : "red"}

    return (
    <div className="container" onClick={handleToggleSwitch} style={toggleBGcolor} >
        <div className={`toggle-switch ${checkOn}`}>
            <span className="state-text">{textOn}</span>
        </div>
    </div>
  )
}

export default ToggleSwitch
