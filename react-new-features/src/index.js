import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      {
        title,
        body,
      },
    ]);
    setTitle("");
    setBody("");
  };

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  };

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>x</button>
        </div>
      ))}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button>add note</button>
      </form>
    </div>
  );
};

// const App = (props) => {
//   // const [count, setState] = useState(props.count);
//   // const [text, setText] = useState("");
//   const [state, setState] = useState({
//     count: props.count,
//     text: "",
//   });

//   return (
//     <div>
//       <p>
//         The current {state.text || "count"} is {state.count}
//       </p>
//       <button onClick={() => setState({ ...state, count: state.count + 1 })}>
//         +1
//       </button>
//       <button onClick={() => setState({ ...state, count: props.count })}>
//         Reset
//       </button>
//       <button onClick={() => setState({ ...state, count: state.count - 1 })}>
//         -1
//       </button>
//       <input
//         value={state.text}
//         onChange={(e) => setState({ ...state, text: e.target.value })}
//       />
//     </div>
//   );
// };

// App.defaultProps = {
//   count: 0,
// };

ReactDOM.render(<NoteApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
