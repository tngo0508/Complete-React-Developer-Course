class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGetting() {
    return `Hi. I am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person("Thomas Ngo", 27);
console.log(me.getGetting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGetting());
console.log(other.getDescription());
