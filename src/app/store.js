import { configureStore } from '@reduxjs/toolkit'
import todosSlice from '../features/todos/todosSlice'
import formSlice from '../features/form/formSlice'
import alertSlice from '../features/alert/alertSlice'
export const store = configureStore({
	reducer: {
		todos: todosSlice,
		form: formSlice,
		alert: alertSlice,
	},
})
