"use strict";

var square = function square(x) {
  return x * x;
};

console.log(square(8));

// const squareArrow = (x) => {
//   return x * x;
// }

var squareArrow = function squareArrow(x) {
  return x * x;
};
console.log(squareArrow(4));

var getFirstName = function getFirstName(name) {
  return console.log(name.split(" ")[0]);
};
