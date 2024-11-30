const add = function (first, second) {
	return first + second;
};

const subtract = function (first, second) {
	return first - second;
};

const sum = function (array) {
	if (array.length === 0) {
		return 0;
	}
	return array.reduce((total, item) => {
		return total + item;
	});
};

const multiply = function (array) {
	if (array.length === 0) {
		return 0;
	}
	return array.reduce((total, item) => {
		return total * item;
	});
};

const power = function (first, second) {};

const factorial = function (first, second) {};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
