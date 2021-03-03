const SIZE = {
	'2*4': 8,
	'3*4': 12,
	'3*6': 18,
};

const generateCards = (len) => {
	const arr = (new Array(len / 2).fill(0)).map((el, id) => el + id);
	return [...arr, ...arr].sort(() => Math.random() - 0.5);
};

const getCards = (countCards) => {
	return generateCards(countCards).map((el, id) => {
		return {id: id, el: el, isClosed: true, isGuessed: false};
	});
};

export default getCards;