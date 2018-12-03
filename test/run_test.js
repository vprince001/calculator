const { equal } = require("assert");
const { add, multiply, divide, subtract, mod } = require("../src/calc_lib");

describe("add", function() {

  it("should return sum of two integer inputs", function() {
    equal(add(1,2), 3);
  });
});

describe("subtract", function() {

  it("should return difference of two integer inputs", function() {
    equal(subtract(8,5),3);
  });

  it("should return negative integer for first integer lower than second", function() {
    equal(subtract(4,8),-4);
  });

});

describe("multiply", function() {

  it("should return 0 for any input as 0", function() {
    equal(multiply(0,1), 0);
  });

  it("should return product of two integer inputs", function() {
    equal(multiply(9,20),180);
  });

});

describe("divide", function() {

  it("should return quotient of division of two integer inputs", function() {
    equal(divide(10,5),2);
  });

  it("should return Infinity for divisor as 0", function() {
    equal(divide(12,0),"Infinity");
  });

});

describe("mod", function() {

  it("should return remainder of division of two integer inputs", function() {
    equal(mod(5,3),2);
    equal(mod(10,3),1);
  });

});
