import React, { useState } from "react";

const TodoForm = ({ state, dispatch }) => {
  const [task, setTask] = useState("");

  const handleChanges = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const submitTask = (e) => {
    dispatch({ type: "ADD_ITEM", payload: task });
  };

  const clearTask = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_ITEM", payload: state.todos.completed });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="new-task"
        type="text"
        value={setTask}
        onChange={handleChanges}
      />
      <button type='submit' onClick={submitTask}>Add Task</button>
      <button onClick={clearTask}>Complete</button>
    </form>
  );
};

export default TodoForm;
