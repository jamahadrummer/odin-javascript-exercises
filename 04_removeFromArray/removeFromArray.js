const removeFromArray = function () {
    let arr = arguments[0];
    let arg1 = arr.indexOf(arguments[1])
    let arg2 = arr.indexOf(arguments[2])
    arr.splice(arg1, 1)
    arr.splice(arg2, 1)
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
