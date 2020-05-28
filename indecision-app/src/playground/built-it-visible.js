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
let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};
const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p>Hey. There are some details</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
