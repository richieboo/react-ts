import React, {useEffect,useState} from 'react';

const State = (props:{
    passVal:number
})=>{

    //var counter:number = 0;
    // var num:string = "20.5";
    // var digit:number = parseFloat(num);
    // console.log(digit);

    const [counter,setCounter] = useState<number>();

    useEffect(()=>{
        //counter++;
        console.log(counter);
    },[counter]);

    useEffect(()=>{
        setCounter(0);
        console.log("Rendering" + localStorage['counter']);
        if(localStorage['counter'] !== NaN)
            setCounter(parseInt(localStorage['counter']));

        return (()=>{
            console.log("Unmounting");
            localStorage['counter'] = counter;
        });
    },[]);

    return (
        <>
        <h1>Counter is now at {counter}</h1>
        {//@ts-ignore
        <button onClick={()=>{setCounter(counter+1)}}>Click Me</button>
        }
        </>
    );
}

export default State;