import React from "react";

const TodoList = ({ state, dispatch }) => {
  // const TodoList = ({ state, dispatch}) => { <<< this also works to pass in props
  // const {state, dispatch} = props
  console.log(state);

  // const clickHandler = (id) => {
  //   dispatch({ type: "TOGGLE_ITEM", payload: id });
  // };

  // const clearItems = (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "CLEAR_ITEM" });
  // };

  return (
    <div>
      {state.todos.map((task) => (
        <div
          key={task.id}
          className={`task${task.completed ? " completed" : ""} `}
          onClick={() => dispatch({ type: "TOGGLE_ITEM", payload: task.id })}
        >
          <p>{task.item}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
