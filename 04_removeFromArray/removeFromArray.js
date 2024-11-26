const removeFromArray = function (inputArray) {
	console.log(typeOf(arguments));
	let _tempArray = [];
	inputArray.forEach((element) => {
		if (!args.includes(element)) {
			_tempArray.push(element);
		}
	});

	return _tempArray;
};

// Do not edit below this line
module.exports = removeFromArray;
