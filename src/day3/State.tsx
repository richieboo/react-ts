import React, {useEffect,useState} from 'react';

const State = (props:{
    passVal:number
})=>{

    var counter:number = 0;

    useEffect(()=>{
        //counter++;
        console.log(counter);
    },[counter]);

    return (
        <>
        <h1>Counter is now at {counter}</h1>
        <button onClick={()=>{counter++}}>Click Me</button>
        </>
    );
}

export default State;