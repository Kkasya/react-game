import React, {useContext} from 'react';
import {Context3} from "../context";


import './statistics.css';

const Statistics = () => {
  const [{contextSettings, contextScore, contextStatistics}, setMenu] = useContext(Context3);
  const back = () => {
    setMenu({contextSettings: contextSettings, contextScore: contextScore, contextStatistics: false})
  };

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
        <tr className="table-info">
          <th scope="row">Info</th>
          <th scope="row">Column content</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        </tbody>
      </table>
      <button className="btn btn-info btn-lg back"
      onClick={back} >
      Back
      </button >
      </div>
  )}
  </div>
};

export default Statistics;