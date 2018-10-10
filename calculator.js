let lib = require('./calc_lib.js');

const main = function(){
  let a = +process.argv[2];
  let b = +process.argv[3];
  console.log(''+a,'+',b,'=',lib.add(a,b));
  console.log(''+a,'*',b,'=',lib.mul(a,b));
}

main();
