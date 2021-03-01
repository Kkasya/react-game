import React, {useContext} from 'react';
import {Context3} from "../context";
import SettingsLanguage from "./setting-language";
import SettingsSize from "./setting-size";
import SettingsSound from "./setting-sounds";
import SettingsTopic from "./setting-topic";
import SettingsMusic from "./setting-music";
import {ItemSetting, ItemHotkeys} from "./components";

import './settings.css';
import {connect} from "react-redux";

const audio = new Audio('/sounds/btn.mp3');

const dataEn = [
  {label: 'Language', elem: <SettingsLanguage/>},
  {label: 'Topic', elem: <SettingsTopic/>},
  {label: 'Size', elem: <SettingsSize/>},
  {label: 'Music', elem: <SettingsMusic/>},
  {label: 'Sound', elem: <SettingsSound/>},
]
const dataRu = [
  {label: 'Язык', elem: <SettingsLanguage/>},
  {label: 'Тема', elem: <SettingsTopic/>},
  {label: 'Размер', elem: <SettingsSize/>},
  {label: 'Музыка', elem: <SettingsMusic/>},
  {label: 'Звук', elem: <SettingsSound/>},
]

const settingEn = {
  back: 'Back',
  title: 'Settings:',
  hot: 'Hot keys:'
};

const settingRu = {
  back: 'Назад',
  title: 'Настройки:',
  hot: 'Горячие клавиши:'
};

const keysEn = [
  {hKey: 'F2 - ', action: 'Change language'},
  {hKey: 'F3 - ', action: 'Set topic Children`s'},
  {hKey: 'F4 - ', action: 'Set topic Game of Thrones'},
  {hKey: 'F5 - ', action: 'Set topic Figures'},
  {hKey: 'F6 - ', action: 'Turn off music'},
  {hKey: 'F7 - ', action: 'Turn off sounds'},
];

const keysRu = [
  {hKey: 'F2 - ', action: 'Сменить язык'},
  {hKey: 'F3 - ', action: 'Установить тему Детская'},
  {hKey: 'F4 - ', action: 'Установить тему Игры престолов'},
  {hKey: 'F5 - ', action: 'Установить тему Фигуры'},
  {hKey: 'F6 - ', action: 'Выключить музыку'},
  {hKey: 'F7 - ', action: 'Выключить звуки'}
];

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
        {data.map(({label, elem}) => <ItemSetting label={label} elem={elem}/>)}
        <h3 className='text-danger'>{setting.hot}</h3>
        <div className="hot-keys">
          {keys.map(({hKey, action}) => <ItemHotkeys hKey={hKey} action={action} />)}
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