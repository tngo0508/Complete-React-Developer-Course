const square = function (x) {
  return x * x;
};

console.log(square(8));

// const squareArrow = (x) => {
//   return x * x;
// }

const squareArrow = (x) => x * x;
console.log(squareArrow(4));

const getFirstName = (name) => console.log(name.split(" ")[0]);
