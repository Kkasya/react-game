import {connect} from 'react-redux';
import React, {useState} from 'react';
import {toggleSize} from "../../../redux/actions";
import {Toggle} from "../components";
import {SIZEARR} from "../../../utils/CONSTANT";
import {Context2} from "../../context";

const SettingsSize = ({size, toggleSize}) => {
	const [{contextStart, contextExit, contextWin}, setStart] = useState(Context2);
	const changeSize = (e) => {
		setStart({
			contextStart: false,
			contextExit,
			contextWin
		});
		toggleSize(e);
	}
	localStorage.removeItem('move');
	localStorage.removeItem('timer');
	localStorage.removeItem('game');
	return (
		<Toggle
			data={SIZEARR}
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
