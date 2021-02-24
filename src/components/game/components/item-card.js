import React from 'react';

import '../game.css';


const ItemCard = ({id, el, isClosed, isGuessed, checkCard}) => {
	const startPath = '/image/theme/1/';
	const pathImg = (!isGuessed && isClosed) ? 'background.jpg' : `${el}.jpg`;
	//const [pathImg, setPathImg] = useState(`background.jpg`);
	// const [context, setContext] = useContext(ContextChooseCard);
	// const chooseCard = (e) => {
	// 	console.log(startPath + pathImg);
	// 	const card = e.target.id;
	// 	setPathImg(`${card}.jpg`);

// console.log(pathImg)
// 		setPathImg(prevCard => {
// 			const prev = prevCard.slice(0,1);
// 			console.log(card, prev);
// 			prevCard = `${card}.jpg`;
// 			console.log(prevCard);
// 			return  prevCard;
// 		});
// 		setContext((context) => {
// 			const prevCard = document.getElementById(context);
// 			if (context !== null) console.log(prevCard.src);
// 			if (context === null) {
// 				setPathImg(`${card}.jpg`);
// 				return card;
// 			} else if (context === card) {
// 				return null;
// 			} else {
// 				const prevCard = document.getElementById(context);
// 				console.log(prevCard);
// 				setTimeout(() => {
//
// 					setPathImg(`background.jpg`);
// 					prevCard.src = startPath + pathImg;
// 				}, 1000);
// 				return null ;
// 			}
// 		})
// 		console.log(e.target.id, context);
// 		//setPathImg(`/image/theme/1/cards/${e.target.id}.jpg`);


	return (
		<div key={id} className="card card-body" onClick={checkCard} >
			<img id={el} src={startPath + pathImg} alt="card" />
		</div >
	)
};

export default ItemCard;