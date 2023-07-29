import uuid from "react-uuid";

interface Todo {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

const SET_TODO = "SET_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_TODO = "CHANGE_TODO";

export const setTodo = (payload: Todo) => {
  return {
    type: SET_TODO,
    payload,
  };
};

export const deleteTodo = (payload: Todo["id"]) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};

export const changeTodo = (payload: Todo["id"]) => {
  return {
    type: CHANGE_TODO,
    payload: payload,
  };
};

interface InitialState {
  todos: Todo[];
}

const initialState: InitialState = {
  todos: [
    {
      id: uuid(),
      title: "1",
      contents: "11",
      isDone: false,
    },

    {
      id: uuid(),
      title: "2",
      contents: "22",
      isDone: true,
    },
  ],
};

interface Action {
  type: "SET_TODO" | "DELETE_TODO" | "CHANGE_TODO";
  payload: Todo | string;
}

const todos = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_TODO: {
      return {
        todos: [...state.todos, action.payload],
      };
    }

    case DELETE_TODO: {
      const newTodo = state.todos.filter((filteredItem) => {
        return filteredItem.id !== action.payload;
      });
      return {
        todos: newTodo,
      };
    }

    case CHANGE_TODO: {
      const newTodo = state.todos.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
      return {
        todos: newTodo,
      };
    }

    default:
      return state;
  }
};

export default todos;
