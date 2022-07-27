const reverseString = function(string) {
    let array = string.split('')
    let reverseArray = array.reverse();
    let joinArray = reverseArray.join('')
    return joinArray
};

// Do not edit below this line
module.exports = reverseString;
