console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

// Create "Remove All" button above list
// on click -> wipe the array -> rerender
const onRemoveAll = () => {
  app.options = [];
  render();
};

const appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options && app.options.length > 0
          ? "here are your options"
          : "No options"}
      </p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      {/* {[99, 98, 97, "Jordan", null, undefined, true]}
      {[<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]} */}

      {numbers.map((number) => {
        return <p key={number}>Number: {number * 2}</p>;
      })}
      <ol>
        {app.options.map((opt) => (
          <li key={opt}>{opt}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();

// Create render function that renders the new jsx
// Call it right away
// Call it after options array added to
