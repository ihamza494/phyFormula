import React, { useState } from "react";
import "../src/Distance_trvl.css";
function Distancetrvl(){
  
    const [distComponents, setDistComponents] = useState({
      v_i:"",
      time:"",
      acceleration:"",
    })
    const onChangeItem =(e)=>{
      const value=e.target.value;
      const name=e.target.name;
      setDistComponents((prev)=>{
        if(name==="v_i"){
          return{
            v_i:value,
            time:prev.time,
            acceleration:prev.acceleration,
          }
        }else if(name==="time"){
          return{
            v_i:prev.v_i,
            time:value,
            acceleration:prev.acceleration,
          }
        }else if(name==="acceleration"){
          return{
            v_i:prev.v_i,
            time:prev.time,
            acceleration:value,
          }
        }
      })
    }

  return (
    <div className="inputBox-body">
      <h1>Distance Tavelled</h1>
    <form className="inputBox-form">
      <label>Initial Speed:
        <input
          type="text"
          name="v_i" 
          value={distComponents.v_i}
          onChange={onChangeItem}
        />
      </label>
      <br/>
      <label> Time: 
          <input 
          type="text"
          name="time" 
          value={distComponents.time}
          onChange={onChangeItem}
          />
      </label> <br/>
      <label> Acceleration: 
          <input 
          type="text"
          name="acceleration" 
          value={distComponents.acceleration}
          onChange={onChangeItem}
          />
      </label> <br/>
      <div className="output">
        <p>Distance covered is {distComponents.v_i+ distComponents.time}</p>
      </div>
      
    </form>
    </div>
  )
}
export default Distancetrvl;