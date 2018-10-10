let lib = require('../library/lib_calc.js');

const main = function(){
  let a = +process.argv[2];
  let b = +process.argv[3];
  console.log(''+a,'+',b,'=',lib.add(a,b));
  console.log(''+a,'-',b,'=',lib.sub(a,b));
  console.log(''+a,'*',b,'=',lib.multiply(a,b));
  console.log(''+a,'/',b,'=',lib.divide(a,b));
}

main();
