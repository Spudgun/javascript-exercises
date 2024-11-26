const sumAll = function (num1, num2) {
	if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
		return 'ERROR';
	}

	let min = num1 < num2 ? num1 : num2;
	let max = num1 > num2 ? num1 : num2;

	let sum = min;
	for (i = min; i < max; i++) {
		sum += i + 1;
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
