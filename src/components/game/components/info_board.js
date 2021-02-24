import React from 'react';

import '../game.css'

const InfoBoard = () => {
  return (
    <div className="d-flex justify-content-between text-info">
      <div className="d-flex info-item">Time:
        <p id='time' className='text-success'>00:00:00</p>
      </div>
      <div className="d-flex info-item">
        <p id='moves' className='text-success'>0</p>moves
      </div>

    </div>
  )
}

export default InfoBoard;