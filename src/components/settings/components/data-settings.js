import SettingsLanguage from "../setting-language";
import SettingsTopic from "../setting-topic";
import SettingsSize from "../setting-size";
import SettingsMusic from "../setting-music";
import SettingsSound from "../setting-sounds";
import React from "react";

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

export {dataEn, dataRu, keysRu, keysEn, settingEn, settingRu}