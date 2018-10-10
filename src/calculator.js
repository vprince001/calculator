let lib = require('../library/lib_calc.js');

const chooseOperation = function(operation,firstNumber,secondNumber){
  let operations=[];
  operations['add']=lib.add(firstNumber,secondNumber);
  operations['sub']=lib.sub(firstNumber,secondNumber);
  operations['multiply']=lib.multiply(firstNumber,secondNumber);
  operations['divide']=(lib.divide(firstNumber,secondNumber)).toFixed(2);
  let result = operations[operation];
  return result;
}

const main = function(){
  let operation = process.argv[2];
  let firstNumber = +process.argv[3];
  let secondNumber = +process.argv[4];
  console.log(chooseOperation(operation,firstNumber,secondNumber));
}

main();
