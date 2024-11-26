const repeatString = function (text, num) {
	if (num < 0) {
		return 'ERROR';
	}
	let newString = '';
	for (i = 0; i < num; i++) {
		newString = newString + text;
	}
	return newString;
};

// Do not edit below this line
module.exports = repeatString;
