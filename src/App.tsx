import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './day1/demo';
import Child from './day2/Child';
import TempConverter from './day2/TempConverter';
import Top from './day3/Top';
import Bottom from './day3/Bottom';
import State from './day3/State';
//import {thisfx,thatfx} from 'whatever';

function App() {

  var someText:string = "This is a string in the App component";
  //var someVal:number = 0;

  const [someVal,setSomeVal] = useState(0);
  const [name,setName] = useState<string>();

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSomeVal(parseFloat(event.currentTarget.value));
    //setSomeVal()
    console.log("someVal", someVal);
  }

  return (
    <div className="App">
      <Demo />
      <hr/>
      <Child transVal={someText} someNum={12} />
      <hr/>
      <input onChange={handleChange} /> <b>&deg;F</b>
      <TempConverter fahr={someVal} />
      <hr/>
      <Top setGreetName={setName} />
      <Bottom greetName={name} />
      <hr/>
      <State passVal={0} />
    </div>
  );
}

export default App;
