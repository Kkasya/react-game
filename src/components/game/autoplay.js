import React, {useState, useContext, useEffect} from 'react';
import ItemCard from "./components/item-card";
import {connect} from "react-redux";
import getCards from "../../utils/getCards";

const SIZE = {
	'2*4': 8,
	'3*4': 12,
	'3*6': 18,
};

const audio = new Audio('/sounds/card.mp3');

const Autoplay = ({isPlay, setIsPlay, sound, size}) => {
	const countCards = SIZE[size];
	const data = getCards(countCards).map((i) => ({...i}));
	const [cards, changeCard] = useState(data);

	const setData = () => {
		const data = getCards(countCards).map((i) => ({...i}));
		changeCard(data);
	};

	useEffect(() => {
		setData();
	}, [size]);

	const play = (src) => {
		if (audio) audio.pause();
		audio.src = src;
		audio.volume = sound;
		audio.play();
	};

	function check(card) {
		changeCard((cards) => {
			const arr = [...cards];
			const elem = arr.find((item) => (item.el === card.el) && (item.id !== card.id));
			if (elem.isClosed) {
				play('/sounds/right.mp3');
				elem.isClosed = false;
				elem.isGuessed = true;
				return arr;
			} else return cards;
		})
		return new Promise(res => setTimeout(res, 500));
	}

	function open(card) {
		changeCard((cards) => {
			const arr = JSON.parse(JSON.stringify(cards));
			const elem = arr.find((item) => item.id === card.id);
			if (elem.isClosed) {
				play('/sounds/card.mp3');
				elem.isClosed = false;
				elem.isGuessed = true;
				return arr;
			} else return cards;
		})
		return new Promise(res => setTimeout(res, 500));
	}

	async function playCards() {
		let i = 0;
		while (i < countCards) {
			const card = cards[i];
			i += 1;
			if (!card.isClosed) return;

			await open(card);
			await check(card);
		}
		setIsPlay(false);
		setData();
	}

	if (isPlay) setTimeout(playCards, 500);

	return (<>{isPlay &&
		<div className="d-flex cards autoplay" >
			{cards.map(({id, el, isClosed, isGuessed}) => {
				return (<ItemCard
					key={id}
					el={el}
					isClosed={isClosed}
					isGuessed={isGuessed}
					checkCard={() => {
					}}
					countCards={countCards}
				/>)
			})}
		</div >}
		</>
	)
}

const mapStateToProps = (state) => ({
	sound: state.sound,
	size: state.size,
});

export default connect(mapStateToProps)(Autoplay);