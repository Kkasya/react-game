import initialState from "./initial-state";

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'TOGGLE_LANG':
      return { ...state, lang: action.value }

    default: return state;
  }
};

export default reducer;