import { createSlice, nanoid } from '@reduxjs/toolkit'

const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [
			{ id: 1, title: 'Eggs' },
			{ id: 2, title: 'Tomato' },
		],
		editing: false,
		editId: '',
	},
	reducers: {
		addTodo: {
			reducer(state, action) {
				state.todos.push(action.payload)
			},
			prepare(title) {
				return {
					payload: {
						id: nanoid(),
						title,
					},
				}
			},
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload)
		},
		editTodos: (state, action) => {
			const todo = state.todos.find((todo) => todo.id === state.editId)
			todo.title = action.payload
			state.editing = false
		},
		clearTodos: (state) => {
			state.todos = []
		},
		startEdit: (state, action) => {
			state.editId = action.payload
			state.editing = true
		},
	},
})

export const selectAllTodos = (state) => state.todos.todos
export const selectEditingStatus = (state) => state.todos.editing
export const { addTodo, editTodos, deleteTodo, clearTodos, startEdit } =
	todosSlice.actions
export default todosSlice.reducer
