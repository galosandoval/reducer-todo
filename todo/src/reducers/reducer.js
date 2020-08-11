export const initialValues = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newTask = {
        item: action.payload.id,
        completed: false,
        id: new Date.now(),
      };
      return {
        ...state,
        todos: [...state.todos, newTask],
      };
    case "TOGGLE_ITEM":
      return {
        ...state,
        todos: state.map((task, id) => {
          if (task.id === action.payload) {
            return {
              ...task,
              completed: !task.completed,
            };
          } else {
            return task;
          }
        }),
      };
    case "CLEAR_ITEM":
      return {
        ...state,
        todos: state.filter((item) => !item.completed),
      };
    default:
      return state;
  }
};
