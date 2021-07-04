import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./types.jsx";

// add new ToDo
export const add = (data) => {
	return {
		type: ADD_TODO,
		payload: data,
	};
};

// delete ToDo
export const deleteTodo = (id) => {
	return {
		type: DELETE_TODO,
		payload: id,
	};
};

// update ToDo
export const updateTodo = (id) => {
	return {
		type: UPDATE_TODO,
		payload: id,
	};
};
