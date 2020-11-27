import React, {useState,useEffect} from 'react';

const Fetcher = ()=>{

    const [num,setNum] = useState<number>();
    const [result,setResult] = useState("");
    //http://numbersapi.com/2/trivia

    useEffect(()=>{
        setNum(0);
    },[]);

    const handleChange = (event: React.KeyboardEvent<HTMLInputElement>)=>{
        setNum(parseInt(event.currentTarget.value));
        console.log(`http://numbersapi.com/${num}/trivia`);
        
        fetch(`http://numbersapi.com/${num}/trivia`).then((data)=>{
            
            data.text().then((returned)=>{
                
                setResult(returned);
            });
        });
    }
    

    return (
        <>
        <input onKeyUp={handleChange} />
        <h3>{result}</h3>
        </>
    );
}

export default Fetcher;