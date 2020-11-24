import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './day1/demo';
import Child from './day2/Child';
import TempConverter from './day2/TempConverter';

function App() {

  var someText:string = "This is a string in the App component";
  //var someVal:number = 0;

  const [someVal,setSomeVal] = useState(0);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSomeVal(parseFloat(event.currentTarget.value));
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
    </div>
  );
}

export default App;
