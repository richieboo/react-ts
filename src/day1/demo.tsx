import React from 'react';

const Demo = () => {
    var name:string = "Tiki";

    const handleOnclick = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        alert(event.screenX);
    }

    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.currentTarget.value);
    }

    return (
        <>
            <div>
                <h1>Hello there, {name}</h1>
                This is a demo component
                <button onClick={()=>{
                    alert("Button was clicked");
                }}>Click Me</button>

                <button onClick={handleOnclick}>Click This</button>
            </div>
            <p>
                <select onChange={handleChange}>
                    <option value="This">This</option>
                    <option value="That">That</option>
                    <option value="Other">Other</option>
                </select>
                This is a paragraph
            </p>
        </>
    );
}

//const Demo = function(){}
//function Demo(){}


export default Demo;