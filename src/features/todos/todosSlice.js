import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [
			{ id: 1, title: 'Eggs' },
			{ id: 2, title: 'Tomato' },
		],
		editing: false,
		todoId: '',
	},
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload)
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload)
		},
		editTodos: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload.id ? action.payload : todo
			)
			state.editing = false
		},
		clearTodos: (state) => {
			state.todos = []
		},
		startEdit: (state, action) => {
			state.todoId = action.payload
			state.editing = true
		},
	},
})

export const selectAllTodos = (state) => state.todos.todos
export const selectEditingStatus = (state) => state.todos.editing
export const selectTodoId = (state) => state.todos.todoId
export const { addTodo, editTodos, deleteTodo, clearTodos, startEdit } =
	todosSlice.actions
export default todosSlice.reducer
