import React, {useContext} from 'react';
import {Context2} from "./context";

import '../game.css';

const Start = () => {
	const [contextStart, setStart] = useContext(Context2);
	const start = () => {
		setStart(true);
	}
return (
	<div>
		{ !contextStart ? (<button className="btn btn-info btn-lg start text-secondary"
						 onClick={start} >
			Start
		</button >) : (<></>)}
	</div>
);
};

export default Start;