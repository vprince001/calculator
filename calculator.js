let lib = require('./src/calc_lib.js');

const main = function(){
  let firstNumber = +process.argv[2];
  let operator = process.argv[3];
  let secondNumber = +process.argv[4];
  console.log(chooseOperation(firstNumber,operator,secondNumber));
}

main();
