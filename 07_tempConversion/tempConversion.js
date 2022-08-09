const ftoc = function (fIn) {
  let cOut = (fIn - 32) * 5 / 9
  if (Number.isInteger(cOut)) {
    return cOut
  } else {
    let cRound = Math.round(cOut * 10) / 10
    return cRound
  }
};

const ctof = function (cIn) {
  let fOut = (cIn * 9 / 5 + 32)
  if (Number.isInteger(fOut)) {
    return fOut
  } else {
    let fRound = Math.round(fOut * 10) / 10
    return fRound
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
