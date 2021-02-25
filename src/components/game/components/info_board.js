import React, {useContext} from 'react';
import Context from "./context";

import '../game.css'

const InfoBoard = () => {
  const [contextMove, setContext] = useContext(Context);

  return (
    <div className="d-flex justify-content-between text-info">
      <div className="d-flex info-item">
        <span>Time:</span>
        <span id='time' className='text-success'>00:00:00</span>
      </div>
      <div className="d-flex info-item">
        <span id='moves' className='text-success'>{contextMove}</span>
        <span>moves</span>
      </div>

    </div>
  )
}

export default InfoBoard;