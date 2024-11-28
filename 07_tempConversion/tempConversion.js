const convertToCelsius = function (num) {
	let tempCelsius = (num - 32) * (5 / 9);
	if (tempCelsius.toString().includes('.')) {
		tempCelsius = Number(tempCelsius.toFixed(1));
	}
	return tempCelsius;
};

const convertToFahrenheit = function (num) {
	let tempFahrenheit = num * (9 / 5) + 32;
	if (tempFahrenheit.toString().includes('.')) {
		tempFahrenheit = Number(tempFahrenheit.toFixed(1));
	}
	return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
