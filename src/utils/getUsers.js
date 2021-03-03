const getUsers = (valueSort, direction, condition) => {
	const dataUser = JSON.parse(localStorage.getItem('user')) || [];
	dataUser.push({user: "TESTIROVICH", moves: 25, timer: 50, win: 1, lose: 0});

	let result;
	if (condition) {
		const data = dataUser.filter((el) => el[condition]);
		result = data.sort((user1, user2) => user1[valueSort] > user2[valueSort] ? 1 : -1).slice(0, 10);
	} else result = dataUser.sort((user1, user2) => user1[valueSort] > user2[valueSort] ? 1 : -1);
	return result;
}

export {getUsers};