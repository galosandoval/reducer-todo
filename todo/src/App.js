import React, { useReducer, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { reducer, initialValues } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialValues);
  const [task, setTask] = useState();

  console.log(state)
  return (
    <div className="App">
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
