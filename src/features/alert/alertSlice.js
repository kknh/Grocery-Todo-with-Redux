import { createSlice } from '@reduxjs/toolkit'

const alertSlice = createSlice({
	name: 'alert',
	initialState: {
		type: '',
		message: '',
	},
	reducers: {
		cleared: (state) => {
			state.type = 'danger'
			state.message = 'items cleared'
		},
		removed: (state) => {
			state.type = 'danger'
			state.message = 'item removed'
		},
		edited: (state) => {
			state.type = 'success'
			state.message = 'item edited'
		},
		added: (state) => {
			state.type = 'success'
			state.message = 'item added'
		},
		removeAlert: (state) => {
			state.type = ''
			state.message = ''
		},
		invalidInput: (state) => {
			state.type = 'danger'
			state.message = 'invalid input'
		},
	},
})

export const selectMessage = (state) => state.alert.message
export const selectType = (state) => state.alert.type
export const { added, edited, removed, cleared, removeAlert, invalidInput } =
	alertSlice.actions
export default alertSlice.reducer
