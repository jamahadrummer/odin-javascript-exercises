const removeFromArray = function () {
    let arr = arguments[0]
    if (arguments[2] === undefined) {
        let arr = arguments[0];
        if (arr.indexOf(arguments[1]) != '-1');
        let arg1 = arr.indexOf(arguments[1]);
        arr.splice(arg1, 1);
        return arr;
    } else if (arr.indexOf(arguments[2]) != '-1') {
        for (let i = 1; i < arguments.length; i++)
            if (arr.indexOf(arguments[i] != '-1')) {
                let arg = arr.indexOf(arguments[i]);
                if (arg != '-1') {
                    arr.splice(arg, 1);
                }
            } else {
                return arr;
            } return arr;
    } else {
        return arr;
    };
};

// Do not edit below this line
module.exports = removeFromArray;
