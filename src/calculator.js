let lib = require('../library/lib_calc.js');

const chooseOperation = function(firstNumber,operator,secondNumber){
  const operations={};
  operations['+'] = lib.add(firstNumber,secondNumber);
  operations['-'] = lib.sub(firstNumber,secondNumber);
  operations['x'] = lib.multiply(firstNumber,secondNumber);
  operations['/'] = (lib.divide(firstNumber,secondNumber)).toFixed(2);
  operations['%'] = lib.mod(firstNumber,secondNumber);
  let result = operations[operator];
  return result;
}

const main = function(){
  let firstNumber = +process.argv[2];
  let operator = process.argv[3];
  let secondNumber = +process.argv[4];
  console.log(chooseOperation(firstNumber,operator,secondNumber));
}

main();
