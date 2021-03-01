import { connect } from 'react-redux';
import React from 'react';
import { toggleSize} from "../../../redux/actions";
import {Toggle} from "../components";

const SIZE = [
  '2*4',
  '3*4',
  '3*6',
];

const SettingsSize = ({size, toggleSize}) => {

  return  (
    <Toggle
      data={SIZE}
      itemSetting={size}
      toggle={toggleSize}/>
  );
};

const mapStateToProps = (state) => ({
  size: state.size,
});

const mapDispatchToProps = {
  toggleSize,
};

export default connect(mapStateToProps,mapDispatchToProps)(SettingsSize);
