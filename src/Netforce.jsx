import React, { useState } from "react";
import "../src/Netforce.css";
function Netforce(){
    const [forceComponents, setForceComponents] = useState({
      mass:"",
      acceleration:"",
    })
    const inputEvent = (e)=>{
      const value=e.target.value;
      const name=e.target.name;
      setForceComponents((prev)=>{
        if(name=== "mass"){
          return{
            mass: value,
            acceleration:prev.acceleration,
          }
        }else if(name=== "acceleration"){
          return{
            mass: prev.mass,
            acceleration: value,
          }
        }
      })
    }

  return (
    <div className="inputBox-body">
      <h1>NET FORCE</h1>
    <form className="inputBox-form">
      <label>Enter Mass:
        <input
          type="text" 
          name="mass"
          onChange={inputEvent}
          value={forceComponents.mass}
        />
      </label>
      <br/>
      <label> Enter acceleration: 
          <input 
          type="text" 
          name="acceleration"
          onChange={inputEvent}
          value={forceComponents.acceleration}/>
          {/* // onChange={(e)=> setAcceleration(e.target.value)}/> */}
      </label> <br/>
      
      <div className="output">
        <p> Force = {forceComponents.mass * forceComponents.acceleration}</p>
        
      </div>
      <br/>
    </form>
    </div>
  )
}
export default Netforce;