import React, {useContext} from 'react';
import {Context2} from "./context";

import '../game.css';

const Start = () => {
	const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);

	const start = () => {
		setStart({
				contextStart: true,
				contextExit: contextExit,
				contextWin: contextWin
		});
	};

	return (
	<div>
		{ !contextStart ? (<button className="btn btn-info btn-lg start "
						 onClick={start} >
			Start
		</button >) : (<></>)}
	</div>
);
};

export default Start;