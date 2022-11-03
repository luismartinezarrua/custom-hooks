import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

//const initialState = [];

const inicio = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, ejecutaTodos] = useReducer(todoReducer, [], inicio);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const nuevoTodo = (todoItem) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todoItem,
    };
    ejecutaTodos(action);
  };

  const borraTodo = (elId) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: elId,
    };
    ejecutaTodos(action);
  };
  const updateTodo = (elId) => {
    const action = {
      type: "[TODO] Updatea",
      payload: elId,
    };
    ejecutaTodos(action);
  };

  const todosCount = todos.length;
  const todosCountOK = todos.filter((hecho) => hecho.done === true).length;
  return {
    nuevoTodo,
    borraTodo,
    updateTodo,
    todos,
    todosCount,
    todosCountOK,
  };
};
