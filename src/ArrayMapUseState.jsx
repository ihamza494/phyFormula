import React from "react";
import { useState } from "react";
// import { useState } from "react";

function ArrayMapUseState(){
    // const [myName , setmyName] = useState('Hamza')
    // const [myflag, setmyFlag] = useState(0);
    // function changeName(){
    //     setmyName('Ali');
    //     // setmyFlag(1);
    //     (myflag === 0)?setmyFlag(1):setmyFlag(0);
    //     (myflag === 1)?setmyName('Esha'):setmyName('Hamza');
    //     console.log(myName);
    //     console.log(myflag);
    // }


    const empData = [{
        id: 0 ,
        eName : 'Hamza',
        age: 20
    },{
        id: 1 ,
        eName : 'HAli',
        age: 23
    },{
        id: 2 ,
        eName : 'Bali',
        age: 25
    }]
    const [myArray, setmyArray] = useState(empData);
    const clearPage=()=>{
        setmyArray([]);
    }
    
    return(
        <>
        {myArray.map((currEle)=><h1 key={currEle.id}>Name: {currEle.eName} & Age: {currEle.age}</h1>)}
        {/* <h1>Hello</h1> */}
        <button onClick={clearPage}>Clear</button>
        </>
    )
};

export default ArrayMapUseState;