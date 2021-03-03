import React, {useContext} from 'react';
import {Context3} from "../context";
import {dataEn, dataRu, keysRu, keysEn, settingEn, settingRu} from './components/data-settings';
import {ItemSetting, ItemHotkeys} from "./components";
import {connect} from "react-redux";

import './settings.css';

const audio = new Audio('/sounds/btn.mp3');

const Settings = ({lang, sound}) => {
  const [{contextSettings, contextScore, contextStatistics}, setMenu] = useContext(Context3);

  const data = (lang === 'en') ? dataEn : dataRu;
  const setting = (lang === 'en') ? settingEn : settingRu;
  const keys = (lang === 'en') ? keysEn : keysRu;

  const back = () => {
    audio.volume = sound;
    audio.play();
    setMenu({contextSettings: false, contextScore: contextScore, contextStatistics: contextStatistics})
  };

  return <>  {contextSettings && (
    <div className='settings'>
      <h2 className='text-danger'>{setting.title}</h2>
      <div className='settings-wrapper btnShadow'>
        {data.map(({label, elem}) => <ItemSetting key={label} label={label} elem={elem}/>)}
        <h3 className='text-danger'>{setting.hot}</h3>
        <div className="hot-keys">
          {keys.map(({hKey, action}) => <ItemHotkeys key={hKey} hKey={hKey} action={action} />)}
        </div>
      </div>
      <button className="btn btn-info btn-lg back btnShadow"
              onClick={back}>
        {setting.back}
      </button>
    </div>
  )}
  </>
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  sound: state.sound,
});

export default connect(mapStateToProps)(Settings);