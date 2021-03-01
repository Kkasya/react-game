import React, {useState, useEffect, useContext} from 'react';
import Cards from "./components/cards";
import InfoBoard from "./components/info_board";
import Start from "./components/start";
import Win from "./components/win";
import Menu from "../menu";
import {ExitMessage, SaveForm} from "../messages";
import Footer from "../footer";
import {Context2} from "../context";

import './game.css';

const Game = () => {
  const localTimer = localStorage.getItem('timer') || 0;
  const [timer, setTimer] = useState(Number(localTimer));
  const [win, setWin] = useState(false);
  const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);

  const onChangeTime = (newTime) => setTimer(newTime);
  const onChangeWin = (newWin) => setWin(newWin);

  useEffect(() => {
    const time = localStorage.getItem('timer') || 0;
    onChangeTime(Number(time));
  }, [contextStart]);

  window.addEventListener('unload', () => localStorage.setItem('timer',timer.toString()));

  return (
    <div className="d-inline-flex">
      <div className='game'>
        <InfoBoard
          timer={timer}
          onChangeTime={onChangeTime}/>
        <div className="game-cards">
          <Cards
          onChangeWin={onChangeWin}/>
          <Start/>
          <Win/>
        </div>
        <ExitMessage/>
        <SaveForm
          timer={timer}
        win={win}/>
      </div>
      <Menu
        timer={timer}/>
    </div>
  )
};

export default Game;