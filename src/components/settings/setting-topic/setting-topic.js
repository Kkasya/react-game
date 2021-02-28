import { connect } from 'react-redux';
import React from 'react';
import { toggleTopic} from "../../../redux/actions";
import {Toggle} from "../components";

const TOPIC = [
  'Children`s',
  'Game of Thrones',
  'Figures',
];

const SettingsTopic = ({topic, toggleTopic}) => {

  return  (
    <Toggle
      data={TOPIC}
      itemSetting={topic}
      toggle={toggleTopic}/>
  );
};

const mapStateToProps = (state) => ({
  topic: state.topic,
});

const mapDispatchToProps = {
  toggleTopic,
};

export default connect(mapStateToProps,mapDispatchToProps)(SettingsTopic);
