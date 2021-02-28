const toggleLang = (lang) => {
  return {
    type: 'TOGGLE_LANG',
    value: lang.target.value || lang.target.parentNode.value,
    payload: lang,
  };
};

const toggleTopic = (topic) => {
  return {
    type: 'TOGGLE_TOPIC',
    value: topic.target.value || topic.target.parentNode.value,
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
  return {
    type: 'TOGGLE_SOUND',
    value: sound.target.value || sound.target.parentNode.value,
    payload: sound,
  };
};

const toggleMusic = (music) => {
  return {
    type: 'TOGGLE_MUSIC',
    value: music.target.value || music.target.parentNode.value,
    payload: music,
  };
};

export {toggleLang, toggleTopic, toggleSize, toggleMusic, toggleSound};