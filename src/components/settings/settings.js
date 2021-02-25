import React, {useContext} from 'react';

import './settings.css';
import ItemSettings from "./components/item-setting";
import {Context2} from "../game/components/context";

const Settings = () => {
  const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);

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

  };


  const itemsSettings = [
    {title: 'New game', operation: startGame},
    {title: 'Settings', operation: setSettings},
    {title: 'Scores', operation: showScores},
    {title: 'Statistics', operation: showStatistics},
  ];


  return (
    <div className="settings">
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

export default Settings;