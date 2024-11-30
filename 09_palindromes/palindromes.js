const palindromes = function (str) {
	str = filterString(str).toLowerCase();
	let reversestr = str.split('').reverse().join('');
	return reversestr == str;
};

function filterString(str) {
	return str.replace(/[^a-zA-Z0-9]/g, '');
}

// Do not edit below this line
module.exports = palindromes;
