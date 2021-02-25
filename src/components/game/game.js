import React, {useState} from 'react';
import Cards from "./components/cards";
import InfoBoard from "./components/info_board";
import Context from "./components/context.js"

import './game.css';

const Game = () => {
  const [contextMove, setContext] = useState(0);
  return (
    <Context.Provider value={[contextMove, setContext]}>
    <div className="game">
      <InfoBoard />
      <Cards/>
    </div>
    </Context.Provider>
  )
};

export default Game;