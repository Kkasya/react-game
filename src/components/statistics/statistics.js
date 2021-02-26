import React, {useContext} from 'react';
import {Context3} from "../context";
import ItemTable from "./components";

import './statistics.css';

const Statistics = () => {
  const [{contextSettings, contextScore, contextStatistics}, setMenu] = useContext(Context3);

  const back = () => {
    setMenu({contextSettings: contextSettings, contextScore: contextScore, contextStatistics: false})
  };

  const dataUser = JSON.parse(localStorage.getItem('user')) || [];
  dataUser.push({user: "Testirovich", moves: 15, timer: 50, win: 1, lose: 0});
  const sortDataUser = dataUser.sort((user1, user2) => user1.user.toLowerCase() > user2.user.toLowerCase() ? 1 : -1);

  return <div>
    {contextStatistics && (
      <div className='statistics'>
        <table className="table table-hover">
          <thead>
          <tr className="table-dark">
            <th scope="row">#</th>
            <th scope="row">User</th>
            <th scope="row">Moves</th>
            <th scope="row">Time</th>
            <th scope="row">Win</th>
            <th scope="row">Lose</th>
          </tr>
          </thead>
          <tbody>
          {sortDataUser.map(({user, moves, timer, win, lose}, ind) =>
            <ItemTable
              id={ind + 1}
              user={user}
              moves={moves}
              time={timer}
              win={win}
              lose={lose}/>
          )}
          </tbody>
        </table>
        <button className="btn btn-info btn-lg back"
                onClick={back}>
          Back
        </button>
      </div>
    )}
  </div>
};

export default Statistics;