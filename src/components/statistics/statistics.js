import React, {useContext} from 'react';
import {Context3} from "../context";
import {getUsers} from "../../utils";
import Table from "./components/table";

import './statistics.css';
import '../app/App.css';
import {connect} from "react-redux";

const audio = new Audio('/sounds/btn.mp3');
const paramEn = ['User', 'Moves', 'Time', 'Win', 'Lose'];
const paramRu = ['Имя', 'Ходы', 'Время', 'Победа', 'Проигрыш'];

const Statistics = ({lang}) => {
  const [{contextSettings, contextScore, contextStatistics}, setMenu] = useContext(Context3);
  const dataUser = getUsers('user', 'low');
  const param = (lang === 'en') ? paramEn : paramRu;

  const back = () => {
    audio.play();
    setMenu({contextSettings: contextSettings, contextScore: contextScore, contextStatistics: false})
  };


  return <>
    {contextStatistics && (
      <Table
        back={back}
        dataUser={dataUser}
        parametres={param}
      />
    )}
  </>
};

const mapStateToProps = (state) => ({
  lang: state.lang
});

export default connect(mapStateToProps)(Statistics);