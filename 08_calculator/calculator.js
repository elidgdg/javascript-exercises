const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(arr) {
  return arr.reduce((total, currentValue) => total + currentValue, 0);
	
};

const multiply = function(arr) {
  return arr.reduce((total, currentValue) => total * currentValue, 1);
};

const power = function(number, exponent) {
	return number**exponent;
};

const factorial = function(x) {
	let total = x;
  if (total === 0 || total === 1) {return 1;}

  while (x > 1) {
    x-=1;
    total*=x;
  }
  return total;
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
