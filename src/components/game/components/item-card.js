import React from 'react';

import '../game.css';


const ItemCard = ({el, isClosed, isGuessed, checkCard}) => {
	const startPath = '/image/theme/1/';
	const pathImg = (!isGuessed && isClosed) ? 'background.jpg' : `${el}.jpg`;

	return (
		<div className="card card-body" onClick={checkCard} >
			<img id={el} src={startPath + pathImg} alt="card" />
		</div >
	)
};

export default ItemCard;