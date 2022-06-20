import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
	name: 'form',
	initialState: {
		title: '',
	},
	reducers: {
		setTitle: (state, action) => {
			state.title = action.payload
		},
	},
})

export const selectTitle = (state) => state.form.title
export const { setTitle } = formSlice.actions
export default formSlice.reducer
