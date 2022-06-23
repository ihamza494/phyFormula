import React from "react";
import { useState } from "react";

const UseStateHookSpreadOp=()=>{
    const [myObj, setMyObj] = useState({
        myName:"Hamza", myAge:25, degree: "BSCS"
    })
    const changeObject=()=>{
        setMyObj({...myObj, myName:"Hamza Iqbal"})
    }
    return (
        <div>
            <h1>
                Name : {myObj.myName} & Age: {myObj.myAge} & Degree: {myObj.degree}
            </h1>
            <button onClick={changeObject}>Update</button>
        </div>
    )
}
export default UseStateHookSpreadOp;