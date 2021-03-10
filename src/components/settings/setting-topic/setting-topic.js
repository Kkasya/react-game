import {connect} from 'react-redux';
import React from 'react';
import {toggleTopic} from "../../../redux/actions";
import {Toggle} from "../components";
import {TOPICRU, TOPICEN} from "../../../utils/CONSTANT";

const SettingsTopic = ({topic, toggleTopic, lang}) => {
	const TOPIC = (lang === 'en') ? TOPICEN : TOPICRU;
	return (
		<Toggle
			data={TOPIC}
			itemSetting={topic}
			toggle={toggleTopic} />
	);
};

const mapStateToProps = (state) => ({
	topic: state.topic,
	lang: state.lang,
});

const mapDispatchToProps = {
	toggleTopic,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsTopic);
