import React, { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { reducer, initialValues } from "./reducers/reducer";
import TodoForm from "./components/TodoForm";

function App() {
  const [state, dispatch] = useReducer(reducer, initialValues);

  console.log(state);
  return (
    <div className="App">
      <TodoList state={state} dispatch={dispatch} />
      <TodoForm state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
