import {connect} from 'react-redux';
import React, {useState} from 'react';
import {toggleSound} from "../../../redux/actions";

const SettingsSound = ({sound, toggleSound}) => {
	const [volume, setVolume] = useState(sound);

	const updateMusic = (e) => {
		setVolume(e.target.value);
		toggleSound(e);
	}

	return (
		<div className="setting-item properties" >
			<input id="volumeMusic" type='range' min='0' max='1' step='0.1' value={volume} onChange={updateMusic} />
			<output htmlFor="volumeMusic" >{volume}</output >
		</div >
	);
};

const mapStateToProps = (state) => ({
	sound: state.sound,
});

const mapDispatchToProps = {
	toggleSound,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsSound);