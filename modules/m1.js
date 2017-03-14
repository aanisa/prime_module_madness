var http = require('http');
var usdConvert = require('./m2.js');
var m3func = require('./m3.js');

function randomNumber(min, max){
    var aNumber = Math.floor(Math.random() * (1 + max - min) + min);
    aNum = usdConvert(aNumber);
    results = m3func.returnNum(aNum);
    return m3func.accountBal(results);
}

module.exports = randomNumber;
