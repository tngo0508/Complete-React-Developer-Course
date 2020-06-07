import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const App = (props) => {
  // const [count, setState] = useState(props.count);
  // const [text, setText] = useState("");
  const [state, setState] = useState({
    count: props.count,
    text: "",
  });

  return (
    <div>
      <p>
        The current {state.text || "count"} is {state.count}
      </p>
      <button onClick={() => setState({ ...state, count: state.count + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, count: props.count })}>
        Reset
      </button>
      <button onClick={() => setState({ ...state, count: state.count - 1 })}>
        -1
      </button>
      <input
        value={state.text}
        onChange={(e) => setState({ ...state, text: e.target.value })}
      />
    </div>
  );
};

App.defaultProps = {
  count: 0,
};

ReactDOM.render(<App count={2} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
