import React, {useContext} from 'react';
import {Context3} from "../context";
import {getUsers} from "../../utils";
import Table from "./components";
import {connect} from "react-redux";
import {paramScoreEn, paramScoreRu} from "../../utils/CONSTANT";

const audio = new Audio('/sounds/btn.mp3');

const Scores = ({lang, sound}) => {
	const [{contextScore}, setMenu] = useContext(Context3);
	const dataUser = getUsers('moves', 'low', 'win');
	const param = (lang === 'en') ? paramScoreEn : paramScoreRu;

	const back = () => {
		audio.volume = sound;
		audio.play();
		setMenu({contextScore: false})
	};

	return <>
		{contextScore && (
			<Table
				back={back}
				dataUser={dataUser}
				parametres={param}
				shortTable
			/>
		)}
	</>
};

const mapStateToProps = (state) => ({
	lang: state.lang,
	sound: state.sound,
});

export default connect(mapStateToProps)(Scores);