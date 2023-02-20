const findTheOldest = function(people) {
    const year = new Date().getFullYear();
    const oldestPerson = people.reduce((accumulator, currentValue) => {
        if (((currentValue.yearOfDeath || year) - currentValue.yearOfBirth) > ((accumulator.yearOfDeath || year) - accumulator.yearOfBirth)) {
          return currentValue;
        }
        else if (((currentValue.yearOfDeath || year) - currentValue.yearOfBirth) <= ((accumulator.yearOfDeath || year) - accumulator.yearOfBirth)) {
          return accumulator;
        }
        
        });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
