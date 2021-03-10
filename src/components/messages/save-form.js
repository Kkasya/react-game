import React, {useState, useContext} from 'react';
import {Context, Context2, Context4} from "../context";
import {connect} from "react-redux";
import {formRu, formEn} from "../../utils/CONSTANT";
import './messages.css';

const audio = new Audio('/sounds/btn.mp3');

const SaveForm = ({timer, win, lang, sound}) => {
	const [contextMove] = useContext(Context);
	const [{contextStart}, setStart] = useContext(Context2);
	const [contextSave, setSave] = useContext(Context4);
	const [label, setLabel] = useState('');

	const form = (lang === 'en') ? formEn : formRu;

	const play = () => {
		audio.volume = sound;
		audio.play();
	}

	const closeMessageForm = () => {
		play();
		setSave(false);
		setStart({contextStart: false});
	};

	const saveGame = () => {
		play();
		localStorage.removeItem('game')
		localStorage.removeItem('timer');
		localStorage.removeItem('move');

		const dataUser = JSON.parse(localStorage.getItem('user')) || [];
		const user = (!label) ? 'anonymous' : label;
		dataUser.push({
			'user': user.toUpperCase(),
			'moves': contextMove,
			'timer': timer,
			'win': Number(win),
			'lose': Number(!win)
		});

		localStorage.setItem('user', JSON.stringify(dataUser));
		setLabel('');

		closeMessageForm();
	};

	const onLabelChange = (e) => {
		setLabel(e.target.value);
	};

	return (
		<>
			{contextSave &&
			<div className="modal message" >
				<div className="modal-dialog" role="document" >
					<div className="modal-content  flex-column" >
						<div className="modal-header" >
							<h2 className="modal-title" >{form.user}</h2 >
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"
											onClick={closeMessageForm} >
								<span aria-hidden="true" >&times;</span >
							</button >
						</div >
						<input type="text" className="form-control" placeholder={form.nick}
									 onChange={onLabelChange} />
						<div className="modal-footer justify-content-around" >
							<button type="button" className="btn btn-primary btn-exit"
											onClick={saveGame} >
								{form.save}
							</button >
							<button type="button" className="btn btn-secondary btn-exit " data-dismiss="modal"
											onClick={closeMessageForm} >
								{form.close}
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
	sound: state.sound,
});

export default connect(mapStateToProps)(SaveForm);
