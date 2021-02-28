import React from 'react';
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";

const Toggle = ({data, itemSetting, toggle}) => {

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
      >
        {buttons}
      </ToggleButtonGroup>
    </div>
  )
};

export default Toggle;