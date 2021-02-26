import React from 'react';

const ItemTable = ({id, user, moves, time, win, lose}) => {
  return (
    <tr className="table-info">
      <th scope="row" className="text-danger">{id}</th>
      <th scope="row" className="text-danger">{user}</th>
      <td>{moves}</td>
      <td>{time}</td>
      <td>{win}</td>
      <td>{lose}</td>
    </tr>
  )
}

export default ItemTable;