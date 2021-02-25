import React, {useState} from 'react';
import Cards from "./components/cards";
import InfoBoard from "./components/info_board";
import {Context, Context2} from "./components/context.js"
import Start from "./components/start";
import Win from "./components/win";

import './game.css';
import Settings from "../settings";

const Game = () => {
  const [contextMove, setContext] = useState(0);
  const [{contextStart, contextExit, contextWin}, setStart] = useState({contextStart: false, contextExit: false, contextWin: false});
  return (
    <Context.Provider value={[contextMove, setContext]}>
      <Context2.Provider value={[{contextStart, contextExit, contextWin}, setStart]}>

          <div className="d-inline-flex">
            <div className="game">
              <InfoBoard/>
              <div className="game-cards">
                <Cards/>
                <Start/>
                <Win/>
              </div>
            </div>
            <Settings/>
          </div>

      </Context2.Provider>
    </Context.Provider>
  )
};

export default Game;