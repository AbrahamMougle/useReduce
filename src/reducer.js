//unité centrale de gestion de l'état
export default function (state, action) {
  switch (action.type) {
    case "add": {
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          done: false,
        },
      ];
    }

    case "delete": {
      return state.filter((task) => task.id != action.id);
    }
    case "change": {
      const newTable = state.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
      return newTable;
    }

    default: {
      throw Error("Action inconnue : " + action.type);
    }
  }
}
