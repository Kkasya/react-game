import React, {useContext, useState, useEffect} from 'react';
import Context from "./context";

import '../game.css'

const InfoBoard = () => {
  const [contextMove, setContext] = useContext(Context);
  const [timer, setTimer] =useState(0);

  useEffect(() => {
    let counter;
    if (timer >= 0) {
      counter = setTimeout(() => setTimer((c) => c + 1), 1000)
    }

    return () => {
      if (counter) {
        clearTimeout(counter);
      }
    };
  }, [timer]);

  const padTime = (time) => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
  };

  const format = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${padTime(min)}:${padTime(sec)}`;
  }

  return (
    <div className="d-flex justify-content-between text-info">
      <div className="d-flex info-item">
        <span>Time:</span>
        <span id='time' className='text-success'>{format(timer)}</span>
      </div>
      <div className="d-flex info-item">
        <span id='moves' className='text-success'>{contextMove}</span>
        <span>moves</span>
      </div>

    </div>
  )
}

export default InfoBoard;