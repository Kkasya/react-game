import { connect } from 'react-redux';
import React from 'react';
import { toggleLang} from "../../../redux/actions";
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

const LANGUAGES = [
  'en',
  'ru',
];

const SettingsLanguage = ({lang, toggleLang}) => {

  const langButtons = LANGUAGES.map((lang) => (
    <ToggleButton
      value={lang}
      key={lang}
      color='primary'
    >
      {lang.toUpperCase()}
    </ToggleButton>
  ));

  return  (
    <div className="setting-item">
    <ToggleButtonGroup
      value={lang}
      exclusive
      onChange={toggleLang}
    >
      {langButtons}
    </ToggleButtonGroup>
    </div>
  );

}

const mapStateToProps = (state) => ({
  lang: state.lang,
});

const mapDispatchToProps = {
  toggleLang,
};

export default connect(mapStateToProps,mapDispatchToProps)(SettingsLanguage);
