import React, {useContext} from 'react';
import {Context2} from "../../context";

import '../game.css';
import '../../app/App.css';

const audio = new Audio('/sounds/btn.mp3');

const Start = () => {
	const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);

	const start = () => {
		audio.play();
		setStart({
				contextStart: true,
				contextExit: contextExit,
				contextWin: contextWin
		});
	};

	return (
	<div>
		{ !contextStart ? (<button className="btn btn-info btn-lg start btnShadow"
						 onClick={start} >
			Start
		</button >) : (<></>)}
	</div>
);
};

export default Start;