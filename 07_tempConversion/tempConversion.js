const ftoc = function (fIn) {
  let cOut = (32 - fIn) * 5 / 9
  if (Number.isInteger(cOut)) {
    return cOut
  } else {
    let cRound = cOut.toFixed(1)
    return cRound
  }
};

const ctof = function (cIn) {
  let fOut = (cIn * 9 / 5 + 32)
  if (Number.isInteger(fOut)) {
    return fOut
  } else {
    let fRound = cOut.toFixed(1)
    return fRound
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
