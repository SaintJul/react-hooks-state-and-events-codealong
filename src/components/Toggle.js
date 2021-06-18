import React, {useState} from "react";


function Toggle() {
  const [isOn, setIsOn] = useState(false)
  function handClick(){
    setIsOn ((isOn) => !isOn)
  }
  return <button style = {{background : "tomato"}} onClick = {handClick}>{isOn? "ON" : "OFF"}</button>;
  
}

export default Toggle;
