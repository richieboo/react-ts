import React from 'react';

// (f-32)*5/9
const TempConverter = (props:{
    fahr:number
}) => {
    return (
        <>
        <h1>The temperature in Celcius is: {(props.fahr-32)*5/9}</h1>
        </>
    );
}

export default TempConverter;