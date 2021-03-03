import {connect} from 'react-redux';
import React, {useState} from 'react';
import {toggleSize} from "../../../redux/actions";
import {Toggle} from "../components";
import {Context2} from "../../context";

const SIZE = [
	'2*4',
	'3*4',
	'3*6',
];

const SettingsSize = ({size, toggleSize}) => {
	const [{contextStart, contextExit, contextWin}, setStart] = useState(Context2);
	const changeSize = (e) => {
		setStart({
			contextStart: false,
			contextExit: contextExit,
			contextWin: contextWin
		});
		toggleSize(e);
	}
	localStorage.removeItem('move');
	localStorage.removeItem('timer');
	localStorage.removeItem('game');
	return (
		<Toggle
			data={SIZE}
			itemSetting={size}
			toggle={changeSize} />
	);
};

const mapStateToProps = (state) => ({
	size: state.size,
});

const mapDispatchToProps = {
	toggleSize,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsSize);
