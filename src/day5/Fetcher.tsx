import React, {useState,useEffect} from 'react';

const Fetcher = ()=>{

    const [num,setNum] = useState<number>();
    const [result,setResult] = useState("");
    //http://numbersapi.com/2/trivia

    useEffect(()=>{
        setNum(0);
    },[]);
    
    //I learned that setResult only changes state for the next render, now when we need it if not re-rendering.
    useEffect(() => {
        fetch(`http://numbersapi.com/${num}/trivia`).then((data) => {
            data.text().then((returned) => {
                setResult(returned);
            })
        });
    });

    const handleChange = (event: React.KeyboardEvent<HTMLInputElement>)=>{
        setNum(parseInt(event.currentTarget.value));
        console.log(`http://numbersapi.com/${num}/trivia`);
    }
    

    return (
        <>
        <input onKeyUp={handleChange} />
        <h3>{result}</h3>
        </>
    );
}

export default Fetcher;
