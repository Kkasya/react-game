import React, {useContext} from 'react';
import ItemMenu from "./components/item-menu";
import {Context2, Context3} from "../context";

import './menu.css';

const audio = new Audio('/sounds/btn.mp3');

const Menu = ({timer}) => {
  const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);
  const [{contextSettings, contextScore, contextStatistics}, setMenu] = useContext(Context3);

  const startGame = () => {
   if(!contextWin) {
      audio.play();
      if (timer) endGame();
      else {
        setStart({
          contextStart: false,
          contextExit: contextExit,
          contextWin: contextWin
        });
      }
    }
  };

  const endGame = () => {
    if (!contextWin) {
      audio.play();

    if (contextStart) setStart({
      contextStart: contextStart,
      contextExit: true,
      contextWin: contextWin
    });
  }
  };

  const setSettings = () => {
    if(!contextWin) {
      audio.play();
      setMenu({
        contextSettings: true,
        contextScore: contextScore,
        contextStatistics: contextStatistics
      });
    }
  };

  const showScores = () => {
    if(!contextWin) {
      audio.play();
      setMenu({
        contextSettings: contextSettings,
        contextScore: true,
        contextStatistics: contextStatistics
      });
    }
  };

  const showStatistics = () => {
    if(!contextWin) {
      audio.play();
      setMenu({
        contextSettings: contextSettings,
        contextScore: contextScore,
        contextStatistics: true
      });
    }
  };


  const itemsSettings = [
    {title: 'New game', operation: startGame},
    {title: 'End game', operation: endGame},
    {title: 'Settings', operation: setSettings},
    {title: 'Scores', operation: showScores},
    {title: 'Statistics', operation: showStatistics},
  ];


  return (
    <div className="menu">
      {itemsSettings.map(({title, operation}) => {
        return (<ItemMenu
          key={title}
          title={title}
          operation={operation}
        />)
      })}
    </div>
  )
};

export default Menu;