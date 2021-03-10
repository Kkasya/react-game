import React, {useContext} from 'react';
import {Context3} from "../context";
import {getUsers} from "../../utils";
import Table from "./components/table";
import {connect} from "react-redux";
import {paramEn, paramRu} from "../../utils/CONSTANT";
import './statistics.css';
import '../app/App.css';

const audio = new Audio('/sounds/btn.mp3');

const Statistics = ({lang, sound}) => {
	const [{contextStatistics}, setMenu] = useContext(Context3);
	const dataUser = getUsers('user', 'low');
	const param = (lang === 'en') ? paramEn : paramRu;

	const back = () => {
		audio.volume = sound;
		audio.play();
		setMenu({contextStatistics: false})
	};


	return <>
		{contextStatistics && (
			<Table
				back={back}
				dataUser={dataUser}
				parametres={param}
			/>
		)}
	</>
};

const mapStateToProps = (state) => ({
	lang: state.lang,
	sound: state.sound,
});

export default connect(mapStateToProps)(Statistics);