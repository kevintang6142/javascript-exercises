const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => getAge(oldest) < getAge(currentPerson) ? currentPerson : oldest);
};

const getAge = function(person) {
    if (person.yearOfDeath === undefined) return new Date().getFullYear() - person.yearOfBirth;
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
