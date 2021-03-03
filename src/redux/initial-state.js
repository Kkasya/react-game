const settingState = {
	music: '0.1',
	sound: '0.5',
	topic: 'Children`s' || 'Детская',
	size: '3*4',
	lang: 'en',
};

const initialState = JSON.parse(localStorage.getItem('setting')) || settingState;

export default initialState;