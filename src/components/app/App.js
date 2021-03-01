import React, {useState, useEffect} from 'react';
import Fullscreen from 'fullscreen-react';
import {Game} from "../game";
import {Context, Context2, Context3, Context4} from "../context";
import {Statistics, Scores} from "../statistics";
import FullscreenBtn from "./fullscreen";
import Settings from "../settings/settings";
import {connect} from 'react-redux';
import Footer from "../footer";
import {toggleLang, toggleMusic, toggleSound, toggleTopic} from "../../redux/actions";
import './App.css';

const audio = new Audio('/sounds/background.mp3');
audio.loop = true;

const h1Ru = 'Игра на запоминание';
const h1En = 'Game Memory';

function App({lang, music, toggleLang, toggleMusic, toggleSound, toggleTopic}) {
  const [{contextSettings, contextScore, contextStatistics}, setMenu] = useState(
    {contextSettings: false, contextScore: false, contextStatistics: false});

  const [isEnter, setIsEnter] = useState(false);

  const localMove = localStorage.getItem('move') || 0;

  const [contextMove, setContext] = useState(Number(localMove));

  const [{contextStart, contextExit, contextWin}, setStart] = useState({
    contextStart: false,
    contextExit: false,
    contextWin: false
  });

  const [contextSave, setSave] = useState(false);

  const setFull = () => {
    setIsEnter((isEnter) => !isEnter);
  };

  useEffect(() => {
    const move = localStorage.getItem('move') || 0;
    setContext(Number(move));
  }, [contextStart]);

  audio.pause();
  audio.play();
  audio.volume = music;

  window.addEventListener('unload', () => localStorage.setItem('move', contextMove.toString()));

  document.addEventListener('keydown', (e) => {
    const code = e.keyCode;
    if (code >= 113 && code <= 118) {
      e.preventDefault();
      switch (code) {
        case 113:
          const newLang = (lang === 'en') ? 'ru' : 'en';
          return toggleLang(newLang);
        case 114:
          return toggleTopic('Children`s');
        case 115:
          return toggleTopic('Game of Thrones');
        case 116:
          return toggleTopic('Figures');
        case 117:
          return toggleMusic(0);
        case 118:
          return toggleSound(0);
      }
    }
  });

  return (
    <Context3.Provider value={[{contextSettings, contextScore, contextStatistics}, setMenu]}>
      <Fullscreen isEnter={isEnter} onChange={setIsEnter}>
        <div className='full-screen'>
      <div className='app'>
        <FullscreenBtn
          setFull={setFull}/>
        <header>
          <h1 className="text-danger">{lang === 'en' ? h1En : h1Ru}</h1>
        </header>
        <Context.Provider value={[contextMove, setContext]}>
          <Context2.Provider value={[{contextStart, contextExit, contextWin}, setStart]}>
            <Context4.Provider value={[contextSave, setSave]}>
              <Game/>
            </Context4.Provider>
          </Context2.Provider>
        </Context.Provider>
        <Settings/>
        <Statistics/>
        <Scores/>
        <Footer/>
      </div>
        </div>
      </Fullscreen>
    </Context3.Provider>
  );
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  music: state.music,
});

const mapDispatchToProps = {
  toggleLang,
  toggleTopic,
  toggleMusic,
  toggleSound
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
