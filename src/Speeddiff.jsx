import React, { useState } from "react";
import "../src/Speeddiff.css";
function Speeddiff(){
    const [accComponents, setAccComponents] = useState({
      v_i:"",
      v_f:"",
      time:"",
    })
    const onChangeItem=(e)=>{
      const value = e.target.value;
      const name = e.target.name;
      setAccComponents((prev)=>{
        if(name==="v_i"){
          return{
            v_i:value,
            v_f:prev.v_f,
            time:prev.time,
          }
        }else if(name==="v_f"){
          return{
            v_i:prev.v_i,
            v_f:value,
            time:prev.time,
          }
        }else if(name==="time"){
          return{
            v_i:prev.v_i,
            v_f:prev.v_f,
            time:value,
          }
        }
      })

    }
    

  return (
    <div className="inputBox-body">
      <h1>Acceleration</h1>
    <form className="inputBox-form">
      <label>Initial Speed:
        <input
          type="text" 
          name="v_i"
          value={accComponents.v_i}
          onChange={onChangeItem}
        />
      </label>
      <br/>
      <label> Final Speed: 
          <input 
          type="text"
          name="v_f" 
          value={accComponents.v_f}
          onChange={onChangeItem}
          />
      </label> <br/>
      <label> Time: 
          <input 
          type="text"
          name="time" 
          value={accComponents.time}
          onChange={onChangeItem}
          />
      </label> <br/>
      <div className="output"> 
      <p>Acceleration is : {(accComponents.v_f-accComponents.v_i)/accComponents.time}</p>
      </div>
      
    </form>
    </div>
  )
}
export default Speeddiff;