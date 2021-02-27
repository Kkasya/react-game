import React from 'react';
import ItemTable from "./item-table";

const Table = ({dataUser, back, parametres, shortTable}) => {


  return (
    <div className='statistics over'>
      <table className="table table-hover ">
        <thead >
        <tr className="table-dark">
          <th scope="row">#</th>
          {parametres.map((el) =>  <th scope="row" key={el}>{el}</th>)}
        </tr>
        </thead>
        <tbody>
                {dataUser.map(({user, moves, timer, win, lose}, ind) =>
          <ItemTable
            key={ind+user}
            id={ind + 1}
            user={user}
            moves={moves}
            time={timer}
            win={win}
            lose={lose}
          shortTable={shortTable}/>
        )}
        </tbody>
      </table>
      <button className="btn btn-info btn-lg back btnShadow"
              onClick={back}>
        Back
      </button>
    </div>
  )
};

export default Table;