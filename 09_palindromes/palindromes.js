const palindromes = function (string) {
    let stringLower = string.toLowerCase()
    let stringBasic = stringLower.replace(/[^a-z]/g, '')
    let revString = function () {
        let stringArr = []
        for (let i = stringBasic.length - 1; i >= 0; i--) {
            stringArr.push(stringBasic[i]);
        }
        return stringArr.join('')
    }
    if (revString(stringBasic) === stringBasic) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
