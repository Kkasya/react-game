import React from 'react';
import ItemCard from "./ItemCard";
import './game.css';

const generateCards = (len) => {
	const arrEmpty = new Array(len / 2).fill(0);
	const arr = arrEmpty.map((el, id) => el + id);
	return [...arr, ...arr];
};

const shuffle = (arr) => {
	return arr.sort(() => Math.random() - 0.5);
}

const cards = shuffle(generateCards(12));


const CardsComponent = () => {
	return (
		<div className="d-flex cards" >
			{cards.map((el, ind) => {
				return (<ItemCard
					el={el}
					ind={ind}
					 />)
			})}
		</div >
	)
}

const Game = () => {
	return (
		<div >
			<CardsComponent />
		</div >
	)
};

export default Game;