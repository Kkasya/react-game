import './App.css';
import React, {useState} from 'react';
import {Game} from "../game";
import {Context, Context2, Context3} from "../context";
import Statistics from "../statistics";


function App() {
  const [{contextSettings, contextScore, contextStatistics}, setMenu] = useState(
    {contextSettings: false, contextScore: false, contextStatistics: false});

  const [contextMove, setContext] = useState(0);

  const [{contextStart, contextExit, contextWin}, setStart] = useState({
    contextStart: false,
    contextExit: false,
    contextWin: false
  });


  return (
    <Context3.Provider value={[{contextSettings, contextScore, contextStatistics}, setMenu]}>
      <div className="app">
        <header>
          <h1 className="text-danger">Memory Game</h1>
        </header>
        <Context.Provider value={[contextMove, setContext]}>
          <Context2.Provider value={[{contextStart, contextExit, contextWin}, setStart]}>
            <Game/>
          </Context2.Provider>
        </Context.Provider>
        <Statistics/>
      </div>
    </Context3.Provider>
  );
}

export default App;
