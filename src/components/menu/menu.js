import React, {useContext} from 'react';
import ItemMenu from "./components/item-menu";
import {Context2, Context3} from "../context";
import {connect} from "react-redux";

import './menu.css';

const audio = new Audio('/sounds/btn.mp3');

const Menu = ({timer, isPlay, setIsPlay, lang, sound}) => {
	const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);
	const [{contextSettings, contextScore, contextStatistics}, setMenu] = useContext(Context3);

	const play = () => {
		audio.volume = sound;
		audio.play();
	};

	const startGame = () => {
		if (!contextWin && !isPlay) {
			play();
			if (timer) endGame();
			else {
				setStart({
					contextStart: false,
					contextExit: contextExit,
					contextWin: contextWin
				});
			}
		}
	};

	const endGame = () => {
		if (!contextWin && !isPlay) {
			play();

			if (contextStart) setStart({
				contextStart: contextStart,
				contextExit: true,
				contextWin: contextWin
			});
		}
	};

	const setSettings = () => {
		if (!contextWin && !isPlay) {
			play();
			setMenu({
				contextSettings: true,
				contextScore: contextScore,
				contextStatistics: contextStatistics
			});
		}
	};

	const showScores = () => {
		if (!contextWin && !isPlay) {
			play();
			setMenu({
				contextSettings: contextSettings,
				contextScore: true,
				contextStatistics: contextStatistics
			});
		}
	};

	const showStatistics = () => {
		if (!contextWin && !isPlay) {
			play();
			setMenu({
				contextSettings: contextSettings,
				contextScore: contextScore,
				contextStatistics: true,
			});
		}
	};

	const showAutoplay = () => {
		if (!contextWin) {
			play();
			setIsPlay(true);
		}
	};

	const itemsSettingsEn = [
		{title: 'New game', operation: startGame},
		{title: 'Settings', operation: setSettings},
		{title: 'Scores', operation: showScores},
		{title: 'Statistics', operation: showStatistics},
		{title: 'Autoplay', operation: showAutoplay},
	];

	const itemsSettingsRu = [
		{title: 'Новая игра', operation: startGame},
		{title: 'Настройки', operation: setSettings},
		{title: 'Рекорды', operation: showScores},
		{title: 'Статистика', operation: showStatistics},
		{title: 'Автопроигрывание', operation: showAutoplay},
	];
	const itemsSettings = (lang === 'en') ? itemsSettingsEn : itemsSettingsRu;

	return (
		<div className="menu" >
			{itemsSettings.map(({title, operation}) => {
				return (<ItemMenu
					key={title}
					title={title}
					operation={operation}
				/>)
			})}
		</div >
	)
};

const mapStateToProps = (state) => ({
	lang: state.lang,
	sound: state.sound,
});

export default connect(mapStateToProps)(Menu);