import React, {useEffect,useState} from 'react';

const State = (props:{
    passVal:number
})=>{

    //var counter:number = 0;
    // var num:string = "20.5";
    // var digit:number = parseFloat(num);
    // console.log(digit);
    //@ts-ignore
    const [counter,setCounter] = useState<number>(JSON.parse(localStorage.getItem('counter')));

    useEffect(()=>{
        localStorage.setItem('counter',JSON.stringify(counter));
        console.log(counter);
    },[counter]);

    useEffect(()=>{
        setCounter(0);
        //@ts-ignore
        setCounter(JSON.parse(localStorage.getItem('counter')));
        return (()=>{
            console.log("Unmounting");
        });
    },[]);

    return (
        <>
        <h1>Counter is now at {counter}</h1>
        {//@ts-ignore
        }
        <button onClick={()=>{setCounter(counter+1)}}>Click Me</button>
        </>
    );
}

export default State;