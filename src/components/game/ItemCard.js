import React, {useState} from 'react';

import './game.css';


const ItemCard = ({el, ind}) => {
	const [pathImg, setPathImg] = useState(`/image/theme/1/background.jpg`);

	const chooseCard = (e) => {
		console.log(e.target.id);
		setPathImg(`/image/theme/1/cards/${e.target.id}.jpg`);
	}

	return (
		<div key={ind} className="card card-body" onClick={chooseCard} >
			<img id={el} src={pathImg} alt="card" />
		</div >
	)
};

export default ItemCard;