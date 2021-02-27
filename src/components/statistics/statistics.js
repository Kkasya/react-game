import React, {useContext} from 'react';
import {Context3} from "../context";
import {getUsers} from "../../utils";
import Table from "./components/table";

import './statistics.css';
import '../app/App.css';

const Statistics = () => {
  const [{contextSettings, contextScore, contextStatistics}, setMenu] = useContext(Context3);
  const dataUser = getUsers('user', 'low');

  const back = () => {
    setMenu({contextSettings: contextSettings, contextScore: contextScore, contextStatistics: false})
  };


  return <>
    {contextStatistics && (
      <Table
        back={back}
        dataUser={dataUser}
        parametres={['User', 'Moves', 'Timer', 'Win', 'Lose']}
      />
    )}
  </>
};

export default Statistics;