import React from 'react';
import ItemTable from "./item-table";
import {connect} from "react-redux";

const Table = ({dataUser, back, parametres, shortTable, lang}) => {

	return (
		<div className='statistics over' >
			<table className="table table-hover " >
				<thead >
				<tr className="table-dark" >
					<th scope="row" >#</th >
					{parametres.map((el) => <th scope="row" key={el} >{el}</th >)}
				</tr >
				</thead >
				<tbody >
				{dataUser.map(({user, moves, timer, win, lose}, ind) =>
					<ItemTable
						key={ind + user}
						id={ind + 1}
						user={user}
						moves={moves}
						time={timer}
						win={win}
						lose={lose}
						shortTable={shortTable} />
				)}
				</tbody >
			</table >
			<button className="btn btn-info btn-lg back btnShadow"
							onClick={back} >
				{(lang === 'en') ? 'Back' : 'Назад'}
			</button >
		</div >
	)
};

const mapStateToProps = (state) => ({
	lang: state.lang
});

export default connect(mapStateToProps)(Table);