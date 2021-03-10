import React, {useState} from 'react';
import Fullscreen from 'fullscreen-react';
import {Game} from "../game";
import {Context, Context2, Context3, Context4} from "../context";
import {Statistics, Scores} from "../statistics";
import FullscreenBtn from "./fullscreen";
import Settings from "../settings/settings";
import {connect} from 'react-redux';
import Footer from "../footer";
import {toggleLang, toggleMusic, toggleSize, toggleSound, toggleTopic} from "../../redux/actions";
import {h1Ru, h1En} from "../../utils/CONSTANT";
import './App.css';

const audio = new Audio('/sounds/background.mp3');
audio.loop = true;

function App({lang, music, sound, topic, size, toggleLang, toggleMusic, toggleSound, toggleTopic}) {
	const [{contextSettings, contextScore, contextStatistics}, setMenu] = useState(
		{contextSettings: false, contextScore: false, contextStatistics: false});
	const [isEnter, setIsEnter] = useState(false);

	const localMove = localStorage.getItem('move') || 0;
	const [contextMove, setContextMove] = useState(Number(localMove));

	const [{contextStart, contextExit, contextWin}, setStart] = useState({
		contextStart: false,
		contextExit: false,
		contextWin: false
	});

	const [contextSave, setSave] = useState(false);

	const setFull = () => {
		setIsEnter((isEnter) => !isEnter);
	};

	audio.volume = music;
	const playPromise = audio.play();

	if (playPromise !== undefined) {
		playPromise
			.then(_ => {
				audio.play();
			})
			.catch(_ => {
				audio.pause();
			});
	}

	window.addEventListener('unload', () => {
		localStorage.setItem('move', contextMove.toString());
		localStorage.setItem('setting', JSON.stringify({lang: lang, topic: topic, sound: sound, music: music, size: size}));
	});

	document.addEventListener('keydown', (e) => {
		const code = e.keyCode;
		if (code >= 113 && code <= 118) {
			e.preventDefault();
			switch (code) {
				case 113:
					const newLang = (lang === 'en') ? 'ru' : 'en';
					return toggleLang(newLang);
				case 114:
					return toggleTopic('Children`s');
				case 115:
					return toggleTopic('Game of Thrones');
				case 116:
					return toggleTopic('Figures');
				case 117:
					return toggleMusic(0);
				case 118:
					return toggleSound(0);
			}
		}
	});

	return (
		<Context3.Provider value={[{contextSettings, contextScore, contextStatistics}, setMenu]} >
			<Fullscreen isEnter={isEnter} onChange={setIsEnter} >
				<div className='full-screen' >
					<div className='app' >
						<FullscreenBtn
							setFull={setFull} />
						<header >
							<h1 className="text-danger" >{lang === 'en' ? h1En : h1Ru}</h1 >
						</header >
						<Context.Provider value={[contextMove, setContextMove]} >
							<Context2.Provider value={[{contextStart, contextExit, contextWin}, setStart]} >
								<Context4.Provider value={[contextSave, setSave]} >
									<Game />
									<Settings />
								</Context4.Provider >
							</Context2.Provider >
						</Context.Provider >
						<Statistics />
						<Scores />
						<Footer />
					</div >
				</div >
			</Fullscreen >
		</Context3.Provider >
	);
}

const mapStateToProps = (state) => ({
	lang: state.lang,
	music: state.music,
	topic: state.topic,
	sound: state.sound,
	size: state.size
});

const mapDispatchToProps = {
	toggleLang,
	toggleTopic,
	toggleMusic,
	toggleSound
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
