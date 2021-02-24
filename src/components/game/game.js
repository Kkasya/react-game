import React, {useState} from 'react';
import ItemCard from "./ItemCard";
import ContextChooseCard from "../context";
import './game.css';

const generateCards = (len) => {
	const arr = (new Array(len / 2).fill(0)).map((el, id) => el + id);
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
	const [context, setContext] =useState(null);
	return (
		<ContextChooseCard.Provider value={[context, setContext]}>
		<div >
			<CardsComponent />
		</div >
		</ContextChooseCard.Provider>
	)
};

export default Game;