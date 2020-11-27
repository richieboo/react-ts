import React, {useState} from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Demo from './day1/demo';
import Child from './day2/Child';
import TempConverter from './day2/TempConverter';
import Top from './day3/Top';
import Bottom from './day3/Bottom';
import State from './day3/State';
import Proper from './day4/Proper';
import Fetcher from './day5/Fetcher';
//import {thisfx,thatfx} from 'whatever';

function App() {

  var someText:string = "This is a string in the App component";
  //var someVal:number = 0;

  const [someVal,setSomeVal] = useState(0);
  const [name,setName] = useState<string>();
  const [showComp, setShowComp] = useState(true);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSomeVal(parseFloat(event.currentTarget.value));
    //setSomeVal()
    console.log("someVal", someVal);
  }

  return (
    <>
    <BrowserRouter>
    <Link to="/">Demo</Link>
    <Link to="/child">Child</Link>
    <Link to="/greet">Greet</Link>
    <Link to="/showState">Show State</Link>
    <Link to="/proper">Proper</Link>
    <Link to="/fetcher">Fetcher</Link>
      <div className="App">
        <Switch>
          <Route path="/fetcher" component={Fetcher} />
          <Route exact path="/" component={Demo} />
          <Route path="/child">
            <Child transVal={someText} someNum={12} />
          </Route>
          <Route path="/temp">
            <input onChange={handleChange} /> <b>&deg;F</b>
            <TempConverter fahr={someVal} />
          </Route>
          <Route path="/greet">
            <Top setGreetName={setName} />
            <Bottom greetName={name} />
          </Route>
          <Route path="/showState">
            <button onClick={()=>{setShowComp(!showComp)}}>Toggle</button>
            {showComp && <State passVal={0} />}
          </Route>
          <Route path="/proper" component={Proper} />
        </Switch>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
