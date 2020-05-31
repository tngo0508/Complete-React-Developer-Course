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

const address = ["123 main street", "westminster", "california", "90876"];

const [street, city_, state, zip] = address;

console.log(`You are in ${street} ${city_} ${state} ${zip}`);

const [, , , zip_] = address;
console.log(`${zip_}`);
