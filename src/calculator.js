let lib = require('../library/lib_calc.js');

const chooseOperation = function(operation,firstNumber,secondNumber){
  let message = "";
  if(operation == "add"){
    message = lib.add(firstNumber,secondNumber);
    message = firstNumber+"+"+secondNumber+" = "+message;
    return message;

  }
  if(operation == "sub"){
    message = lib.sub(firstNumber,secondNumber);
    message = firstNumber+"-"+secondNumber+" = "+message;
    return message;
  }
  if(operation == "multiply"){
    message = lib.multiply(firstNumber,secondNumber);
    message = firstNumber+"X"+secondNumber+" = "+message;
    return message;
  }
  if(operation == "divide"){
    let result = lib.divide(firstNumber,secondNumber);
    message = result.toFixed(2); 
    message = firstNumber+"/"+secondNumber+" = "+message;
    return message;
  }
  message = "Operation not found";
  return message;
}

const main = function(){
  let operation = process.argv[2];
  let firstNumber = +process.argv[3];
  let secondNumber = +process.argv[4];
  console.log(chooseOperation(operation,firstNumber,secondNumber));
}

main();
