const fibonacci = function (n) {
	n = parseInt(n);
	if (n < 0) {
		return 'OOPS';
	} else if (n == 0) {
		return 0;
	} else {
		let first = 1;
		let second = 0;
		for (i = 1; i < n; i++) {
			let current = first + second;
			second = first;
			first = current;
		}
		return first;
	}
};

// Do not edit below this line
module.exports = fibonacci;
