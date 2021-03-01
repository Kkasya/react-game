import React from 'react';

import '../game/game.css';

const FullscreenBtn = ({setFull}) => {

  return (
    <img className='full' src="https://static.thenounproject.com/png/2814-200.png" alt="fullscreen"
         role="button"
         onClick={setFull}/>
  )
};

export default FullscreenBtn;