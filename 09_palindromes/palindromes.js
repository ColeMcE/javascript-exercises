const palindromes = function (input) {
    let lowerCase = input.toLowerCase();
    let punctuationLess = lowerCase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let finalString = punctuationLess.replace(/\s/g,"");
    function reverseString (finalString) {
        return finalString.split("").reverse().join("");
    }
    let checkString = reverseString(finalString);
    if (finalString == checkString) {
        return true;
    }
    else {
        return false;
    }



};

// Do not edit below this line
module.exports = palindromes;
