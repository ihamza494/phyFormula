import React from "react";
import { useState } from "react";

function Practice(){
    const [myName , setmyName] = useState('Hamza')
    const [myflag, setmyFlag] = useState(0);
    function changeName(){
        setmyName('Ali');
        // setmyFlag(1);
        (myflag === 0)?setmyFlag(1):setmyFlag(0);
        (myflag === 1)?setmyName('Esha'):setmyName('Hamza');
        console.log(myName);
        console.log(myflag);
    }
    return(
        <>
        <h1>{myName}</h1>
        <button onClick={changeName}>Click me!</button>
        </>
    )
};

export default Practice;