import React, { useState } from "react";
import "../src/Dropdown.css";
import Netforce from "./Netforce";
import Speeddiff from "./Speeddiff";
import Distancetrvl from "./Distance_trvl";

const DropdownBox=()=>{
    const [phyFormula, setFuncName]=useState("")
    const phyFunc =(event)=>{
    setFuncName(event.target.value);
    }
    const renderResult =()=>{
        let result;
        phyFormula === "Speeddiff"?(
            result = <Speeddiff/>
        ):(phyFormula === "Distancetrvl"?(result = <Distancetrvl/>):(result=<Netforce/>))
        return result;
    }
    return(
        <>
        <div className="box-body">
            <label>Select your Formula</label>
            <select name="formula" id="formula" value={phyFormula} onChange={phyFunc}>
                <option value="Speeddiff" >Speed difference</option>
                <option value="Distancetrvl">Distance travelled</option>
                <option value="Netforce">Net Force</option>
            </select>
            </div>
        {renderResult()}
        </>
    )
}

export default DropdownBox;