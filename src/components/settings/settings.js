import React, {useContext} from 'react';
import {Context3} from "../context";
import SettingsLanguage from "./setting-language";
import SettingsSize from "./setting-size";
import SettingsSound from "./setting-sounds";
import SettingsTopic from "./setting-topic";
import SettingsMusic from "./setting-music";
import {ItemSetting} from "./components";

import './settings.css';

const audio = new Audio('/sounds/btn.mp3');

const Settings = () => {
  const [{contextSettings, contextScore, contextStatistics}, setMenu] = useContext(Context3);

  const back = () => {
    audio.play();
    setMenu({contextSettings: false, contextScore: contextScore, contextStatistics: contextStatistics})
  };

  const data = [
    {label: 'Language', elem: <SettingsLanguage/>},
    {label: 'Topic', elem: <SettingsTopic/>},
    {label: 'Size', elem: <SettingsSize/>},
    {label: 'Music', elem: <SettingsMusic/>},
    {label: 'Sound', elem: <SettingsSound/>},
  ]

   return <>  {contextSettings && (
     <div className='settings'>
       <h2 className='text-danger'>Settings:</h2>
       <div className='settings-wrapper btnShadow'>
       {data.map(({label, elem}) => <ItemSetting label={label} elem={elem} />)}
     </div>
    {/*//   <div className="list-group flex-r">*/}
    {/*//     <h3 className="setting-item">Language: </h3>*/}
    {/*//     <div className="">*/}
    {/*//         <SettingsLanguage/>*/}
    {/*//     </div>*/}
    {/*//   </div>*/}
    {/*//   <div className="list-group flex-r">*/}
    {/*//     <h3 className="setting-item">Topic: </h3>*/}
    {/*//     <div className="">*/}
    {/*//       <SettingsTopic/>*/}
    {/*//     </div>*/}
    {/*//   </div>*/}
    {/*//   <div className="list-group flex-r">*/}
    {/*//     <h3 className="setting-item">Size: </h3>*/}
    {/*//     <div className="">*/}
    {/*//       <SettingsSize />*/}
    {/*//     </div>*/}
    {/*//   </div>*/}
    {/*//   <div className="list-group flex-r">*/}
    {/*//     <h3 className="setting-item">Music: </h3>*/}
    {/*//     <div className="">*/}
    {/*//       <SettingsMusic />*/}
    {/*//     </div>*/}
    {/*//   </div>*/}
       <button className="btn btn-info btn-lg back btnShadow"
               onClick={back}>
         Back
       </button>
    </div>
   )}
   </>
}

export default Settings;