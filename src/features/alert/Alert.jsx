import { useEffect } from 'react'
import './Alert.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectMessage, selectType, removeAlert } from './alertSlice'
import { selectAllTodos } from '../todos/todosSlice'
const Alert = () => {
	const dispatch = useDispatch()
	const type = useSelector(selectType)
	const message = useSelector(selectMessage)
	const todos = useSelector(selectAllTodos)

	useEffect(() => {
		const alert = setTimeout(() => {
			dispatch(removeAlert())
		}, 3000)

		return () => clearTimeout(alert)
	}, [todos, dispatch])

	return <div className={`alert ${type}`}>{message}</div>
}
export default Alert
