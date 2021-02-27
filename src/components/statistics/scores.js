import React, {useContext} from 'react';
import {Context3} from "../context";
import {getUsers} from "../../utils";
import Table from "./components";

const audio = new Audio('/sounds/btn.mp3');

const Scores = () => {
  const [{contextSettings, contextScore, contextStatistics}, setMenu] = useContext(Context3);
  const dataUser = getUsers('moves', 'low', 'win');

  const back = () => {
    audio.play();
    setMenu({contextSettings: contextSettings, contextScore: false, contextStatistics: contextStatistics})
  };

  return <>
    {contextScore && (
      <Table
        back={back}
        dataUser={dataUser}
        parametres={['User', 'Moves', 'Timer']}
        shortTable
      />
    )}
  </>
};

export default Scores;