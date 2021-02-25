import React, {useContext} from 'react';
import ItemSettings from "./components/item-setting";
import {Context2, Context3} from "../context";

import './menu.css';


const Menu = () => {
  const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);
  const [{contextSettings, contextScore, contextStatistics}, setMenu] = useContext(Context3);

  const startGame = () => {
    setStart({
        contextStart: false,
        contextExit: contextExit,
        contextWin: contextWin
    });
  };

  const setSettings = () => {
  };

  const showScores = () => {

  };

  const showStatistics = () => {
    setMenu({contextSettings: contextSettings, contextScore: contextScore, contextStatistics: true});
  };


  const itemsSettings = [
    {title: 'New game', operation: startGame},
    {title: 'Settings', operation: setSettings},
    {title: 'Scores', operation: showScores},
    {title: 'Statistics', operation: showStatistics},
  ];


  return (
    <div className="menu">
      {itemsSettings.map(({title, operation}) => {
      return ( <ItemSettings
        key={title}
        title={title}
        operation={operation}
      />)
      })}
    </div>
  )
};

export default Menu;