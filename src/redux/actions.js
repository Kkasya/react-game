const toggleLang = (lang) => {
  return {
    type: 'TOGGLE_LANG',
    value: lang.target.value || lang.target.parentNode.value,
    payload: lang,
  };
}

export {toggleLang};