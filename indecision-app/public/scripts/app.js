"use strict";

// my solution

// console.log("built-it is running!");

// let isVisible = false;
// const setVisible = (e) => {
//   e.preventDefault();
//   isVisible = !isVisible;
//   render();
// };

// const appRoot = document.getElementById("app");
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={setVisible}>
//         {isVisible ? "Show details" : "Hide details"}
//       </button>
//       <p>{isVisible ? "hello world" : ""}</p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// render();

// Author's solution
var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};
var render = function render() {
  var jsx = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggleVisibility },
      visibility ? "Hide details" : "Show details"
    ),
    visibility && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Hey. There are some details"
      )
    )
  );
  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
