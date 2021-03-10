import React, {useContext} from 'react';
import {Context2} from "../../context";
import {connect} from 'react-redux';
import {startRu, startEn} from "../../../utils/CONSTANT";
import '../game.css';

const audio = new Audio('/sounds/btn.mp3');

const Start = ({lang, sound}) => {
	const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);

	const start = () => {
		audio.volume = sound;
		audio.play();

		setStart({
			contextStart: true,
			contextExit: contextExit,
			contextWin: contextWin
		});
	};

	return (
		<div >
			{!contextStart ? (<button className="btn btn-info btn-lg start btnShadow"
																onClick={start} >
				{(lang === 'en') ? startEn : startRu}
			</button >) : (<></>)}
		</div >
	);
};

const mapStateToProps = (state) => ({
	lang: state.lang,
	sound: state.sound,
});

export default connect(mapStateToProps)(Start);