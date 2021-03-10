import React, {useContext, useEffect} from 'react';
import {Context2, Context4} from "../../context";
import {connect} from "react-redux";
import '../game.css';

const audio = new Audio('/sounds/win.mp3')
const Win = ({sound, lang}) => {
	const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);
	const [, setSave] = useContext(Context4);

	useEffect(() => {
		if (contextWin) {
			audio.volume = sound;
			audio.play();
		}
		setTimeout(() => {
			if (contextWin) {
				setSave(true);

				setStart({
					contextStart: contextStart,
					contextExit: contextExit,
					contextWin: false
				});
			}
		}, 4500);
	}, [contextWin]);

	const src = (lang === 'en') ? "/image/winE.gif" : "/image/winR.gif";

	return (
		<>
			{contextWin && (<div className="winR" >
				<img src={src}
						 alt="Congratulations" />
			</div >) && (<div className="winE" >
				<img src={src}
						 alt="Congratulations" />
			</div >)
			}
		</>
	)
};

const mapStateToProps = (state) => ({
	sound: state.sound,
	lang: state.lang,
});

export default connect(mapStateToProps)(Win);