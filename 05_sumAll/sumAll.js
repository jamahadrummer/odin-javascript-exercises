const sumAll = function () {
    let arr = []
    if (arguments[0] < arguments[1]) {
        for (let i = arguments[0]; i <= arguments[1]; i++) {
            arr.push(i)
        }
    } else if (arguments[0] > arguments[1]) {
        for (let i = arguments[0]; i >= arguments[1]; i--) {
            arr.push(i)
        }
    } else if (arguments[0] < 0 || argument[1] < 0) {
        console.log('ERROR')
    }
    console.log(arr)
    let finalSum = arr.reduce((a, b) => a + b, 0)
    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
