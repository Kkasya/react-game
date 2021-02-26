import React, {useContext} from 'react';
import {Context2, Context4} from "../context";

import './messages.css';

const ExitMessage = () => {
  const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);
  const [contextSave, setSave] = useContext(Context4);

  const closeMessageExit = () => {
    setStart({contextStart, contextExit: false, contextWin})
  };

  const endGame = () => {
    setSave(true);
    closeMessageExit();
  };

  return (
    <>
      {contextExit &&
      <div className="modal message">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Are you sure to end the game?</h2>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                      onClick={closeMessageExit}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-footer justify-content-around">
              <button type="button" className="btn btn-primary btn-exit"
                      onClick={endGame}>
                End the game
              </button>
              <button type="button" className="btn btn-secondary btn-exit " data-dismiss="modal"
                      onClick={closeMessageExit}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  )
};

export default ExitMessage;