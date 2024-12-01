const findTheOldest = function (people) {
	let oldestAge = 0;
	let oldestPerson = null;
	people.forEach((person) => {
		person.yearOfDeath = typeof person.yearOfDeath === 'undefined' ? new Date().getFullYear() : person.yearOfDeath;
		let personAge = person.yearOfDeath - person.yearOfBirth;

		if (personAge > oldestAge) {
			oldestAge = personAge;
			oldestPerson = person;
		}
	});

	return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
