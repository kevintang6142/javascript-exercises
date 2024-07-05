const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, num) => sum + num, 0);
};

const multiply = function(array) {
  return array.reduce((product, num) => product * num);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	return a > 1 ? a * factorial(a-1) : 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
