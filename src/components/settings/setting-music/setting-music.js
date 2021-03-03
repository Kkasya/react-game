import {connect} from 'react-redux';
import React, {useState} from 'react';
import {toggleMusic} from "../../../redux/actions";

const SettingsMusic = ({music, toggleMusic}) => {
	const [volume, setVolume] = useState(music);

	const updateMusic = (e) => {
		setVolume(e.target.value);
		toggleMusic(e);
	}

	return (
		<div className="setting-item properties" >
			<input id="volumeMusic" type='range' min='0' max='1' step='0.1' value={volume} onChange={updateMusic} />
			<output htmlFor="volumeMusic" >{volume}</output >
		</div >
	);
};

const mapStateToProps = (state) => ({
	music: state.music,
});

const mapDispatchToProps = {
	toggleMusic,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsMusic);

