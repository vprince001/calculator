let add = function(a,b){
  return a+b;
};

let subtract = function(a,b){
  return a-b;
};

let multiply = function(a,b){
  return a*b;
};

let divide = function(a,b){
  return a/b;
};

let mod = function(a,b){
  return a%b;
};

const chooseOperation = function(firstNumber,operator,secondNumber){
  const operations={};
  operations['+'] = lib.add(firstNumber,secondNumber);
  operations['-'] = lib.subtract(firstNumber,secondNumber);
  operations['x'] = lib.multiply(firstNumber,secondNumber);
  operations['/'] = (lib.divide(firstNumber,secondNumber)).toFixed(2);
  operations['%'] = lib.mod(firstNumber,secondNumber);
  let result = operations[operator];
  return result;
}

exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply; 
exports.divide = divide;
exports.mod = mod;
exports.chooseOperation = chooseOperation;
