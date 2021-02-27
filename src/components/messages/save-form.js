import React, {useState, useContext} from 'react';
import {Context, Context2, Context4} from "../context";

import './messages.css';

const audio = new Audio('/sounds/btn.mp3');

const SaveForm = ({timer, win}) => {
  const [contextMove, setContext] = useContext(Context);
  const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);
  const [contextSave, setSave] = useContext(Context4);
  const [label, setLabel] = useState('');

  const closeMessageForm = () => {
    audio.play();
    setSave(false);
    setStart({contextStart: false, contextExit, contextWin});
  };

  const saveGame = () => {

    localStorage.removeItem('game')
    localStorage.removeItem('timer');
    localStorage.removeItem('move');

    const dataUser = JSON.parse(localStorage.getItem('user')) || [];
    const user = (!label) ? 'anonymous' : label;
    dataUser.push({
      'user': user.toUpperCase(),
      'moves': contextMove,
      'timer': timer,
      'win': Number(win),
      'lose': Number(!win)
    });

    localStorage.setItem('user', JSON.stringify(dataUser));
    setLabel('');

    closeMessageForm();
  };

  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };

  return (
    <>
      {contextSave &&
      <div className="modal message">
        <div className="modal-dialog" role="document">
          <div className="modal-content  flex-column">
            <div className="modal-header">
              <h2 className="modal-title">Enter your nickname</h2>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                      onClick={closeMessageForm}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <input type="text" className="form-control" placeholder="Nickname"
                   onChange={onLabelChange}/>
            <div className="modal-footer justify-content-around">
              <button type="button" className="btn btn-primary btn-exit"
                      onClick={saveGame}>
                Save the result
              </button>
              <button type="button" className="btn btn-secondary btn-exit " data-dismiss="modal"
                      onClick={closeMessageForm}>
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

export default SaveForm;

