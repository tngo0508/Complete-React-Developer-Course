console.log("App.js is running!");

var app = {
  title: "Indecision App",
  subtitle: "world",
};

// JSX - Javascript XML
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
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
  location: "New York",
};
var userName = "Thomas";
var userAge = 27;
var userLocation = "California";
var templateTwo = (
  <div>
    <h1>{userName.toLocaleUpperCase()} Ngo</h1>
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>

    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById("app");
var app2 = document.getElementById("app2");

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, app2);
