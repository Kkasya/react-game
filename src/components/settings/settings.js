import React, {useContext} from 'react';
import {Context3} from "../context";
import SettingsLanguage from "./setting-language/setting-language";

import './settings.css';

const audio = new Audio('/sounds/btn.mp3');

const Settings = () => {
  const [{contextSettings, contextScore, contextStatistics}, setMenu] = useContext(Context3);

  const back = () => {
    audio.play();
    setMenu({contextSettings: false, contextScore: contextScore, contextStatistics: contextStatistics})
  };

  return <>  {contextSettings && (
    <div className='settings'>
      <h2>Settings:</h2>
      <div className="list-group">
        <div className="list-group-item active flex-r">
          <h3 className="setting-item">Change language: </h3>
            <SettingsLanguage/>
        </div>
      </div>
      <button className="btn btn-info btn-lg back btnShadow"
              onClick={back}>
        Back
      </button>
    </div>
  )}
  </>
}

export default Settings;