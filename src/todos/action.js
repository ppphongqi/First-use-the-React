import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "./actionsTypes";

let nextTodoId = 0 ;


export const addTodo = (text) =>({
    type:ADD_TODO,
    completed :false,
    id: nextTodoId ++,
    text:text
});

export const toggleToDO = (id) =>({
   type:TOGGLE_TODO,
   id:id
});

export const removeTodo = (id) =>({
   type: REMOVE_TODO,
   id:id
});