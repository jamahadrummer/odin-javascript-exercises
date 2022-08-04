const removeFromArray = function () {
    if (arguments[2] === undefined) {
        let arr = arguments[0];
        if (arr.indexOf(arguments[1]) != '-1');
        let arg1 = arr.indexOf(arguments[1]);
        arr.splice(arg1, 1);
        return arr;
    } else {
        let arr = arguments[0];
        if (arr.indexOf(arguments[1]) != '-1'
            && arguments[2] != '-1') {
            let arg1 = arr.indexOf(arguments[1]);
            let arg2 = arr.indexOf(arguments[2]);
            arr.splice(arg1, 1);
            arr.splice(arg2, 1);
            return arr;
        };
    };
};

// Do not edit below this line
module.exports = removeFromArray;
