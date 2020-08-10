import React from "react";

function Todo(props) {
  const { clickHandler, item } = props;
  return (
    <div
      onClick={() => clickHandler(item.id)}
      className={`task${item.completed ? " completed" : ""} `}
    >
      {item.item}
    </div>
  );
};

export default Todo
