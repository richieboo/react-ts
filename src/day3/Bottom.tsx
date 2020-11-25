import React from "react";

const Bottom = (props:{
    greetName:string | undefined
})=>{
    return (
        <>
        <h1>Hello {props.greetName}</h1>
        </>
    );
}

export default Bottom;