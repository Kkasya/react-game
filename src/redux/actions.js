const toggleLang = (lang) => {
  const newLang = (!lang.target) ? lang : (lang.target.value || lang.target.parentNode.value);
  return {
    type: 'TOGGLE_LANG',
    value: newLang,
    payload: lang,
  };
};

const toggleTopic = (topic) => {
  const newTopic = (!topic.target) ? topic : (topic.target.value || topic.target.parentNode.value);
  return {
    type: 'TOGGLE_TOPIC',
    value: newTopic,
    payload: topic,
  };
};

const toggleSize = (size) => {
  return {
    type: 'TOGGLE_SIZE',
    value: size.target.value || size.target.parentNode.value,
    payload: size,
  };
};

const toggleSound = (sound) => {
  const newSound = (!sound.target) ? sound : (sound.target.value || sound.target.parentNode.value);
  return {
    type: 'TOGGLE_SOUND',
    value: newSound,
    payload: sound,
  };
};

const toggleMusic = (music) => {
  const newMusic = (!music.target) ? music : (music.target.value || music.target.parentNode.value);
  return {
    type: 'TOGGLE_MUSIC',
    value: newMusic,
    payload: music,
  };
};

export {toggleLang, toggleTopic, toggleSize, toggleMusic, toggleSound};