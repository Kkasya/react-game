import React from 'react';
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";
import {connect} from "react-redux";

const audio = new Audio('/sounds/btn.mp3');

const Toggle = ({data, itemSetting, toggle, sound}) => {
  const play = () => {
    audio.volume = sound;
    audio.play();
  };

  const buttons = data.map((itemSetting) => (
    <ToggleButton
      value={itemSetting}
      key={itemSetting}
      color='primary'
    >
      {itemSetting}
    </ToggleButton>
  ));

  return (
    <div className="setting-item">
      <ToggleButtonGroup
        value={itemSetting}
        exclusive
        onChange={toggle}
        onClick={play}
      >
        {buttons}
      </ToggleButtonGroup>
    </div>
  )
};

const mapStateToProps = (state) => ({
  sound: state.sound,
});

export default connect(mapStateToProps)(Toggle);