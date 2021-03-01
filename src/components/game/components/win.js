import React, {useContext, useEffect} from 'react';

import '../game.css';
import {Context2, Context4} from "../../context/context";
import {connect} from "react-redux";

const audio = new Audio('/sounds/win.mp3')
const Win = ({sound}) => {
  const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);
  const [contextSave, setSave] = useContext(Context4);

  useEffect(() => {
    if (contextWin) {
      audio.volume = sound;
      audio.play();
    }
    setTimeout(() => {
      if (contextWin) {
        setSave(true);

        setStart({
            contextStart: contextStart,
            contextExit: contextExit,
            contextWin: false
        });
      }
    }, 4500);
      }, [contextWin]);

return (
  <>
    {contextWin && (<div className="winR">
      <img src="/image/winR.gif"
           alt="Congratulations"/>
    </div>) && (<div className="winE">
        <img src="/image/winE.gif"
             alt="Congratulations"/>
      </div>)
    }
  </>
)
};

const mapStateToProps = (state) => ({
  sound: state.sound,
});

export default connect(mapStateToProps)(Win);