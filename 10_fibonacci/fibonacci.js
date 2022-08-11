const fibonacci = function (arg) {
    if (arg < 0) {
        return 'OOPS'
    } else {
        let fibArr = []
        fibArr[0] = 0;
        fibArr[1] = 1
        for (let i = 2; i <= arg; i++) {
            fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
        }
        return fibArr[arg]
    };
}

// Do not edit below this line
module.exports = fibonacci;
