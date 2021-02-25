import React, {useState} from 'react';
import Cards from "./components/cards";
import InfoBoard from "./components/info_board";
import Start from "./components/start";
import Win from "./components/win";
import Menu from "../menu";

import './game.css';

const Game = () => {
  return (


          <div className="d-inline-flex">
            <div className="game">
              <InfoBoard/>
              <div className="game-cards">
                <Cards/>
                <Start/>
                <Win/>
              </div>
            </div>
            <Menu/>
          </div>


  )
};

export default Game;