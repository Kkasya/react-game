import initialState from "./initial-state";

const reducer = (state = initialState, action) => {
	switch (action.type) {

		case 'TOGGLE_LANG':
			return {...state, lang: action.value}
		case 'TOGGLE_TOPIC':
			return {...state, topic: action.value}
		case 'TOGGLE_SIZE':
			return {...state, size: action.value}
		case 'TOGGLE_SOUND':
			return {...state, sound: action.value}
		case 'TOGGLE_MUSIC':
			return {...state, music: action.value}

		default:
			return state;
	}
};

export default reducer;