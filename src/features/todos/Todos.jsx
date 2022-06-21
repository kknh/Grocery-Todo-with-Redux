import { FaEdit, FaTrash } from 'react-icons/fa'
import './Todos.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllTodos, deleteTodo, clearTodos, startEdit } from './todosSlice'
import { setTitle } from '../form/formSlice'
import { cleared, removed } from '../alert/alertSlice'
const Todos = () => {
	const todos = useSelector(selectAllTodos)
	const dispatch = useDispatch()
	const handleEdit = (id, title) => {
		dispatch(startEdit(id))
		dispatch(setTitle(title))
	}
	const handleClear = () => {
		dispatch(clearTodos())
		dispatch(cleared())
	}
	const handleDelete = (id) => {
		dispatch(deleteTodo(id))
		dispatch(removed())
	}

	return (
		<div className="list">
			{todos.map((todo) => (
				<div className="listItem" key={todo.id}>
					<span className="listItemTitle">{todo.title}</span>
					<div className="listItemButtons">
						<FaEdit
							className="editBtn"
							onClick={() => handleEdit(todo.id, todo.title)}
						/>
						<FaTrash
							className="deleteBtn"
							onClick={() => handleDelete(todo.id)}
						/>
					</div>
				</div>
			))}

			<button className="clearBtn" onClick={handleClear}>
				clear items
			</button>
		</div>
	)
}
export default Todos
