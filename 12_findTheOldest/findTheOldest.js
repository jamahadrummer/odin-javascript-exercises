const findTheOldest = function (arg) {
    const date = new Date();
    let year = date.getFullYear();
    let tempArr = arg;
    let oldestAge = 0;
    let oldestPerson = 0;
    arg.forEach(person => {
        if (typeof person.yearOfDeath != 'undefined') {
            let age = person.yearOfDeath - person.yearOfBirth
            person.age = age
        } else {
            let age = year - person.yearOfBirth
            person.age = age
        }
    })
    tempArr.forEach(person => {
        if (person.age > oldestAge) {
            oldestAge = person.age
        }
    })
    tempArr.forEach(person => {
        if (oldestAge === person.age)
            oldestPerson = person
    })
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
