import React from 'react';
import Cards from "./components/cards";
import InfoBoard from "./components/info_board";

import './game.css';

const Game = () => {
  return (
    <div className="game">
      <InfoBoard />
      <Cards/>
    </div>
  )
};

export default Game;