import React, {useContext, useEffect} from 'react';

import '../game.css';
import {Context2, Context4} from "../../context/context";

const Win = () => {
  const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);
  const [contextSave, setSave] = useContext(Context4);

  useEffect(() => {
    setTimeout(() => {
      if (contextWin) {
        setSave(true);
        setStart({
            contextStart: contextStart,
            contextExit: contextExit,
            contextWin: false
        });
      }
    }, 6500);
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

export default Win;