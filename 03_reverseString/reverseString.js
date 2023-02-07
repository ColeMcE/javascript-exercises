const reverseString = function(string) {
    reverseArray = string.split('');
    reverseArray.reverse();
    reversedString = reverseArray.join('');
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
