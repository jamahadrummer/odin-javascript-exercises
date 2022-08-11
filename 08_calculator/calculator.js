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

const multiply = function (arr) {
  let sol = arr.reduce((a, b) => a * b)
  return sol
};

const power = function (arg1, arg2) {
  let sol = Math.pow(arg1, arg2)
  return sol
};

const factorial = function (num) {
  let factorial = 1;
  if (num < 0) {
    return factorial = "Invalid Number !"
  }
  else if (num == 0 || num == 1) {
    return factorial;
  }
  else {
    for (let i = num; i >= 1; i--) {
      factorial = factorial * i;
    }
    return factorial;
  }
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
