const getTheTitles = function (arg) {
    let arr = []
    arg.forEach(object => {
        arr.push(object.title)
    })
    return arr
}

// Do not edit below this line
module.exports = getTheTitles;
