import React, {useState} from 'react';
import Cards from "./components/cards";
import InfoBoard from "./components/info_board";
import {Context, Context2} from "./components/context.js"
import Start from "./components/start";

import './game.css';

const Game = () => {
  const [contextMove, setContext] = useState(0);
  const [contextStart, setStart] = useState(false);
  return (
    <Context.Provider value={[contextMove, setContext]}>
      <Context2.Provider value={[contextStart, setStart]} >
    <div className="game">
      <Start />
      <InfoBoard />
      <Cards/>
    </div>
      </Context2.Provider>
    </Context.Provider>
  )
};

export default Game;