import React, {useContext} from 'react';
import {Context2, Context4} from "../context";
import {connect} from "react-redux";

import './messages.css';

const audio = new Audio('/sounds/btn.mp3');

const exitEn = {
	question: 'Are you sure to end the game?',
	end: 'End the game',
	close: 'Close',
};

const exitRu = {
	question: 'Вы уверены, что хотите закончить игру?',
	end: 'Закончить игру',
	close: 'Выйти',
};

const ExitMessage = ({lang, sound}) => {
	const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);
	const [contextSave, setSave] = useContext(Context4);

	const exit = (lang === 'en') ? exitEn : exitRu;

	const closeMessageExit = () => {
		audio.volume = sound;
		audio.play();
		setStart({contextStart, contextExit: false, contextWin})
	};

	const endGame = () => {
		setSave(true);
		closeMessageExit();
	};

	return (
		<>
			{contextExit &&
			<div className="modal message" >
				<div className="modal-dialog" role="document" >
					<div className="modal-content" >
						<div className="modal-header" >
							<h2 className="modal-title" >{exit.question}</h2 >
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"
											onClick={closeMessageExit} >
								<span aria-hidden="true" >&times;</span >
							</button >
						</div >
						<div className="modal-footer justify-content-around" >
							<button type="button" className="btn btn-primary btn-exit"
											onClick={endGame} >
								{exit.end}
							</button >
							<button type="button" className="btn btn-secondary btn-exit " data-dismiss="modal"
											onClick={closeMessageExit} >
								{exit.close}
							</button >
						</div >
					</div >
				</div >
			</div >
			}
		</>
	)
};

const mapStateToProps = (state) => ({
	lang: state.lang,
	sound: state.sound
});

export default connect(mapStateToProps)(ExitMessage);