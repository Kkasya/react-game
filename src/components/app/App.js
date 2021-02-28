import './App.css';
import React, {useState, useEffect} from 'react';
import {Game} from "../game";
import {Context, Context2, Context3, Context4} from "../context";
import {Statistics, Scores} from "../statistics";
import Fullscreen from "./fullscreen";
import Settings from "../settings/settings";

const audio = new Audio('/sounds/background.mp3');
audio.volume = 1;
audio.loop = true;

function App() {
  const [{contextSettings, contextScore, contextStatistics}, setMenu] = useState(
    {contextSettings: false, contextScore: false, contextStatistics: false});

  const localMove = localStorage.getItem('move') || 0;

  const [contextMove, setContext] = useState(Number(localMove));

  const [{contextStart, contextExit, contextWin}, setStart] = useState({
    contextStart: false,
    contextExit: false,
    contextWin: false
  });

  const [contextSave, setSave] = useState(false);
  const [fullClass, setClass] = useState('');
  let classApp = `app ${fullClass}`;

  audio.play();

  const setFull = () => {
    if (fullClass) setClass('');
    else setClass('full-screen');
  };

  useEffect(() => {
    const move = localStorage.getItem('move') || 0;
    setContext(Number(move));
  }, [contextStart]);


  window.addEventListener('unload', () => localStorage.setItem('move',contextMove.toString()));

  return (
    <Context3.Provider value={[{contextSettings, contextScore, contextStatistics}, setMenu]}>
      <div className={classApp}>
        <Fullscreen
          setFull={setFull}/>
        <header>
          <h1 className="text-danger">Memory Game</h1>
        </header>
        <Context.Provider value={[contextMove, setContext]}>
          <Context2.Provider value={[{contextStart, contextExit, contextWin}, setStart]}>
            <Context4.Provider value={[contextSave, setSave]}>
              <Game/>
            </Context4.Provider>
          </Context2.Provider>
        </Context.Provider>
        <Settings />
        <Statistics/>
        <Scores/>
      </div>
    </Context3.Provider>
  );
}

export default App;
