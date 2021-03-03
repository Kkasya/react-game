import {connect} from 'react-redux';
import React from 'react';
import {toggleLang} from "../../../redux/actions";
import {Toggle} from "../components";

const LANGUAGES = [
	'en',
	'ru',
];

const SettingsLanguage = ({lang, toggleLang}) => {

	return (
		<Toggle
			data={LANGUAGES}
			itemSetting={lang}
			toggle={toggleLang} />
	);
}

const mapStateToProps = (state) => ({
	lang: state.lang,
});

const mapDispatchToProps = {
	toggleLang,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsLanguage);
