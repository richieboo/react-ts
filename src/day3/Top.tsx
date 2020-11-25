import React from 'react';

const Top = (props:{
    setGreetName: React.Dispatch<React.SetStateAction<string | undefined>>
})=>{
    const handleChange = (evt:React.ChangeEvent<HTMLInputElement>)=>{
        props.setGreetName(evt.currentTarget.value);
    }

    return (
        <>
        <input onChange={handleChange} />
        </>
    );
}

export default Top;