import React from "react";
import Todo from "./todo";

function TodoList(props) {
  const { state, dispatch } = props;

  const clickHandler = (id) => {
    dispatch({ type: "TOGGLE_ITEM", payload: id });
  };

  const clearItems = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_ITEM" });
  };

  console.log(state);
  return (
    <div>
      {/* {state.map((item) => {
        <Todo key={item.id} clickHandler={clickHandler} item={item} />;
      })} */}
      <Todo />
      <button onClick={clearItems}></button>
    </div>
  );
}

export default TodoList;
