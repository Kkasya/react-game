import React from 'react';

const ItemTable = ({id, user, moves, time, win, lose, shortTable}) => {

	return (
		<>
			{shortTable ?
				(<tr className="table-primary" >
					<th scope="row" className="text-danger" >{id}</th >
					<th scope="row" className="text-danger" >{user}</th >
					<td >{moves}</td >
					<td >{time}</td >
				</tr >) :
				(<tr className="table-primary" >
					<th scope="row" className="text-danger" >{id}</th >
					<th scope="row" className="text-danger" >{user}</th >
					<td >{moves}</td >
					<td >{time}</td >
					<td >{win}</td >
					<td >{lose}</td >
				</tr >)
			}
		</>
	)
}

export default ItemTable;