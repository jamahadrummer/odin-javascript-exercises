const sumAll = function () {
    let arr = []
    if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
        if (arguments[0] < 0 || arguments[1] < 0) {
            return 'ERROR'
        } else if (arguments[0] > arguments[1]) {
            for (let i = arguments[0]; i >= arguments[1]; i--) {
                arr.push(i)
            }
        } else if (arguments[0] < arguments[1]) {
            for (let i = arguments[0]; i <= arguments[1]; i++) {
                arr.push(i)
            }
        }
        console.log(arr)
        let finalSum = arr.reduce((a, b) => a + b, 0)
        return finalSum
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
