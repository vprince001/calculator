let lib = require('../library/lib_calc.js');

const chooseOperation = function(operation,firstNumber,secondNumber){
  const operations={};
  operations['addition']=lib.add(firstNumber,secondNumber);
  operations['substraction']=lib.sub(firstNumber,secondNumber);
  operations['multiplication']=lib.multiply(firstNumber,secondNumber);
  operations['division']=(lib.divide(firstNumber,secondNumber)).toFixed(2);
  let result = operations[operation];
  return operations;
}

const main = function(){
  let operation = process.argv[2];
  let firstNumber = +process.argv[3];
  let secondNumber = +process.argv[4];
  console.log(chooseOperation(operation,firstNumber,secondNumber));
}

main();
