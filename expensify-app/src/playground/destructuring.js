console.log("destructuring");

const person = {
  // name: "Thomas",
  age: 27,
  location: {
    city: "Stanton",
    temp: 86,
  },
};

const {
  name = "anonymous",
  age,
  location: { city, temp },
} = person;

console.log(`${name} is ${age}.`);

console.log(`It's ${temp} in ${city}`);
