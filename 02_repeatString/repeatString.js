
const repeatString = function (s, num) {
    let string = ''
    if (num >= 0) {
        for (let i = 1; i <= num; i++) {
            string = string += s;
        }
        return string
    } else {
        return 'ERROR'
    }
}

// Do not edit below this line
module.exports = repeatString;
