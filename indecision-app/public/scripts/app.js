"use strict";

var add = function add(a, b) {
  return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound
var user = {
  name: "thomas",
  cities: ["westminter", "stanton", "fullerton"],
  printPlacesLive: function printPlacesLive() {
    var _this = this;

    // console.log(this.name);
    // console.log(this.cities);
    // const that = this;

    // this.cities.forEach((city) => {
    //   console.log(this.name + " has lived in " + city);
    // });
    // const cityMessages = this.cities.map((city) => {
    //   // return city + "!";
    //   return this.name + " has lived in " + city;
    // });

    // return cityMessages;

    return this.cities.map(function (city) {
      return _this.name + " has lived in " + city;
    });
  }
};

// user.printPlacesLive();
console.log(user.printPlacesLive());

// Challenge areas

// numbers - array of numbers
// multiplyBy - single number
// multiply - return a new array where the number have been multiplied

// const multiplier = {
//   multiply(arr, x) {
//     return arr.map((item) => item * x);
//   },
// };

var multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply([1, 2, 3], 2));
