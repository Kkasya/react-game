import './App.css';
import React, {useState, useEffect} from 'react';
import {Game} from "../game";
import {Context, Context2, Context3, Context4} from "../context";
import {Statistics, Scores} from "../statistics";
import Fullscreen from "./fullscreen";
import Settings from "../settings/settings";
import {connect} from 'react-redux';
import Footer from "../footer";

const audio = new Audio('/sounds/background.mp3');
audio.loop = true;

const h1Ru = 'Игра на запоминание';
const h1En = 'Game Memory';

function App({lang, music}) {
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

  const setFull = () => {
    if (fullClass) setClass('');
    else setClass('full-screen');
  };

  useEffect(() => {
    const move = localStorage.getItem('move') || 0;
    setContext(Number(move));
  }, [contextStart]);

  audio.pause();
  audio.play();
  audio.volume = music;

  window.addEventListener('unload', () => localStorage.setItem('move',contextMove.toString()));

  return (
    <Context3.Provider value={[{contextSettings, contextScore, contextStatistics}, setMenu]}>
      <div className={classApp}>
        <Fullscreen
          setFull={setFull}/>
        <header>
          <h1 className="text-danger">{ lang === 'en' ? h1En : h1Ru}</h1>
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
        <Footer/>
      </div>
    </Context3.Provider>
  );
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  music: state.music,
});

export default connect(mapStateToProps)(App);
