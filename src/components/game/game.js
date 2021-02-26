import React, {useState} from 'react';
import Cards from "./components/cards";
import InfoBoard from "./components/info_board";
import Start from "./components/start";
import Win from "./components/win";
import Menu from "../menu";
import {ExitMessage, SaveForm} from "../messages";

import './game.css';

const Game = () => {
  const [timer, setTimer] = useState(0);

  const onChangeTime = (newTime) => setTimer(newTime);

  return (


          <div className="d-inline-flex">
            <div className="game">
              <InfoBoard
              timer={timer}
              onChangeTime={onChangeTime}/>
              <div className="game-cards">
                <Cards/>
                <Start/>
                <Win/>
              </div>
              <ExitMessage/>
              <SaveForm
              timer={timer}/>
            </div>
            <Menu
            timer={timer}/>
          </div>


  )
};

export default Game;