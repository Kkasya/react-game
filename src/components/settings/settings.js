import React, {useContext} from 'react';
import {Context3} from "../context";
import SettingsLanguage from "./setting-language";
import SettingsSize from "./setting-size";
import SettingsSound from "./setting-sounds";
import SettingsTopic from "./setting-topic";
import SettingsMusic from "./setting-music";
import {ItemSetting} from "./components";

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
  title: 'Settings:'
};

const settingRu = {
  back: 'Назад',
  title: 'Настройки:'
};

const Settings = ({lang}) => {
  const [{contextSettings, contextScore, contextStatistics}, setMenu] = useContext(Context3);

  const data = (lang === 'en') ? dataEn : dataRu;
  const setting = (lang === 'en') ? settingEn : settingRu;

  const back = () => {
    audio.play();
    setMenu({contextSettings: false, contextScore: contextScore, contextStatistics: contextStatistics})
  };

   return <>  {contextSettings && (
     <div className='settings'>
       <h2 className='text-danger'>{setting.title}</h2>
       <div className='settings-wrapper btnShadow'>
       {data.map(({label, elem}) => <ItemSetting label={label} elem={elem} />)}
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
  lang: state.lang
});

export default connect(mapStateToProps)(Settings);