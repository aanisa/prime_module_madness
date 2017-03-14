

function usdConvert(aNumber) {
  aNumber = aNumber.toLocaleString();
  return ("$" + aNumber);
}

module.exports = usdConvert;
