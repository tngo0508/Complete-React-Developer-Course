"use strict";

console.log("App.js is running!");

// JSX - Javascript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

// Create a templateTwo var JSX expression
// div
//   h1 -> Thomas Ngo
//   p  -> Age: 27
//   p  -> Location: Philadelphia
// Render templateTwo instead of template

var user = {
  name: "Andrew",
  age: 26,
  location: "New York"
};
var userName = "Thomas";
var userAge = 27;
var userLocation = "California";
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    userName.toLocaleUpperCase(),
    " Ngo"
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    userAge
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    userLocation
  ),
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appRoot = document.getElementById("app");
var app2 = document.getElementById("app2");

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, app2);
