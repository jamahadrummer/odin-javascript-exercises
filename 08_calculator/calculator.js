const add = function (arg1, arg2) {
  let sol = (arg1 + arg2)
  return sol
};

const subtract = function (arg1, arg2) {
  let sol = (arg1 - arg2)
  return sol
};

const sum = function (arg) {
  let arr = arg
  for (let i = 0; i <= arr.length; i++) {
    let finalSum = arr.reduce((a, b) => a + b, 0)
    return finalSum
  }
};

const multiply = function (arg1, arg2) {
  let sol = (arg1 * arg2)
  return sol
};

const power = function () {

};

const factorial = function () {

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
