const assert = require("assert");
const calc_lib = require("../src/calc_lib");

assert.equal(calc_lib.add(1,2),3);
assert.equal(calc_lib.multiply(0,1),0);
assert.equal(calc_lib.divide(10,5),2);
assert.equal(calc_lib.subtract(4,8),-4);
assert.equal(calc_lib.divide(12,0),"Infinity");
assert.equal(calc_lib.multiply(9,20),180);
assert.equal(calc_lib.subtract(5,8),-3);
assert.equal(calc_lib.subtract(8,5),3);
assert.equal(calc_lib.mod(5,3),2);
assert.equal(calc_lib.mod(10,3),1);
