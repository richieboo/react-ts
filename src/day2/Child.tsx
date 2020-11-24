import React from 'react';

const Child = (props:{
    transVal:string,
    someNum:number
}) => {

    return (
        <>
            <h1>Passed from App: {props.transVal}</h1>
            Number received from App: {props.someNum}
        </>
    );
}

export default Child;