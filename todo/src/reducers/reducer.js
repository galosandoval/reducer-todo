export const initialValues = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log(state);
      return [
        ...state,
        {
          item: action.payload.id,
          completed: false,
          id: new Date.now(),
        },
      ];
    case "TOGGLE_ITEM":
      return state.map((task, id) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      });
    case "CLEAR_ITEM":
      return state.filter((item) => {
        // eslint-disable-next-line no-unused-expressions
        item.completed === false;
      });
    default:
      return state;
  }
};
