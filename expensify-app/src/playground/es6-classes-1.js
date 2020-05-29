class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGetting() {
    return `Hi. I am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasLocation() {
    return !!this.homeLocation;
  }
  getGetting() {
    let greeting = super.getGetting();
    if (this.hasLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Student("Thomas Ngo", 27, "Computer Science");
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const person1 = new Traveler("John Smith", 28, "California");
console.log(person1.getGetting());

const person2 = new Traveler("Kevin Thomson", 40);
console.log(person2.getGetting());
