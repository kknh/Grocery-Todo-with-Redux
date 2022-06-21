import { addTodo, editTodos, selectEditingStatus } from '../todos/todosSlice'
import { selectTitle, setTitle } from './formSlice'
import { useSelector, useDispatch } from 'react-redux'
import { added, edited, invalidInput } from '../alert/alertSlice'
import './Form.css'
const Form = () => {
	const dispatch = useDispatch()
	const editing = useSelector(selectEditingStatus)
	const title = useSelector(selectTitle)
	const handleSubmit = (e) => {
		e.preventDefault()
		if (title.length > 0) {
			dispatch(addTodo(title))
			dispatch(setTitle(''))
			dispatch(added())
		} else {
			dispatch(invalidInput())
		}
	}

	const handleEdit = (e) => {
		e.preventDefault()
		if (title.length > 0) {
			dispatch(editTodos(title))
			dispatch(setTitle(''))
			dispatch(edited())
		} else {
			dispatch(invalidInput())
		}
	}

	return (
		<form className="todoForm" onSubmit={!editing ? handleSubmit : handleEdit}>
			<input
				className="todoInput"
				type="text"
				value={title}
				placeholder="e.g. eggs"
				onChange={(e) => dispatch(setTitle(e.target.value))}
			/>
			<button className="btn" type="submit">
				{editing ? 'edit' : 'submit'}
			</button>
		</form>
	)
}
export default Form
