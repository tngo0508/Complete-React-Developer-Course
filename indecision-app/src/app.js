console.log("App.js is running!");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"],
};

// JSX - Javascript XML
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options && app.options.length > 0
      ? "here are your options"
      : "No options"}
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: "Andrew",
  age: 17,
  location: "New York",
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var userName = "Thomas";
var userAge = 27;
var userLocation = "California";
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonamous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>

    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");
var app2 = document.getElementById("app2");

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, app2);
