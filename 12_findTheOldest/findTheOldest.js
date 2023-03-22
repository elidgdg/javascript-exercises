const findTheOldest = function(people) {
    const oldestPerson = people.reduce((oldest, current) => {
        if (oldest.hasOwnProperty('yearOfDeath')) {
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        } else {
            oldestAge = new Date().getFullYear() - oldest.yearOfBirth;
        }

        if (current.hasOwnProperty('yearOfDeath')) {
            currentAge = current.yearOfDeath - current.yearOfBirth;
        } else {
            currentAge = new Date().getFullYear() - current.yearOfBirth;
        }

        if (currentAge > oldestAge) {return current;}
        return oldest;
    })
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;

