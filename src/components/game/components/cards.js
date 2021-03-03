import React, {useState, useContext, useEffect} from 'react';
import ItemCard from "./item-card";
import {Context, Context2, Context4} from "../../context";
import {connect} from "react-redux";
import getCards from "../../../utils/getCards";

const SIZE = {
	'2*4': 8,
	'3*4': 12,
	'3*6': 18,
};

const Cards = ({onChangeWin, sound, size}) => {
	const [, setContextMove] = useContext(Context);
	const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);
	const [contextSave] = useContext(Context4);

	const countCards = SIZE[size];

	const dataCards = JSON.parse(localStorage.getItem('game')) || getCards(countCards).map((i) => ({...i}));

	const [{cards, openedCard, countOpen, countGuessed}, changeCard] = useState(
		{cards: dataCards, openedCard: null, countOpen: 0, countGuessed: 0});

	const play = (src) => {
		const audio = new Audio(src);
		audio.volume = sound;
		audio.play();
	};

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('game')) || getCards(countCards).map((i) => ({...i}));
		changeCard({
			cards: data,
			openedCard: null,
			countOpen: 0,
			countGuessed: 0
		});
		const move = localStorage.getItem('move') || 0;
		setContextMove(Number(move));

	}, [contextStart, size]);

	const openCard = (id) => {

		if (!contextStart || contextExit || contextSave || countOpen > 1) return;

		const newCountOpen = countOpen + 1;

		changeCard(({cards, openedCard, countOpen, countGuessed}) => {
			const arr = cards.map((i) => ({...i}));
			const elem = arr.find((item) => item.id === id);

			if (!elem.isClosed) return {cards, openedCard, countOpen, countGuessed};
			play('/sounds/card.mp3');

			setContextMove((contextMove) => contextMove + 1);
			elem.isClosed = false;
			setTimeout(() => checkCards(arr, elem), 300);
			return {cards: arr, openedCard: openedCard, countOpen: newCountOpen, countGuessed: countGuessed};
		});
	}

	const checkCards = (arr, elem) => {
		let newOpenCard = null;
		let newCountOpen = countOpen;
		let newCountGuessed = countGuessed;

		if (openedCard === null) {
			newOpenCard = elem;
		} else if (openedCard.el === elem.el) {
			play('/sounds/right.mp3');
			elem.isGuessed = true;
			const cardArray = arr.find((item) => item.id === openedCard.id);
			cardArray.isGuessed = true;
			newCountOpen = 0;
			newCountGuessed += 2;
		} else {
			play('/sounds/wrong.mp3');
			newCountOpen = 0;
			arr.map((elem) => {
				if (!elem.isClosed && !elem.isGuessed) elem.isClosed = true;
			});
		}

		if (newCountGuessed === countCards) {
			onChangeWin(true);
			setStart({
				contextStart: contextStart,
				contextExit: contextExit,
				contextWin: true
			});
		}

		changeCard({
			cards: arr,
			openedCard: newOpenCard,
			countOpen: newCountOpen,
			countGuessed: newCountGuessed
		});
	};
	window.addEventListener('unload', () => localStorage.setItem('game', JSON.stringify(cards)));

	return (
		<div className="d-flex cards" >
			{cards.map(({id, el, isClosed, isGuessed}) => {
				return (<ItemCard
					key={id}
					el={el}
					isClosed={isClosed}
					isGuessed={isGuessed}
					checkCard={() => openCard(id)}
					countCards={countCards}
				/>)
			})}
		</div >
	)
}
const mapStateToProps = (state) => ({
	sound: state.sound,
	size: state.size,
});

export default connect(mapStateToProps)(Cards);